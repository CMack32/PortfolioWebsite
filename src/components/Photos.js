import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
    paddingBottom: "11px",
  },
  bigSpace: {
    marginTop: "5rem",
    width: "20%",
    textAlign: "left",
  },
  littleSpace: {
    marginTop: "2.5rem",
    textAlign: "left",
  },
});

function Photos() {
    const classes = styles();
  return (
    <div className={classes.wrapper}>
      <Typography variant="h2" className={classes.bigSpace} color="primary">
        Under Construction.
      </Typography>
    </div>
  );
}

export default Photos;
