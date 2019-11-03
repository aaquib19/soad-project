import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import InputAdornment from "@material-ui/core/InputAdornment";
import avt from "./pic.jpg";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 550
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
}));
const BasicTextFields = ({ placeholder, label }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");
  // const { placeholder } = this.props;
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Grid>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-textarea"
          label={label}
          placeholder={placeholder}
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {" "}
                <Avatar
                  alt="Remy Sharp"
                  src={avt}
                  className={classes.bigAvatar}
                  positiion="fixed"
                />
              </InputAdornment>
            )
          }}
        />
      </form>
    </Grid>
  );
};
export default BasicTextFields;
