skills = "css 1 , java 10 , cpp 100";
skills = skills.split(",");
console.log(skills);
for (var i in skills) {
  skills[i] = skills[i].trim();
  console.log(skills[i]);
  //   skills[i] = skills[i].split(" ");
}
console.log(skills);
