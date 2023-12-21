// pages/api/createTask.js
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const eventsFilePath = path.join(process.cwd(), "data", "events.json");

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { title, description, address, date, image, isFeatured } = JSON.parse(
    req.body
  );
  const newTask = {
    id: uuidv4(),
    title,
    description,
    address,
    date,
    image,
    isFeatured,
  };

  const events = JSON.parse(fs.readFileSync(eventsFilePath, "utf8"));
  events.push(newTask);

  fs.writeFileSync(eventsFilePath, JSON.stringify(events, null, 2));

  res.status(201).json(newTask);
}
