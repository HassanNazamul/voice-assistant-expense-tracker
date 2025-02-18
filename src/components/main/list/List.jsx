import React from "react";
import { useContext } from "react";
import { StyleList, AvatarIncome, AvatarExpense } from "./style";

import { ExpenseTrackerContext } from "../../../context/context";
import formatDate from "../../../utilies/formatDate"; // Import formatDate function

import {
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Slide,
} from "@mui/material";
import { Delete, MoneyOff } from "@mui/icons-material"; // Import MoneyOff icon

const List = () => {
  // const globalState = useContext(ExpenseTrackerContext);

  //destruction the function in it
  const { deleteTransaction, transactionsList } = useContext(
    ExpenseTrackerContext
  );

  // console.log(globalState);
  // Example transaction with type, category, amount, and date
  // const transaction = [
  //   { id: 1, type: "Income", category: "Salary", amount: 50, date: "Feb 16" },
  //   { id: 2, type: "Expense", category: "Bill", amount: 50, date: "Feb 16" },
  //   { id: 3, type: "Income", category: "Trading", amount: 50, date: "Feb 16" },
  //   { id: 4, type: "Expense", category: "Fuel", amount: 50, date: "Feb 16" },
  // ];

  return (
    <div>
      <StyleList dense={false}>
        {transactionsList.map((trans) => {
          const formattedDate = formatDate(trans?.date); // Format date
          return (
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

                {/* Display transaction category and amount with formatted date */}
                <ListItemText
                  primary={trans?.category}
                  secondary={`$${trans?.amount} - ${formattedDate}`}
                />

                {/* Placeholder for delete button */}
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTransaction(trans.id)}
                >
                  <Delete />
                </IconButton>
              </ListItem>
            </Slide>
          );
        })}
      </StyleList>
    </div>
  );
};

export default List;
