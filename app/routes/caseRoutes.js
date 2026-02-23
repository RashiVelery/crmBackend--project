const router = require("express").Router();
const { protect } = require("../middleware/authMiddleware");
const controller = require("../controllers/caseController");

router.post("/", protect, controller.createCase);
router.get("/", protect, controller.getCases);
router.patch("/:id", protect, controller.updateCase);

module.exports = router;