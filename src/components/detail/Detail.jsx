import React from "react";
import { CardHeader, CardContent, Typography } from "@mui/material";
import { RedCard, GreenCard, BlueCard } from "./style";
// import { Doughnut } from "react-chartjs-2";

const Detail = ({ title, amount }) => {
  let CardComponent;

  // Choose the styled card based on the variant
  if (title === "Income") {
    CardComponent = GreenCard;
  } else if (title === "Expenses") {
    CardComponent = RedCard;
  } else {
    CardComponent = BlueCard;
  }

  return (
    <CardComponent>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">{amount}</Typography>
      </CardContent>
    </CardComponent>
  );
};

export default Detail;
