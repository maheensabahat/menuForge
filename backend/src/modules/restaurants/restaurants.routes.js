import express from "express";
import {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
} from "./restaurants.controller.js";
import { validate } from "../../middlewares/validate.js";
import {
  createRestaurantSchema,
  updateRestaurantSchema,
} from "./restaurants.validation.js";
import { authenticate, authorize } from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", validate(createRestaurantSchema), createRestaurant);
router.get("/", getAllRestaurants);
router.get("/:id", authenticate, authorize(["ADMIN"]), getRestaurantById);
router.put(
  "/:id",
  authenticate,
  authorize(["ADMIN"]),
  validate(updateRestaurantSchema),
  updateRestaurant
);

export default router;
