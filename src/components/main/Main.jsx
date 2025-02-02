import React from "react";
import { MainCard } from "./style";
import {
  CardContent,
  CardHeader,
  Divider,
  List,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const Main = () => {
  return (
    <div>
      {/* this main card is comming style api */}
      <MainCard>
        <CardHeader
          title="Expense Tracker"
          subheader="powered by Nazamul Hassan"
        ></CardHeader>

        <CardContent>
          <Typography align="center" variant="h5">
            Total Balance $100{" "}
          </Typography>

          <Typography
            variant="subtitle1"
            style={{ lineHeight: "1.5em", marginTop: "20px" }}
          >
            {/* Info Card Component  */}
            Try saying something to the speechly
          </Typography>

          <Divider />

          {/* Form Component */}
        </CardContent>

        {/* another card content */}
        {/* which will be styled */}
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>{/* <List /> */}</Grid>
          </Grid>
        </CardContent>
      </MainCard>
    </div>
  );
};

export default Main;
