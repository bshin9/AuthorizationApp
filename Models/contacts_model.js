const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    user_name: { type: String, required: true },
    message: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const ContactModel = mongoose.model("Contact", contactSchema);

module.exports = ContactModel;
