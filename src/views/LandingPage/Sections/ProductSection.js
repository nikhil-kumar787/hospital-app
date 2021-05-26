import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
<<<<<<< HEAD
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import PanToolIcon from "@material-ui/icons/PanTool";
=======
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PanToolIcon from '@material-ui/icons/PanTool';
>>>>>>> 16f61ba2fd71c88b8a0fff9e407c2f02aace09d2
// core components
// import GridContainer from "components/Grid/GridContainer.js";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";
import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
<<<<<<< HEAD
=======
import "./ProductSection.css"
>>>>>>> 16f61ba2fd71c88b8a0fff9e407c2f02aace09d2
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Welcome,</h2>
          <h5 className={classes.description}>
            Thank you, for being the part of Health Care family.We are happy to
            serve you. This are the list of services we provide to our family.We
            don't think you as our Users,instead we address you as our family
            and we will always try to serve you with better and fast services.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            
            <InfoArea
              title="Hospitals Near Me"
              description="All the hospital near you under once click!"
              icon={LocalHospitalIcon}
              iconColor="info"
              vertical
            />
<<<<<<< HEAD
            <Button variant="contained" color="primary" disableElevation>
              View Now
            </Button>
=======
              <Button variant="contained" color="primary" disableElevation>
                 View Now
              </Button>
            
            
>>>>>>> 16f61ba2fd71c88b8a0fff9e407c2f02aace09d2
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Donate Now"
              description="Your penny can save a life. Please donate oxygen to needed, your donation will be transparent and acknoledged!"
              icon={PanToolIcon}
              iconColor="success"
              vertical
            />
<<<<<<< HEAD
            <Button variant="contained" color="primary" disableElevation>
              Donate Now
=======
             <Button variant="contained" color="primary" disableElevation>
                 Donate Now
>>>>>>> 16f61ba2fd71c88b8a0fff9e407c2f02aace09d2
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Doctors Near Me"
              description="All available DOCTORS near you are one click away!"
              icon={PersonPinIcon}
              iconColor="primary"
              vertical
            />
<<<<<<< HEAD
            <Link to="/doctor">
              <Button variant="contained" color="primary" disableElevation>
                View Now
              </Button>
=======
            <Link to ="/doctor">
            
            <Button variant="contained" color="primary" disableElevation>
                 View Now
            </Button>
>>>>>>> 16f61ba2fd71c88b8a0fff9e407c2f02aace09d2
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
