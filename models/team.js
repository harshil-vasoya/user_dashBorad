const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  domains: [String],
});

module.exports = mongoose.model("Team", teamSchema);  