import type { NextApiRequest, NextApiResponse } from "next";
import { History } from "@/src/types";

let history: History[] = [];
let average = 0;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { numbers } = req.body;
    let lastNumber;
    if (numbers.length === 1) {
      average = (average * history.length + numbers[0]) / (history.length + 1);
      lastNumber = String(numbers[0]);
      history.push({ lastNumber: lastNumber, average: average });
    } else {
      average =
        (average * history.length + numbers[0] / numbers[1]) /
        (history.length + 1);
      lastNumber = `${numbers[0]}/${numbers[1]}`;
      history.push({ lastNumber: lastNumber, average: average });
    }
    return res.status(200).json({ lastNumber, average });
  } else {
    return res.status(200).json(history);
  }
}
