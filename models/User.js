const mongoose = require("mongoose");
const PLM = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      default: ''
    },
    name: String,
    age: Number,
    currentJob: String,
    profileImg: String,
    twitter: String,
    linkedin: String,
    github: String,
    facebook: String,
    codewars: String,
    instagram: String,
    project1: String,
    project2: String,
    project3: String,
    email: {
      type: String,
      unique: true
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
