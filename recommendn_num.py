from pymongo import MongoClient
import numpy as np
import random
import pandas as pd
from sklearn.neighbors import NearestNeighbors
import sklearn.metrics as metrics
from sklearn.metrics import pairwise_distances
from sklearn.metrics import mean_squared_error
import copy
from bson import ObjectId

############### INTERESTS ###################################################################################
# intrests = ["Nature", "HTML", "CSS", "History", "Animals", "Technology",
#             "Flowers", "Gadgets", "ML", "Web Design", "Fitness", "Astronomy", "Cars"]
#############################################################################################################
############### INTERESTS ###################################################################################
intrests = ["nature", "html", "css", "history", "animals", "technology",
            "flowers", "gadgets", "ml", "web design", "fitness", "astronomy", "cars"]
#############################################################################################################
global k, metric
k = 4
metric = "cosine"

logged_in_user = "5dbbb26c04d090318d20e13e"
MONGODB_URI = "mongodb+srv://aaquib:ase-project@cluster0-y3yvk.mongodb.net/ase-project?retryWrites=true&w=majority"
client = MongoClient(MONGODB_URI)
db = client["ase-project"]
users = db.users
profiles = db.profiles
cursor_profiles = profiles.find({})
cursor_users = users.find({})
user_list = []
user_ids = []
for user in cursor_users:
    user_ids.append(user["_id"])
    user_list.append(user)
print("earlier length is : ", len(user_list))
print("\n\n\n")

profile_ids = []

for profile in cursor_profiles:
    profile_ids.append(profile["user"])

user_id = user_list[-1]["_id"]
print(user_id)
aaquib = users.find_one({"_id": user_id})
# print(aaquib.keys())

##########################################################################################################################
# This function finds k similar users given the user_id and ratings matrix M
# Note that the similarities are same as obtained via using pairwise_distances
##########################################################################################################################


def findksimilarusers(user_id, ratings, metric=metric, k=k):
    similarities = []
    indices = []
    model_knn = NearestNeighbors(metric=metric, algorithm='brute')
    model_knn.fit(ratings)
    print(user_id, type(user_id))
    if(type(user_id) == type("str")):
        user_id = ObjectId(user_id)
    # user_id = ObjectId(user_id)
    distances, indices = model_knn.kneighbors(

        ratings.loc[user_id].values.reshape(1, -1), n_neighbors=k+1)
    # except:
    #     print(ratings)
    similarities = 1-distances.flatten()
    print(M.iloc[indices[0][3]], "ind is :", indices[0][3]+1, indices[0]+1)
    # g = M.iloc[indices[0][3]]
    print(M.iloc[indices[0][3]].name)

    # print("\n\n done:",M.head())
    recommendations = []
    print('{0} most similar users for User {1}:\n'.format(k, user_id))
    for i in range(0, len(indices.flatten())):
        if M.iloc[indices.flatten()[i]].name == user_id:
            continue
        else:
            recommendations.append(M.iloc[indices.flatten()[i]].name)
            print('{0}: User {1}, with similarity of {2}'.format(
                i, indices.flatten()[i]+1, similarities.flatten()[i]))

    return similarities, indices, recommendations
##########################################################################################################################
# This function makes the ratings matrix M
##########################################################################################################################


def check_if_user_has_profile(user):
    b = profiles.find_one({"user": user["_id"]})
    if(b):
        return b
    return False


def ListDifference(l1, l2):
    return list(set(l1)-set(l2))


def DataFrame_Matrix(final_connection_list):
    # final_connection_list.append(my_usr)
    M = dict()
    print(len(final_connection_list))
    for connection in final_connection_list:
        us = users.find_one({"_id": connection})
        if(not us):
            continue
        u = check_if_user_has_profile(us)
        if(not u):
            continue
        u_skills = u["skills"]
        d = dict()
        for sk in u_skills:
            d[str(sk[0]).lower()] = sk[1]
        rest = ListDifference(intrests, d.keys())
        for a in rest:
            d[a] = 0
        # print("here is it: ",d)
        M[connection] = d
    M = pd.DataFrame(M).T
    return M


##########################################################################################################################

def get_connections(user, num=5):
    # earlier_recommendations = user["recommendations"]
    # num = 4 - len(user["recommendations"])
    # friends = user["freinds"]
    # print(len(friends))
    # frnd_objs = users.find({"_id": {"$in": friends}})
    # connection_list = set()
    # for frnd in frnd_objs:
    #     connection_list = connection_list.union(set(frnd["freinds"]))
    # print("conn list: ", len(connection_list))
    # final_connection_list = list(set(connection_list)-set(friends))
    # final_connection_list = list(
    #     set(final_connection_list) - set(earlier_recommendations))
    # final_connection_list.append(current_user_id)
    # print(len(final_connection_list))
    # print("here")
    friends = user["freinds"]
    print(user["email"])
    original_friends = friends.copy()
    # friends = set(friends)
    connection_list = set()
    l = len(connection_list)
    while(l < 15):
        frnd_objs = users.find({"_id": {"$in": friends}})
        for frnd in frnd_objs:
            try:
                connection_list = connection_list.union(set(frnd["freinds"]))
            except:
                print("here see it: ", frnd["freinds"])
                print(frnd["email"])
                continue
        friends = list(connection_list)
        print(original_friends)
        connection_list = connection_list - set(original_friends)
        connection_list.add(user["_id"])
        l = len(connection_list)
    return list(connection_list)
##########################################################################################################################


i = 0
for user in user_list:
    current_user_id = user["_id"]
    connection_list = []
    if(not check_if_user_has_profile(user)):
        print("here 1")
        i += 1
        print("no profile {}".format(i))
        continue
    if(len(user["freinds"]) == 0):
        print("here 2")
        r_users = profiles.aggregate([{"$sample": {"size": 15}}])
        for sample in r_users:
            # sample["user"]
            connection_list.append(sample["user"])
        connection_list.append(current_user_id)
    elif(len(user["recommendations"]) == 4):
        print("here 3")
        i += 1
        print("skipped {}".format(i))
        continue
    elif(len(user["recommendations"]) < 4):
        print("here 4")
        earlier_recommendations = user["recommendations"]
        num = 4 - len(user["recommendations"])
        friends = user["freinds"]
        print(len(friends))
        frnd_objs = users.find({"_id": {"$in": friends}})
        connection_list = get_connections(user)
        # for frnd in frnd_objs:
        #     connection_list = connection_list.union(set(frnd["freinds"]))
        # print("conn list: ", len(connection_list))
        # final_connection_list = list(set(connection_list)-set(friends))
        # final_connection_list = list(
        #     set(final_connection_list) - set(earlier_recommendations))
        # final_connection_list.append(current_user_id)
        # print(len(final_connection_list))
        # print("here")
    print(user)
    M = DataFrame_Matrix(connection_list)
    print("here after user: \n", M)
    cosine_sim = 1-pairwise_distances(M, metric="cosine")
    print(user["email"])
    p = profiles.find_one({"user": user["_id"]})
    print(p["handle"])
    print("Matrix is :\n", M)
    # pearson_sim = 1-pairwise_distances(M, metric="correlation")
    print(pd.DataFrame(cosine_sim))
    similarities, indices, recommendations = findksimilarusers(
        current_user_id, M, metric='cosine')
    # earlier_recommendations.insert(0, *recommendations)
    print(recommendations)
    x = recommendations[0]
    print(x, type(x), str(x), type(str(x)))
    new_recommdn = [str(x) for x in recommendations]
    print(new_recommdn)
    # break
    # break
    print(current_user_id)
    users.find_one_and_update({"_id": current_user_id},
                              {"$set": {"recommendations": new_recommdn}})
    i += 1
    print("************  updated ---{}---  ************".format(i))
# print(aaquib["freinds"])
# l = users.aggregate([ { "$sample": { "size": 3 } } ])
# print(len(r_sample))

# users.delete_many({"freinds": {"$exists": False}})
# new_users = users.find({})
# new_list = []
# for user in new_users:
#     new_list.append(user)

# print("earlier length is : ", len(user_list))
# uid = user_list[0]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[1]["_id"], user_list[2]["_id"], user_list[3]["_id"], user_list[4]["_id"], user_list[5]["_id"]]}})
# uid = user_list[1]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[0]["_id"], user_list[6]["_id"], user_list[7]["_id"]]}})
# uid = user_list[2]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[0]["_id"], user_list[7]["_id"], user_list[8]["_id"], user_list[9]["_id"], user_list[10]["_id"]]}})
# uid = user_list[3]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[0]["_id"], user_list[10]["_id"], user_list[11]["_id"], user_list[12]["_id"], user_list[13]["_id"]]}})
# uid = user_list[4]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[0]["_id"], user_list[13]["_id"], user_list[14]["_id"], user_list[15]["_id"], user_list[16]["_id"], user_list[17]["_id"]]}})
# uid = user_list[5]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[0]["_id"], user_list[18]["_id"], user_list[19]["_id"], user_list[20]["_id"], user_list[6]["_id"]]}})
# uid = user_list[6]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[5]["_id"], user_list[1]["_id"]]}})
# uid = user_list[7]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[1]["_id"], user_list[2]["_id"], user_list[8]["_id"]]}})
# uid = user_list[8]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[7]["_id"], user_list[9]["_id"], user_list[2]["_id"]]}})
# uid = user_list[9]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[2]["_id"], user_list[8]["_id"], user_list[11]["_id"], user_list[10]["_id"]]}})
# uid = user_list[10]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[2]["_id"], user_list[9]["_id"], user_list[11]["_id"], user_list[3]["_id"]]}})
# uid = user_list[11]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[9]["_id"], user_list[10]["_id"], user_list[12]["_id"], user_list[3]["_id"]]}})
# uid = user_list[12]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[11]["_id"], user_list[13]["_id"], user_list[3]["_id"]]}})
# uid = user_list[13]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[3]["_id"], user_list[4]["_id"], user_list[12]["_id"], user_list[14]["_id"], user_list[21]["_id"]]}})
# uid = user_list[14]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[21]["_id"], user_list[22]["_id"], user_list[4]["_id"], user_list[13]["_id"]]}})
# uid = user_list[15]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[4]["_id"], user_list[22]["_id"], user_list[23]["_id"]]}})
# uid = user_list[16]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[4]["_id"], user_list[23]["_id"], user_list[24]["_id"]]}})
# uid = user_list[17]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[4]["_id"], user_list[25]["_id"]]}})
# uid = user_list[18]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[5]["_id"], user_list[19]["_id"], user_list[26]["_id"], user_list[27]["_id"]]}})
# uid = user_list[19]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[5]["_id"], user_list[20]["_id"], user_list[18]["_id"]]}})
# uid = user_list[20]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[19]["_id"], user_list[5]["_id"]]}})
# uid = user_list[21]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[13]["_id"], user_list[22]["_id"], user_list[14]["_id"]]}})
# uid = user_list[22]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[21]["_id"], user_list[15]["_id"], user_list[14]["_id"]]}})
# uid = user_list[23]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[15]["_id"], user_list[16]["_id"]]}})
# uid = user_list[24]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[16]["_id"]]}})
# uid = user_list[25]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[17]["_id"]]}})
# uid = user_list[26]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[18]["_id"]]}})
# uid = user_list[27]["_id"]
# users.find_one_and_update({"_id": uid},
#                           {"$set": {"freinds": [user_list[18]["_id"]]}})
"""
print("\n\n")
my_usr = user_list[0]["_id"]
print("\n\nhere is the name : {} and mail : {}".format(user_list[0]["name"],user_list[0]["email"]))
print("both are not same",type(my_usr)==type(logged_in_user))
logged_usr_object = users.find_one({"_id":my_usr})
print(logged_usr_object)
friends = logged_usr_object["freinds"]
print(len(friends))
frnd_objs = users.find({"_id": {"$in": friends}})
connection_list = set()
for frnd in frnd_objs:
  connection_list = connection_list.union(set(frnd["freinds"]))
print("conn list: ", len(connection_list))
final_connection_list = list(set(connection_list)-set(friends))
print(len(final_connection_list))
M = dict()
print("here")

def ListDifference(l1,l2):
  return list(set(l1)-set(l2))

final_connection_list.append(my_usr)
print(len(final_connection_list))
for connection in final_connection_list:
  u = profiles.find_one({"user":connection})
  u_skills = u["skills"]
  d = dict()
  for sk in u_skills:
    d[sk[0]]=sk[1]
  rest = ListDifference(intrests,d.keys())
  for a in rest:
    d[a] = 0
  # print("here is it: ",d)
  M[connection] = d
  # print(M)
  # M = pd.DataFrame(M)
  # print(M)
  # break
  # for intr in u["skills"]:
M = pd.DataFrame(M).T
# a = final_connection_list[3]
# print(M)
# print(type(a)==type(connection))
print(connection)
print("yuhu over here:",M.loc[my_usr].values)
# print(M.loc[a])

global k,metric
k=4
metric = "cosine"
cosine_sim = 1-pairwise_distances(M, metric="cosine")
pearson_sim = 1-pairwise_distances(M, metric="correlation")
# pd.DataFrame(cosine_sim)
# pd.DataFrame(pearson_sim)
print(pd.DataFrame(cosine_sim))
# print("here: ",M.loc[a,:])




similarities,indices,recommendations = findksimilarusers(connection,M, metric='cosine')
print(recommendations)
"""


# db.collection.update({'_id': ObjectId(...)},
#                      {'$set': {'create_time': datetime(..)}})
# total_conn = []

# left_ids = []
# for i in user_ids:
#   if(i not in profile_ids):
#     left_ids.append(i)

# for u in user_ids:
#   r = random.sample(range(0, 13), 8)
#   skills = []
#   for n in r:
#       num = np.random.randint(2, 10)
#       skills.append([intrests[n], num])
#   user = users.find_one({"_id":u})
#   randomHandle = np.random.randint(1, 1000000)
#   my_dict = {"skills":skills,"user":user["_id"],"handle":user["name"] + str(randomHandle) + "pro","status":"student","experience":[],"education":[]}
#   profiles.insert_one(my_dict)


# for user in cursor_users:
#     r = np.random.sample((0, 13), 8)
#     skills = []
#     for n in r:
#         num = np.random.randint(2, 10)
#         skills.append([intrests[n], num])
#     my_dict = {"skills":skills,"user":user["_id"],"handle":user["name"] + "pro","status":"student","experience":[],"education":[]}
#     profiles.find_one_and_update({"$and": [{"user": user["_id"]},{"$exists":False}], {"$set": {"skills": skills}})
# my_dict = {"skills":[("Nature",6),("HTML",3)],"user":user_id,"handle":"SKMKB","status":"MC","experience":[],"education":[]}
# profiles.insert_one(my_dict)
# print(len(set(total_conn)))
