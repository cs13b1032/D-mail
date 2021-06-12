import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import Paper from "@material-ui/core/Paper";

import Info from "../info/Info";
import tie from "../../static/images/avatar/tie.jpg";
import { useStyles } from "./styles";
import { getTime, getMeetingsCount, getIsMeetingCompleted } from "./utils";
import { mappedIconsFunc } from "../icon/utils";
import oneImg from "../../static/images/avatar/1.jpg";
import twoImg from "../../static/images/avatar/2.jpg";

export default function AlignItemsList(props) {
  const classes = useStyles();
  const mappedIcons = mappedIconsFunc();
  const [meetingsData, setMeetingsData] = React.useState([
    {
      type: "BUSINESS",
      name: "Boglioli suit fitting",
      place: "Linnégatan 2, Gothenburg",
      time: "2021-06-09T00:00",
      icon: "tie",
      notification: "",
    },
    {
      type: "BUSINESS",
      name: "Final design delivery",
      place: "Inuse Experience, Gothenburg",
      time: "2021-06-09T02:00",
      icon: "sketch",
      notification: "",
    },
    {
      type: "BUSINESS",
      name: "Lunch run meeting",
      place: "Trägdårdsföreningen, Gothenburg",
      time: "2021-06-09T04:00",
      icon: "shoe",
      notification: "",
    },
    {
      type: "PERSONAL",
      name: "Record Techno mixtape",
      place: "Klockwork Studios, Stockholm",
      time: "2021-06-09T09:30",
      icon: "music",
      hasOthers: true,
      notification: "",
    },
    {
      type: "BUSINESS",
      name: "Final design delivery",
      place: "Inuse Experience, Gothenburg",
      time: "2021-06-09T23:57",
      icon: "sketch",
      notification: "",
    },
    {
      type: "BUSINESS",
      name: "Lunch run meeting",
      place: "Trägdårdsföreningen, Gothenburg",
      time: "2021-06-09T23:58",
      icon: "shoe",
      notification: "",
    },
    {
      type: "PERSONAL",
      name: "Record Techno mixtape",
      place: "Klockwork Studios, Stockholm",
      time: "2021-06-09T23:59",
      icon: "music",
      hasOthers: true,
      notification: "",
    },
  ]);

  const setMeetingsDataFunc = () => {
    if (props && props.location && props.location.addedItem) {
      setMeetingsData(meetingsData.concat(props.location.addedItem));
    }
  };

  React.useEffect(() => {
    setMeetingsDataFunc();
  }, meetingsData);

  const meetingsDataCount = getMeetingsCount(meetingsData);

  const createCurrentTasks = () => {
    let meetingsArrayDiv = [];

    for (let i = 0; i < meetingsData.length; i++) {
      const meetingData = meetingsData[i];
      if (!getIsMeetingCompleted(meetingData.time)) {
        meetingsArrayDiv.push(
          <div className={classes.listItemdivClass}>
            <ListItem className={classes.listItemClass2}>
              <ListItemAvatar>
                <Avatar
                  alt={meetingData.name}
                  src={meetingData.icon ? mappedIcons[meetingData.icon] : tie}
                  className={classes.avatarMainClass}
                />
              </ListItemAvatar>
              <ListItemText
                className={classes.listItemTextClass}
                primary={meetingData.name}
                secondary={<React.Fragment className={classes.listItemTextClass}>{meetingData.place}</React.Fragment>}
              ></ListItemText>
              <Typography
                className={classes.dividerInset}
                color="textSecondary"
                variant="caption"
              >
                <div className={classes.meetingTimeAlignClass}>
                  <Typography
                    className={classes.meetingTimeClass}
                    color="textSecondary"
                    variant="caption"
                  >
                    {getTime(meetingData.time)}
                  </Typography>
                  {meetingData.hasOthers ? (
                    <div>
                      <AvatarGroup className={classes.avatarGroupClass} max={3}>
                        <Avatar
                          alt={meetingData.name}
                          src={oneImg}
                          className={classes.avatarSmallClass}
                        />
                        <Avatar
                          alt={meetingData.name}
                          src={twoImg}
                          className={classes.avatarSmallClass}
                        />
                      </AvatarGroup>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Typography>
            </ListItem>
            <Divider className={classes.subDividerInset2} />
          </div>
        );
      }
    }

    return meetingsArrayDiv;
  };

  return (
    <List className={classes.root}>
      <Paper elevation={0} className={classes.paperClass}>
        <Info
          className={classes.listItemClass}
          business={meetingsDataCount.business}
          personal={meetingsDataCount.personal}
          completedPercentage={Math.ceil(
            (meetingsDataCount.completedMeetingsCount /
              (meetingsDataCount.business + meetingsDataCount.personal)) *
              100
          )}
        />
      </Paper>
      <div className={classes.listDiv}>
        <Typography
          className={classes.subDividerInset}
          color="textSecondary"
          variant="caption"
        >
          INBOX
        </Typography>
        {createCurrentTasks()}
        <div className={classes.completedClass}>
          <Typography
            className={classes.subDividerInset}
            color="textSecondary"
            variant="caption"
          >
            COMPLETED
            <Badge
              badgeContent={meetingsDataCount.completedMeetingsCount}
              color="secondary"
              classes={{ badge: classes.customBadge }}
              className={classes.badgeClass}
            ></Badge>
          </Typography>
        </div>

        <Fab aria-label="add" className={classes.fab}>
          <Link to="/add-item">
            <AddIcon className={classes.addIcon} />
          </Link>
        </Fab>
      </div>
    </List>
  );
}
