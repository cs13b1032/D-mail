// AddItem

import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import tie from "../../static/images/avatar/tie.jpg";
// import addItem from "../../static/images/avatar/addItem.jpg";
// import backIcon from "../../static/images/avatar/backIcon.jpg";
import { useStyles } from "./styles";
import FormatIndentIncreaseIcon from "@material-ui/icons/FormatIndentIncrease";


export default function AddItem() {
  const classes = useStyles();
  const [type, setType] = React.useState("");
  const [eventName, setEventName] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [time, setTime] = React.useState("");
  const [notification, setNotification] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeEventName = (event) => {
    setEventName(event.target.value);
  };

  const handleChangePlace = (event) => {
    setPlace(event.target.value);
  };

  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };

  const handleChangeNotification = (event) => {
    setNotification(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const disableAddButton = () => {
    if (
      type !== "" &&
      eventName !== "" &&
      place !== "" &&
      time !== "" &&
      notification !== ""
    ) {
      return false;
    }
    return true;
  };

  return (
    <div className={classes.root}>
      <div className={classes.headerClass}>
        <Button>
          <Link to="/">
            <ArrowBackIcon className={classes.arrowBackIconClass} />
            {/* <Avatar
            alt={"Dummy"}
            src={backIcon}
            className={classes.arrowBackIconClass}
          /> */}
          </Link>
        </Button>
        <Typography className={classes.header}>Add new thing</Typography>
        <Button>
          {/* <Avatar
          alt={"Dummy"}
          src={addItem}
          className={classes.arrowBackIconClass}
        /> */}
          <FormatIndentIncreaseIcon
            className={classes.formatIndentIncreaseIconClass}
          />
        </Button>
      </div>
      <Avatar alt={"Dummy"} src={tie} className={classes.avatarClass} />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={type}
          className={classes.select}
          inputProps={{ style: { fontFamily: "nunito", color: "white" } }}
          onChange={handleChangeType}
        >
          <MenuItem value={"BUSINESS"}>Business </MenuItem>
          <MenuItem value={"PERSONAL"}>Personal </MenuItem>
        </Select>
      </FormControl>
      <div></div>
      <TextField
        id="event_name"
        label="Event name"
        className={classes.formControl}
        inputProps={{ style: { fontFamily: "nunito", color: "white" } }}
        onChange={handleChangeEventName}
      />
      <TextField
        id="place"
        label="Place"
        className={classes.formControl}
        inputProps={{ style: { fontFamily: "nunito", color: "white" } }}
        onChange={handleChangePlace}
        InputLabelProps={{
          color: "white",
        }}
      />
      <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          label="Time"
          type="datetime-local"
          // defaultValue={new Date()}
          className={classes.formControl}
          onChange={handleChangeTime}
          inputProps={{ style: { fontFamily: "nunito", color: "white" } }}
          InputLabelProps={{
            shrink: true,
            color: "white",
          }}
        />
      </form>
      <TextField
        id="notification"
        label="Notification"
        className={classes.formControl}
        onChange={handleChangeNotification}
        inputProps={{ style: { fontFamily: "nunito", color: "white" } }}
      />
      <div></div>

      <Link
        to={{
          pathname: "/",
          addedItem: {
            type: type,
            name: eventName,
            place: place,
            time: time,
            notification: notification,
          },
        }}
        style={{ textDecoration: "none", color: "white" }}
      >
        <Button
          variant="contained"
          color="primary"
          disabled={disableAddButton()}
          className={classes.button}
        >
          Add Your Thing
        </Button>
      </Link>
    </div>
  );
}
