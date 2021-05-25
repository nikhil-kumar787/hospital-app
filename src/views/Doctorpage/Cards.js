import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import Button from "../../components/CustomButtons/Button.js";

import { cardTitle } from "../../assets/jss/material-kit-react.js";
import { Link } from "react-router-dom";


const styles = {
  cardTitle,
  textCenter: {
    textAlign: "center"
  },
  textMuted: {
    color: "#6c757d"
  },
};

const useStyles = makeStyles(styles);

export default function Cards() {
 
  const classes = useStyles();
  return (
    <Card className={classes.textCenter}>
      <CardHeader color="danger"> <h3>SPECIALISATION</h3></CardHeader>
      <CardBody>
        <h1 className={classes.cardTitle}>Special title treatment</h1>
        <p>
          With supporting text below as a
          natural lead-in to additional content.
        </p>
        <Link to ="/modal">
        <Button color="primary">Book Appointment  </Button>
        </Link>
      </CardBody>
     
    </Card>
  );
}