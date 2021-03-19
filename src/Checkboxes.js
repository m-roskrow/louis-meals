import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup(props) {
  function sendChange() {
      props.onChange(state);
  }
  const classes = useStyles();
  const [state, setState] = React.useState({
    meat: false,
    fish: false,
    flexible: false,
    saturday: false,
    sunday: false
  });


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { meat, fish, flexible, saturday, sunday } = state;
  const error = [meat, fish, flexible, saturday, sunday].filter((v) => v).length !== 3;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Choose Meal Restrictions</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={meat} onChange={handleChange} name="meat" />}
            label="Meat"
          />
          <FormControlLabel
            control={<Checkbox checked={fish} onChange={handleChange} name="fish" />}
            label="Fish"
          />
          <FormControlLabel
            control={<Checkbox checked={flexible} onChange={handleChange} name="flexible" />}
            label="Flexible"
          />
          <FormControlLabel
            control={<Checkbox checked={saturday} onChange={handleChange} name="saturday" />}
            label="Saturday"
          />
          <FormControlLabel
            control={<Checkbox checked={sunday} onChange={handleChange} name="sunday" />}
            label="Sunday"
          />
        </FormGroup>
        <FormHelperText>Don't be a cunt</FormHelperText>
        <Button onClick={sendChange}>Submit Checks</Button>
      </FormControl>
    </div>
  );
}