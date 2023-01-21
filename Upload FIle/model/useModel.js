const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("profile_images", profileSchema);
