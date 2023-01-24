import type { NextApiRequest, NextApiResponse } from "next";

let messagesData = [
  { key: 0, author: "DEFAULT AUTHOR", content: "DEFAULT CONTENT" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    messagesData.push({ key: messagesData.length, ...req.body });
    return res.status(200).json({});
  } else {
    return res.status(200).json(messagesData);
  }
}
