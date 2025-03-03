import React from "react";
import TransactionTable from "./components/TransactionTable";

const transactions = [
  {
    card: "*4920",
    type: "Credit",
    cardType: "MasterCard",
    date: "Jun 24, 2023",
    time: "10:00 am",
    status: "Verified",
    amount: 2890.0,
  },
  {
    card: "*4230",
    type: "Debit",
    cardType: "Visa",
    date: "Jun 20, 2023",
    time: "11:00 am",
    status: "Rejected",
    amount: -49.0,
  },
  {
    card: "*5510",
    type: "Debit",
    cardType: "Visa",
    date: "Jun 19, 2023",
    time: "2:00 pm",
    status: "Pending",
    amount: -80.0,
  },
  {
    card: "*0983",
    type: "Debit",
    cardType: "Visa",
    date: "Jun 18, 2023",
    time: "11:00 am",
    status: "Verified",
    amount: -30.0,
  },
  {
    card: "*4443",
    type: "Credit",
    cardType: "MasterCard",
    date: "Jun 17, 2023",
    time: "10:00 am",
    status: "Verified",
    amount: 1500.0,
  },
  {
    card: "*7635",
    type: "Debit",
    cardType: "Visa",
    date: "Jun 14, 2023",
    time: "9:00 am",
    status: "Rejected",
    amount: -200.0,
  },
];

const App = () => {
  return (
    <>
      <TransactionTable transactions={transactions} />
    </>
  );
};

export default App;
