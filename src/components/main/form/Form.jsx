import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const Form = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          {/* Title for the form */}
          <Typography align="center" variant="subtitle2" gutterBottom>
            {/* Placeholder for form title */}
            ....
          </Typography>
        </Grid>

        <Grid size={{ xs: 6 }}>
          {/* Select Type (Income/Expense) */}
          <FormControl fullWidth>
            <InputLabel>Type </InputLabel>
            <Select>
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expense">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 6 }}>
          {/* Select Category */}
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Salary">Salary</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 6 }}>
          {/* Input Amount */}
          <TextField
            type="number"
            label="Amount"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          {/* Input Date */}
          <TextField type="date" variant="standard" label="Date" fullWidth />
        </Grid>

        {/* Submit Button to create a new transaction */}
        <Button
          color="primary"
          variant="outlined"
          fullWidth
          style={{ marginTop: "20px" }}
        >
          Create
        </Button>

        {/* Parent Grid */}
      </Grid>
    </div>
  );
};

export default Form;
