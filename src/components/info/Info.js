// Info

import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./styles";
import { showDate } from "./utils";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { withStyles } from "@material-ui/core/styles";

// const withStyles = ({ progress = 20 }) => {
//   const classes = useStyles({ progress });

//   return (
//     <LinearProgress
//       classes={{ root: classes.root, bar: classes.bar }}
//       variant="determinate"
//       value={progress}
//     />
//   );
// };

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 4,
    // borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: `linear-gradient(#8091ed, #2ebaee)`,
  },
  bar: {
    // backgroundColor: `linear-gradient(#8091ed, #2ebaee)`,
    background: `linear-gradient(to right, #8091ed, #2ebaee)`
  },
}))(LinearProgress);

export default function Info(props) {
  const classes = useStyles();
  const currentDate = showDate();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.section1}>
          <Button>
            <FormatAlignLeftIcon className={classes.formatAlignLeftIconClass} />
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

            <Grid item>
              <Typography gutterBottom className={classes.quantityClass}>
                <div className={classes.numberClass}>{props.business}</div>
                <div className={classes.textClass}>Personal</div>
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom className={classes.quantityClass}>
                <div className={classes.numberClass}>{props.personal}</div>
                <div className={classes.textClass}>Business</div>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography gutterBottom className={classes.dateClass}>
              {currentDate.month} {currentDate.date}, {currentDate.year}
              <div className={classes.percentageClass}>
                {/* <CircularProgress
                  size={"15px"}
                  variant="determinate"
                  value={props.completedPercentage}
                  className={classes.circularProgressClass}
                /> */}
                <CircularProgressbarWithChildren
                  value={props.completedPercentage}
                  strokeWidth={10}
                  className={classes.circularProgressClass}
                  styles={buildStyles({
                    pathColor: "#50acf3",
                    trailColor: "#0e3e6a",
                  })}
                ></CircularProgressbarWithChildren>
                <div className={classes.percentageClass}>
                  {props.completedPercentage}% done
                </div>
              </div>
            </Typography>
          </Grid>
        </div>
        <div className={classes.progressBarClass}>
          {/* <ProgressLinear /> */}
          <BorderLinearProgress variant="determinate" value={100} />
        </div>
      </div>
    </div>
  );
}
