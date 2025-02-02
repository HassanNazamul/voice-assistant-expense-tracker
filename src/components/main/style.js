import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

// Define the style for MainCard
export const MainCard = styled(Card)(({ theme }) => ({
    // Media styling (aspect ratio for a 16:9 ratio)
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9 aspect ratio
    },
    // Expand button styling
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    // Divider styling
    divider: {
        margin: '20px 0',
    },
}));
