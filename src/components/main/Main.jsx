import React from "react";
import { MainCard } from "./style";
import { CardContent, CardHeader, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Form from "./form/Form";
import List from "./list/List";

const Main = () => {
  return (
    <div>
      {/* MainCard component styled using styled-components */}
      <MainCard>
        <CardHeader
          title="Expense Tracker"
          subheader="powered by Nazamul Hassan"
        ></CardHeader>

        {/* the form  */}
        <CardContent>
          <Typography align="center" variant="h5">
            {/* Display total balance */}
            Total Balance $100{" "}
          </Typography>

          <Typography
            variant="subtitle1"
            style={{ lineHeight: "1.5em", marginTop: "20px" }}
          >
            {/* Instruction for using the speechly feature */}
            Try saying something to the speechly
          </Typography>

          <Divider />

          {/* Form Component for adding new transactions */}
          <Form />
        </CardContent>

        {/* showing list of transaction */}
        <CardContent style={{ padding: 0 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              {/* List Component to display transactions */}
              <List />
            </Grid>
          </Grid>
        </CardContent>
        
      </MainCard>
    </div>
  );
};

export default Main;
