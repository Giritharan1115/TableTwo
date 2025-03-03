import React from "react";
import { BankLogos } from "../assets/logos.js";
import { FaEllipsisH } from "react-icons/fa";

const statusClasses = {
  Verified: "text-success",
  Rejected: "text-danger",
  Pending: "text-secondary",
};

const TransactionTable = ({ transactions }) => {
  return (
    <div className="container w-50 mt-4">
      <div className="row">
        <div className="col text-start">
          <h4>Recent Transactions</h4>
          <p className="text-muted">Transactions overview</p>
        </div>
        <div className="col d-flex justify-content-end">
          <FaEllipsisH className="m-2" size={20} />
        </div>
      </div>
      <table className="table shadow-sm">
        <thead>
          <tr className="table-light">
            <th>Card</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, index) => (
            <tr key={index}>
              <td>
                <div className="row">
                  <div className="col-3">
                    <img
                      src={BankLogos[txn.cardType]}
                      alt={txn.cardType}
                      width="30"
                      className="me-2"
                    />
                  </div>
                  <div className="col d-flex flex-column">
                    <span>{txn.card}</span>
                    <span className="text-muted small">{txn.type}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex flex-column">
                  <span>{txn.date}</span>
                  <span className="text-muted small">{txn.time}</span>
                </div>
              </td>
              <td className={statusClasses[txn.status]}>{txn.status}</td>
              <td className={txn.amount > 0 ? "text-success" : "text-dark"}>
                {txn.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
