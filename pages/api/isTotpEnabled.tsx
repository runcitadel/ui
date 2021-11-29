import { Citadel } from "../../lib/Citadel";
import { NextApiRequest, NextApiResponse } from "next";

export default async function isTotpEnabled(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await Citadel.manager.auth.isTotpEnabled();
    res.status(200).json({ result });
  } catch (err) {
    console.error(err, req.headers, "Error w/headers in isTotpEnabled()");
    res.status(500).json({ error: "Internal Server Error" });
  }
}
