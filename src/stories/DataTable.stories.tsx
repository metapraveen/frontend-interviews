import React from "react";
import DataTable from "../components/DataTable";

function story() {
  return <DataTable />;
}

export const Default = story();

export default {
  title: "DataTable",
  component: DataTable,
};
