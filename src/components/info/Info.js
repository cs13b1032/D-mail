// Info

import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useStyles } from "./styles";
import { showDate } from "./utils";
// import {
//   CircularProgressbarWithChildren,
//   buildStyles,
// } from "react-circular-progressbar";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import backButton from "../../static/images/avatar/three_lines.jpg";
import { CircleProgress } from "react-gradient-progress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 4,
  },
  colorPrimary: {
    backgroundColor: `linear-gradient(#8091ed, #2ebaee)`,
  },
  bar: {
    background: `linear-gradient(to right, #8091ed, #2ebaee)`,
  },
}))(LinearProgress);

export default function Info(props) {
  const classes = useStyles();
  const currentDate = showDate();

  return (
    <div className={classes.root}>
      <div className={classes.overlay}></div>
      <div className={classes.section1}>
        <Button className={classes.backButtonClass}>
          <Avatar
            alt={"Back Button"}
            src={backButton}
            className={classes.formatAlignLeftIconClass}
          />
        </Button>
        <Grid container>
          <Grid item xs>
            <Typography
              gutterBottom
              variant="h3"
              className={classes.yourThingsClass}
            >
              Your Things
            </Typography>
          </Grid>

          <Grid item className={classes.numberTextClass}>
            <Typography gutterBottom className={classes.quantityClass}>
              <div className={classes.numberClass}>{props.business}</div>
              <div className={classes.textClass}>Personal</div>
            </Typography>
          </Grid>
          <Grid item className={classes.numberTextClass}>
            <Typography gutterBottom className={classes.quantityClass}>
              <div className={classes.numberClass}>{props.personal}</div>
              <div className={classes.textClass}>Business</div>
            </Typography>
          </Grid>
        </Grid>
        <Typography gutterBottom className={classes.dateClass}>
          {currentDate.month} {currentDate.date}, {currentDate.year}
        </Typography>
        <div className={classes.circualPercentageClass}>
          {/* <CircularProgressbarWithChildren
            value={props.completedPercentage}
            strokeWidth={10}
            className={classes.circularProgressClass}
            styles={buildStyles({
              pathColor: "#50acf3",
              trailColor: "#0e3e6a",
            })}
          ></CircularProgressbarWithChildren> */}
          <div className={classes.circularProgressClass2}>
            <CircleProgress
              percentage={props.completedPercentage}
              strokeWidth={3}
              size={1}
              width={33}
              fontSize={'0px'}
              primaryColor={["#2ebaee", "#8091ed"]}
              secondaryColor="#0e3e6a"
            />
          </div>
          <div className={classes.percentageClass}>
            {props.completedPercentage}% done
          </div>
        </div>
      </div>
      <div className={classes.progressBarClass}>
        <BorderLinearProgress variant="determinate" value={100} />
      </div>
    </div>
  );
}
