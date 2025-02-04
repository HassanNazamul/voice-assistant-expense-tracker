import React from "react";
import { StyleList, AvatarIncome, AvatarExpense } from "./style";
import {
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Slide,
} from "@mui/material";
import { Delete, MoneyOff } from "@mui/icons-material"; // Import MoneyOff icon

const List = () => {
  // Example transaction with type, category, amount, and date
  const transaction = [
    { id: 1, type: "Income", category: "Salary", amount: 50, date: "Feb 16" },
    { id: 2, type: "Expense", category: "Bill", amount: 50, date: "Feb 16" },
    { id: 3, type: "Income", category: "Trading", amount: 50, date: "Feb 16" },
    { id: 4, type: "Expense", category: "Fuel", amount: 50, date: "Feb 16" },
  ];

  return (
    <div>
      <StyleList dense={false}>
        {transaction.map((trans) => (
          <Slide direction="down" in mountOnEnter unmountOnExit key={trans?.id}>
            <ListItem>
              <ListItemAvatar>
                {/* Conditionally render AvatarIncome or AvatarExpense based on transaction type */}
                {trans?.type === "Income" ? (
                  <AvatarIncome>
                    <MoneyOff /> {/* Add MoneyOff icon */}
                  </AvatarIncome>
                ) : (
                  <AvatarExpense>
                    <MoneyOff /> {/* Add MoneyOff icon */}
                  </AvatarExpense>
                )}
              </ListItemAvatar>

              {/* Display transaction category and amount with date */}
              <ListItemText
                primary={trans?.category}
                secondary={`$${trans?.amount} - ${trans?.date}`}
              />

              {/* Placeholder for delete button */}
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItem>
          </Slide>
        ))}
      </StyleList>
    </div>
  );
};

export default List;
