const router = require("express").Router();
const { protect } = require("../middleware/authMiddleware");
const controller = require("../controllers/customerController");

router.post("/", protect, controller.createCustomer);
router.get("/", protect, controller.getCustomers);
router.patch("/:id", protect, controller.updateCustomer);
router.delete("/:id", protect, controller.deleteCustomer);

module.exports = router;