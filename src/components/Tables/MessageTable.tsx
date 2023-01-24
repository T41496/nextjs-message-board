import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Message } from "@/src/types";

interface DataType {
  key: number | string;
  author: string;
  content: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Author",
    dataIndex: "author",
    key: "author",
    width: "20%",
  },
  {
    title: "Content",
    dataIndex: "content",
    key: "content",
  },
];

export const MessageTable: React.FC<{ messages: Message[] }> = ({
  messages,
}) => <Table columns={columns} dataSource={messages} pagination={false} />;
