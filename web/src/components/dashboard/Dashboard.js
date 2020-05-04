import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,

} from "@material-ui/core";
//import SettingsArea from "./SettingsArea";
//import UserDataArea from "./UserDataArea";
import AccountInformationArea from "./AccountInformationArea";
import StatisticsArea from "./StatisticsArea";

function Dashboard(props) {
  const {
    selectDashboard,
    CardChart,
    statistics,
    toggleAccountActivation,
    //  pushMessageToSnackbar,
    //targets,
    //setTargets,
    isAccountActivated,
  } = props;

  useEffect(selectDashboard, [selectDashboard]);

  return (
    <Fragment>
      <StatisticsArea CardChart={CardChart} data={statistics} />
      <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Your Account
        </Typography>
      </Box>
      <Grid>
        <Grid item>
          <Card>
          
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                In order to setup your account, please click the secure Stripe
                link below to be able to send and recieve payments
              </Typography>
              <Button>Stripe Onboard Button</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <AccountInformationArea
            isAccountActivated={isAccountActivated}
            toggleAccountActivation={toggleAccountActivation}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}

Dashboard.propTypes = {
  CardChart: PropTypes.elementType,
  statistics: PropTypes.object.isRequired,
  toggleAccountActivation: PropTypes.func,
  pushMessageToSnackbar: PropTypes.func,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTargets: PropTypes.func.isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  selectDashboard: PropTypes.func.isRequired,
};

export default Dashboard;
