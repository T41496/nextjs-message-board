import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  author: string;
  content: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Author",
    dataIndex: "author",
    key: "author",
    width: "20%"
  },
  {
    title: "Content",
    dataIndex: "content",
    key: "content",
  },
];

const data: DataType[] = [
  {
    key: "1",
    author: "John Brown",
    content: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    author: "John Brown",
    content: "New York No. 1 Lake Park",
  },
  {
    key: "3",
    author: "John Brown",
    content: "New York No. 1 Lake Park",
  },
];

export const MessageTable: React.FC = () => (
  <Table columns={columns} dataSource={data} pagination={false}/>
);
