import mongoose from "mongoose";

const schema = mongoose.Schema;

const adminSchema = new schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

export const AdminUser = new mongoose.model("Admin", adminSchema);
