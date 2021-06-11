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
    right: theme.spacing(2),
    backgroundColor: "#34baeb",
    zIndex: 100,
    shadowOpacity: 0.8,
  },
  avatarSmallClass: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
  },
  avatarMainClass: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  dividerInset: {
    margin: `5px 0 0 0`,
    fontSize: "15px",
  },
  subDividerInset: {
    marginLeft: theme.spacing(2),
    fontSize: "12px",
  },
  addIcon: {
    color: "#FFFFFF",
    fontSize: "35px",
    marginTop: "8px",
  },
  listDiv: {
    alignItems: "center",
    margin: theme.spacing(3, 2, 0),
    maxWidth: "95%",
  },
  avatarGroupClass: {
    margin: theme.spacing(0, 0, 0),
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
    margin: theme.spacing(0, 1, 0),
    // float: "right"
  },
  completedClass: {
    margin: theme.spacing(2, 0, 0),
  },
  badgeClass: {
    margin: theme.spacing(0,2,0)
  },
  customBadge: {
    backgroundColor: "#999cad",
    color: "white"
  },
  listItemTextClass: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: theme.spacing(2,2.5,0)
  },
}));