import React from "react";
import { CardHeader, CardContent, Typography } from "@mui/material";
import { RedCard, GreenCard, BlueCard } from "./style";
// import { Doughnut } from "react-chartjs-2";

const Detail = ({ title, amount }) => {

  //dynamic styling component
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

    //this card component is comming from STLYED API 
    <CardComponent>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">{amount}</Typography>
      </CardContent>
    </CardComponent>
  );
};

export default Detail;
