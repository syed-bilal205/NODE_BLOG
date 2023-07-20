const router = require("express").Router();
const {
  displayAllThePosts,
  toGetSpecificRoutes,
  searchPost,
} = require("../controllers/main");

// get route
router.get("/", displayAllThePosts);

// Get specific route
router.get("/post/:id", toGetSpecificRoutes);

// Search
router.post("/search", searchPost);

module.exports = router;
