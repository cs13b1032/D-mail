import { makeStyles } from "@material-ui/core/styles";
import BackgroundImg from "../../static/images/background_images/mountain.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // height: "100vh",
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${BackgroundImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    top: 0,
    left: 0,
  },
  section1: {
    margin: theme.spacing(0, 2, 0),
  },
  formatAlignLeftIconClass: {
    margin: theme.spacing(0, 0, 0),
    color: "#FFFFFF",
  },
  yourThingsClass: {
    margin: theme.spacing(2, 1.25, -2.5),
    width: "10%",
    color: "#e2e7f2",
    fontFamily: "poppins, sans-serif",
    fontWeight: 100,
    fontSize: theme.spacing(5)
  },
  quantityClass: {
    color: "#FFFFFF",
    fontSize: theme.spacing(4),
    alignContent: "left",
    float: "left",
    margin: theme.spacing(5, 0.5, 0),
  },
  textClass: {
    color: "#f5f7fbc4",
    fontSize: theme.spacing(1.5),
    marginLeft: theme.spacing(0.5),
  },
  dateClass: {
    color: "#98a1b7",
    fontSize: theme.spacing(1.8),
    alignContent: "left",
    margin: theme.spacing(6, 1.25, 2.5),
    width: "50%",
    fontFamily: "poppins, sans-serif",
    fontWeight: 100,
  },
  barRoot: {
    height: 15,
    borderRadius: 5,
  },
  numberClass: {
    float: "right",
    marginBottom: theme.spacing(-1),
    marginTop: theme.spacing(0.75)
  },
  progressBarClass: {
    maxWidth: "60%",
  },
  bar: ({ progress }) => ({
    borderRadius: 5,
    background: `linear-gradient(#8091ed, #2ebaee)`,
  }),
  percentageClass: {
    display: "inline",
    margin: theme.spacing(-0, -0.9, 0),
    float: "right",
    fontSize: "13px",
    color: "0c59e8"
  },
  circularProgressClass: {
    height: "24px",
    marginRight: theme.spacing(2.17),
    marginTop: theme.spacing(-0.5)
  },
  content: {
    height: "100%",
    width: "100%",
    // backgroundColor: `linear-gradient(to right, #111 80%, rgba(0,0,0,5) 50%)`
    // backgroundColor: "rgba(10, 17, 7, 0)",  // for showing the opacity film on background image
  },
  inlineClass: {},
  circualPercentageClass: {
    display: "flex",
    margin: theme.spacing(-4.8, 2.1, 0),
    float: "right",
    color: "#f5f7fb75",
  },
  backButtonClass: {
    margin: theme.spacing(1, -1, -0.8),
  },
  numberTextClass: {
    marginRight: theme.spacing(0.8)
  },
  overlay: {
    height: theme.spacing(31.25),
    // height: "250px",
    width: "40%",
    marginLeft: "60%",
    position: "absolute",
    zIndex: 100000,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0, 0.1)",
    overflowX: "hidden",
    transition: "0.5s",
  },
  circularProgressClass2:{
    height: "24px",
    marginRight: theme.spacing(1.55),
    marginTop: theme.spacing(-1.15)
  }
}));
