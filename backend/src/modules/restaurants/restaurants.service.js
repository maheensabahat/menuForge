import prisma from "../../config/db.js";

export async function createRestaurant(payload) {
  return prisma.restaurant.create({
    data: payload,
    select: { id: true, name: true, location: true },
  });
}

export async function getAllRestaurants() {
  return prisma.restaurant.findMany();
}

export async function getRestaurantById(restaurantId) {
  return prisma.restaurant.findUnique({
    where: { id: restaurantId },
  });
}

export async function updateRestaurant(restaurantId, payload) {
  return prisma.restaurant.update({
    where: { id: restaurantId },
    data: payload,
    select: {
      id: true,
      name: true,
      location: true,
      users: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  });
}
