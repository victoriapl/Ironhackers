const mongoose = require("mongoose");
const PLM = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    name: String,
    age: Number,
    currentJob: String,
    email: {
      type: String,
      unique: true
    },
    profileImg: String,
    twitter: {
      type: String
    },
    linkedin: {
      type: String
    },
    github: {
      type: String
    },
    facebook: {
      type: String
    },
    codewars: {
      type: String
    },
    instagram: {
      type: String
    },
    role: {
      type: String,
      enum: ["STUDENT", "TEACHER", "ADMIN"],
      default: "STUDENT"
    },
    status: {
      type: String,
      enum: ["Active", "Pending Confirmation"],
      default: "Pending Confirmation"
    },
    confirmationCode: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    },
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: "email" });

module.exports = mongoose.model("User", userSchema);
