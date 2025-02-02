import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

// Styled components with custom styles
export const RedCard = styled(Card)({
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
    // color: "white",
});

export const BlueCard = styled(Card)({
    backgroundColor: "blue",
    // color: "white",
});

export const GreenCard = styled(Card)({
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
    // color: "white",
});
