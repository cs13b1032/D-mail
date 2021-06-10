import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    avatarMainClass: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      margin: theme.spacing(5, 5, 0),
      alignContent: "middle",
    }
  }));
  