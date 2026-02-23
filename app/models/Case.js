const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    priority: { type: String, default: "medium" },
    status: { type: String, default: "open" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Case", caseSchema);