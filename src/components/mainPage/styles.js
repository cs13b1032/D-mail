import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: "36ch",
    // alignItems: "center",
    margin: "auto",
    paddingTop: "inherit",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(7),
    right: theme.spacing(3.2),
    backgroundColor: "#34baeb",
    zIndex: 100,
    height: theme.spacing(7.5),
    width: theme.spacing(7.5),
    // shadowOpacity: 0.8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 300,
    boxShadow: 2
  },
  avatarSmallClass: {
    width: theme.spacing(2.3),
    height: theme.spacing(2.3),
    marginLeft: theme.spacing(-0.5),
  },
  avatarMainClass: {
    width: theme.spacing(9.4),
    height: theme.spacing(9.4),
  },
  dividerInset: {
    margin: `0 0 0 0`,
    fontSize: "15px",
  },
  subDividerInset: {
    marginLeft: theme.spacing(1.25),
    fontSize: "12px",
    fontFamily: "poppins, sans-serif",
    fontWeight: 500
  },
  addIcon: {
    color: "#FFFFFF",
    fontSize: "35px",
    marginTop: "8px",
  },
  listDiv: {
    // alignItems: "center",
    margin: theme.spacing(3, 2, 0),
    maxWidth: "95%",
  },
  avatarGroupClass: {
    margin: theme.spacing(0, 0, 0),
    float: "right"
  },
  timeClass: {
    margin: theme.spacing(0, 0, 0),
  },
  listItemClass: {
    paddingTop: "inherit",
    position: "fixed",
    // zIndex: 100
  },
  meetingTimeClass: {
    fontSize: "15px",
    margin: theme.spacing(0, 0, 0),
    // float: "right"
    color: "#a5a5a5",
    fontFamily: "poppins, sans-serif",
    // fontWeight: 100
  },
  completedClass: {
    margin: theme.spacing(2.25, 0, 0),
    fontFamily: "mukta, sans-serif",
    color: "9c9eaf"
  },
  badgeClass: {
    margin: theme.spacing(0, 2.25, 0),
  },
  customBadge: {
    backgroundColor: "#999cad",
    color: "white",
  },
  listItemTextClass: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: theme.spacing(2, 1, 0),
    fontFamily: "poppins, sans-serif",
    fontWeight: 100
  },
  listItemTextClassSeconday: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: theme.spacing(2, 1, 0),
    fontFamily: "poppins, sans-serif",
    fontWeight: 100,
    color: "#a5a5a5",
  },
  subDividerInset2: {
    marginLeft: theme.spacing(1.3),
    marginRight: theme.spacing(1.3),
    fontSize: "12px",
  },
  listItemClass2: {
    paddingLeft: theme.spacing(0.55),
    paddingRight: theme.spacing(1.2),
  },
  meetingTimeAlignClass: {
    marginBottom : theme.spacing(3)
  }
}));
