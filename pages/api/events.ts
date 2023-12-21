import type { NextApiRequest, NextApiResponse } from "next";
import events from "../../data/events.json";

type ResponseData = {
  events: any[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.headers.isfeatured) {
    res.status(200).json({
      events: events.filter((event) => event.isFeatured),
    });
  } else {
    res.status(200).json({
      events: events,
    });
  }
}
