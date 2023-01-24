import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  lastNumber: string;
  average: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Last Number",
    dataIndex: "lastNumber",
    key: "lastNumber",
    width: "10%",
  },
  {
    title: "Average",
    dataIndex: "average",
    key: "average",
  },
];

const data: DataType[] = [
  {
    key: "1",
    lastNumber: "5.0",
    average: "average(1.0, 2.0, 3.0) = 2.0",
  },
  {
    key: "2",
    lastNumber: "5.0",
    average: "average(1.0, 2.0, 3.0) = 2.0",
  },
  {
    key: "3",
    lastNumber: "5.0",
    average: "average(1.0, 2.0, 3.0) = 2.0",
  },
];

export const NumberTable: React.FC = () => (
  <Table columns={columns} dataSource={data} pagination={false} />
);
