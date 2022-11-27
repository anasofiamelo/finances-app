import React, { useEffect, useState } from "react";
import { Container } from "../../components";
import { NavLink } from "react-router-dom";
import { useTransactions } from "../../context/transactions.context";
import LatestActivityRow from "./LatestActivityRow";

const LatestActivities = () => {
  const { userLatestTransactions } = useTransactions();
  const [latestTransactions, setLatestTransactions] = useState(
    userLatestTransactions
  );

  useEffect(() => {
    setLatestTransactions(userLatestTransactions);
  }, [userLatestTransactions]);

  return (
    <Container>
      <h2 className="title">Latest activities</h2>

      {latestTransactions.map((transaction) => (
        <LatestActivityRow transaction={transaction} />
      ))}

      <NavLink to="/transactions" className="latest-activities_all-button">
        View all
      </NavLink>
    </Container>
  );
};

export default LatestActivities;
