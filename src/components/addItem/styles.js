import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#46529d",
    width: "100%",
    height: "100vh",
  },
  arrowBackIconClass: {
    color: "#2eb9ed",
    width: theme.spacing(5),
    height: theme.spacing(5),
    margin: theme.spacing(5, 3, 0),
  },
  formControl: {
    minWidth: "80%",
    margin: theme.spacing(2, 5, 0),
    borderColor: "#FFFFFF",
  },
  button: {
    minWidth: "80%",
    margin: theme.spacing(2, 5, 0),
    color: "#FFFFFF",
    backgroundColor: "#2ebaee",
    height: theme.spacing(7.5),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  headerClass: {
    display: "inline",
  },
  avatarClass: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(2, 25, 0),
    marginLeft: "40%",
  },
  header: {
    color: "#FFFFFF",
    margin: theme.spacing(7, 10, 0),
    // marginLeft: "18%",
    marginTop: theme.spacing(3),
    fontSize: theme.spacing(3),
    display: "inline",
  },
  formatIndentIncreaseIconClass: {
    color: "#2eb9ed",
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginTop: theme.spacing(3),
    // marginLeft: "100%"
  },
  select: {
    "&:before": {
      borderColor: "#f5f4f0",
    },
    "&:after": {
      borderColor: "#f5f4f0",
    },
  },
  icon: {
    fill: "#f5f4f0",
  },
}));
