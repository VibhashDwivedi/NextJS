const { Schema, default: mongoose } = require("mongoose");

const contactSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minLength: [3, "Name must be at least 3 characters"],
    maxLength: [50, "Name must not exceed 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
    minLength: [10, "Message must be at least 10 characters"],
    maxLength: [500, "Message must not exceed 500 characters"],
  },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
