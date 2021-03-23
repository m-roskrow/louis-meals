// Should contain methods for providing a form in app layout
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function UpdateMealsForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h5>Update Meals</h5>
      <div>
        <TextField error id="standard-error" placeholder="meal_nice" />
      </div>
      <div>
        <TextField placeholder="Meat?" />
      </div>
      <div>
        <TextField placeholder="Fish?" />
      </div>
      <div>
        <TextField placeholder="Saturday?" />
      </div>
      <div>
        <TextField placeholder="Sunday?" />
      </div>
    </form>
  );
}
