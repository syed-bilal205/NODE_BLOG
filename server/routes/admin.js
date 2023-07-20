const router = require("express").Router();
const {
  getAdmin,
  userLogin,
  userRegisterPage,
  userDashboard,
  authMiddleware,
  toAddPosts,
  toPostTheData,
  getTheEditPost,
  editThePost,
  deletePost,
  userLogOut,
  registerRoute,
} = require("../controllers/admin");

// GET ADMIN
router.get("/admin", getAdmin);

router.post("/admin", userLogin);

router.get("/register", registerRoute);

router.post("/register", userRegisterPage);

router.get("/dashboard", authMiddleware, userDashboard);

router.get("/add-post", authMiddleware, toAddPosts);

router.post("/add-post", authMiddleware, toPostTheData);

router.put("/edit-post/:id", authMiddleware, editThePost);

router.get("/edit-post/:id", authMiddleware, getTheEditPost);

router.delete("/delete-post/:id", authMiddleware, deletePost);

router.get("/logout", userLogOut);

module.exports = router;
