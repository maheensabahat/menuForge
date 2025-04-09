import { ZodError } from "zod";

export function validate(schema) {
  return (req, res, next) => {
    try {
      schema.parse({ body: req.body, query: req.query, params: req.params });
      next();
    } catch (err) {
      // Validation error
      if (err instanceof ZodError) {
        const errors = err.errors.map((e) => `${e.path[1]}: ${e.message}`);
        return res.status(400).json({
          error: "Validation failed",
          messages: errors,
        });
      }
      // Unknown error
      return res.status(500).json({ error: "Internal server error" });
    }
  };
}
