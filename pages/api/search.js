import { mymind } from "highnoon/json/mymind.json";

export default (req, res) => {
  const results = req.query.q
    ? mymind.filter((saying) => saying.id.includes(req.query.q))
    : [];
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};
