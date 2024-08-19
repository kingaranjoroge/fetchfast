import mongoose, { Schema, models } from "mongoose";

const emailUserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const EmailUser = models.EmailUser || mongoose.model("EmailUser", emailUserSchema);

export default EmailUser;