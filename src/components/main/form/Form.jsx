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
import React, { useState } from "react";
import { useContext } from "react";
import { ExpenseTrackerContext } from "../../../context/context";
import { v4 as uuidv4 } from "uuid";

import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";

import formatDate from "../../../utilies/formatDate";

//a simple object to collect form data
const initialState = {
  type: "",
  category: "",
  amount: "",
  date: formatDate(new Date()),
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);

  const { addTransaction } = useContext(ExpenseTrackerContext);

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  const createTransaction = () => {
    //few change need to be done before adding to the transaction state
    //1st adding unique id,, 2nd converting amount string to number
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    setFormData(initialState);
  };

  // console.log(formData);
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
            <Select
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expense">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 6 }}>
          {/* Select Category */}
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              {/* <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Salary">Salary</MenuItem> */}

              {selectedCategories.map((c) => (
                <MenuItem key={c.type} value={c.type}>
                  {" "}
                  {c.type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 6 }}>
          {/* Input Amount */}
          <TextField
            type="number"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            label="Amount"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          {/* Input Date */}
          <TextField
            type="date"
            variant="standard"
            label="Date"
            fullWidth
            value={formData.date} // Set the value to formatted date
            onChange={(e) =>
              setFormData({ ...formData, date: formatDate(e.target.value) })
            }
          />
        </Grid>

        {/* Submit Button to create a new transaction */}
        <Button
          color="primary"
          variant="outlined"
          fullWidth
          style={{ marginTop: "20px" }}
          onClick={createTransaction}
        >
          Create
        </Button>

        {/* Parent Grid */}
      </Grid>
    </div>
  );
};

export default Form;
