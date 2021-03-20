import React from "react";
import Button from "@material-ui/core/Button";
import img1 from "./cheflou.jpg"
import Checkboxes from "./Checkboxes.js"
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      maxWidth: 1000,
      maxHeight: 2000
    },
    media: {
        height: 400
    }
  }));

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkCheck(meal, checks) {
    var output = false;
    if (checks.meat );   
    return true;
}

function getValidMeals (meals, checks) {
    for (var i = 0; i < Object.keys.length; i ++){
        
    }
}

function randomMeal(data, count, checks){
    if (count > 50 ) return("Checks too Strict");
    const keys = (Object.keys(data.meals));
    const validMeals = getValidMeals(data.meals, checks);
    const output = data.meals[keys[getRandomInt(0, keys.length-1)]]
    if (checkCheck(output, checks)) return (output.meal_nice);
    else (randomMeal (data, count + 1, checks));
    
}

function Meals (props){
    const classes = useStyles();
    const [data, setData] = React.useState(require('./louis-meals.json'));
    const [meal, setMeal] = React.useState("no meal");
    const [checks, setChecks] = React.useState({vege: false, meat: false, saturday: false, sunday: false})
    function mealButton(){
        setMeal(randomMeal(data, 0, checks))
    };
    function updateChecks(newChecks){
        setChecks(newChecks);
    }
    return (
        <Grid className={classes.root} container spacing={0} align="center" justify="center">
            <Grid item xs={3}>
                <Checkboxes onChange={updateChecks}></Checkboxes>
            </Grid>
            <Grid item xs={9}>
                <Card onClick={mealButton} className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={img1}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {meal}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            click me for new mealsie
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    )
}
export default Meals;