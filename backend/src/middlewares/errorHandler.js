export function errorHandler(err, _req, res, _next) {
  res
    .status(500)
    .json({ error: "Internal Server Error", details: err.message });
}
