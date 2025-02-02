import { styled } from "@mui/material/styles";
import { Avatar } from "@mui/material";
import { green, red } from "@mui/material/colors";

// Avatar styles for income and expense
export const AvatarIncome = styled(Avatar)({
  color: "#fff",
  backgroundColor: green[500], // Green for income
});

export const AvatarExpense = styled(Avatar)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]), // Adjust text color for contrast
  backgroundColor: red[500], // Red for expense
}));

// List styles
export const List = styled("div")({
  maxHeight: "150px",
  overflow: "auto", // To make the list scrollable
});
