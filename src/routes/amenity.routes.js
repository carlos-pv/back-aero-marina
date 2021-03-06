const amenityController = require("../controllers/amenity.controller");
const authorizationMiddleware = require("../middlewares/authorization.middleware.js");

module.exports = (app) => {
  app.get("/amenities", authorizationMiddleware.authorization, amenityController.list);
  app.get("/amenities-filter", amenityController.listFilter);
  app.get("/amenity/find/:id", amenityController.getById);
  app.post("/amenity/create", amenityController.create);
  app.put("/amenity/update/:id", amenityController.update);
  app.delete("/amenity/remove/:id", amenityController.remove);
};