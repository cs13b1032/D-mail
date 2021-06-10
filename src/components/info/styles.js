import { makeStyles } from "@material-ui/core/styles";
import BackgroundImg from "../../static/images/background_images/mountain.png";

export const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      backgroundImage: `url(${BackgroundImg})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    section1: {
      margin: theme.spacing(0, 2, 0),
    },
    formatAlignLeftIconClass: {
      margin: theme.spacing(2, 2, 0),
      color: "#FFFFFF",
    },
    yourThingsClass: {
      margin: theme.spacing(0, 3, 0),
      width: "10%",
      color: "#FFFFFF",
    },
    quantityClass: {
      color: "#FFFFFF",
      fontSize: theme.spacing(4),
      alignContent: "left",
      float: "left",
      margin: theme.spacing(5, 0.5, 0),
    },
    textClass: {
      color: "#FFFFFF",
      fontSize: theme.spacing(1.5),
      marginLeft: theme.spacing(0.5),
    },
    dateClass: {
      color: "#FFFFFF",
      fontSize: theme.spacing(1.8),
      alignContent: "left",
      margin: theme.spacing(8, 3, 3),
    },
    barRoot: {
      height: 15,
      borderRadius: 5,
    },
    progressBarClass: {
      maxWidth: "60%"
    },
    bar: ({ progress }) => ({
      borderRadius: 5,
      background: `linear-gradient(90deg, #7e91ed ${
        100 - progress
      }%, #23b6ed 100%)`,
    }),
    percentageClass: {
      display: "inline",
      margin: theme.spacing(-0.5, 0.9, 0),
      float: "right"
    },
    circularProgressClass:{
      height: "24px",
    },
    content: {
      height: "100%",
      width: "100%",
      // backgroundColor: `linear-gradient(to right, #111 80%, rgba(0,0,0,5) 50%)`
      // backgroundColor: "rgba(0, 0, 0, 0.4)",  // for showing the opacity film on background image
    }
  }));