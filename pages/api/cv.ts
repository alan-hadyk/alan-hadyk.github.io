import { convertPageToPDF } from "helpers/browser/convertPageToPDF";
import { NextApiRequest, NextApiResponse } from "next";

const CVApiRoute = async (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Disposition", "inline");
  res.setHeader("Content-Type", "application/pdf");

  const pdf = await convertPageToPDF("http://localhost:3000/cv");

  return res.send(pdf);
};

export default CVApiRoute;
