// AddItem

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import tie from "../../static/images/avatar/tie.jpg";
import {useStyles} from './styles'


export default function Icon(props) {
  const classes = useStyles();
  return <Avatar alt={"Dummy"} src={tie} className={classes.avatarMainClass} />;
}
