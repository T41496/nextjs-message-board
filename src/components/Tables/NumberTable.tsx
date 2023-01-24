import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getNumbers } from "@/src/services";
import { History, HistoryTableItem } from "@/src/types";

interface DataType {
  key: string | number;
  average: string;
  numbers: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Average",
    dataIndex: "average",
    key: "average",
    width: "10%",
  },
  {
    title: "Numbers",
    dataIndex: "numbers",
    key: "numbers",
  },
];

export const NumberTable: React.FC = () => {
  const [data, setData] = useState<HistoryTableItem[]>([]);

  const getHistory = async () => {
    let messagesData: History[] = await getNumbers();
    let history = "",
      _data = [];
    for (let i = 0; i < messagesData.length; i++) {
      if (i === 0) {
        history = messagesData[i].lastNumber;
      } else {
        history += `, ${messagesData[i].lastNumber}`;
      }
      _data.push({
        key: i,
        average: String(messagesData[i].average),
        numbers: history,
      });
    }
    setData(_data);
  };

  useEffect(() => {
    getHistory();
  }, []);
  return <Table columns={columns} dataSource={data} pagination={false} />;
};
