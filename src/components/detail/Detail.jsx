import React from "react";
import { CardHeader, CardContent, Typography } from "@mui/material";
import { RedCard, GreenCard, BlueCard } from "./style";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import useTransaction from "../../useTransaction";

// Register the ArcElement for the doughnut chart
Chart.register(ArcElement, Tooltip, Legend);

const Detail = ({ title }) => {
  // Dynamic styling component
  let CardComponent;

  // Choose the styled card based on the title
  if (title === "Income") {
    CardComponent = GreenCard;
  } else if (title === "Expense") {
    CardComponent = RedCard;
  } else {
    CardComponent = BlueCard;
  }

  // Use the custom hook to get the total and chart data
  const { total, chartData } = useTransaction(title);

  return (
    // This card component is coming from the styled API
    <CardComponent>
      <CardHeader title={title} />
      <CardContent>
        {/* Display the total amount */}
        <Typography variant="h5">${total}</Typography>
        {/* Display the doughnut chart */}
        <Doughnut data={chartData} />
      </CardContent>
    </CardComponent>
  );
};

export default Detail;
