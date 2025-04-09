import * as RestaurantService from "./restaurants.service.js";

export async function createRestaurant(req, res) {
  try {
    const restaurant = await RestaurantService.createRestaurant(req.body);
    res.status(201).json(restaurant);
  } catch (err) {
    res.status(500).json({ error: "Failed to create restaurant" });
  }
}

export async function getAllRestaurants(req, res) {
  try {
    const restaurants = await RestaurantService.getAllRestaurants();
    res.status(201).json(restaurants);
  } catch (err) {
    res.status(500).json({ error: "Failed to get restaurants" });
  }
}

export async function getRestaurantById(req, res) {
  try {
    const restaurant = await RestaurantService.getRestaurantById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }
    res.status(201).json(restaurant);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch restaurant" });
  }
}

export async function updateRestaurant(req, res) {
  try {
    const restaurantId = req.params.id;
    const payload = req.body;
    const restaurant = await RestaurantService.updateRestaurant(
      restaurantId,
      payload
    );
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }
    res.status(201).json(restaurant);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update restaurant" });
  }
}
