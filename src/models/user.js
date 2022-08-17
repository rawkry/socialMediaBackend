import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    public_id: String,
    url: String,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false,
  },
  cPassword: {
    type: String,
    required: true,
    minlength: 6,
    select: false,
  },
  contact: {
    type: Number,
    default: 9867750819,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  role: {
    type: String,
    // enum: Role,
    // default: Role.user,
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

//hashing

userSchema.pre(
  "save",
  async function (done) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 8);
      this.cPassword = await bcrypt.hash(this.cPassword, 8);
    }
    done();
  } //end of pre save0
);
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = async function () {
  return jwt.sign(
    { id: this._id },
    process.env.JWT_SECRET ? process.env.JWT_SECRET : "mynameissudeep"
  );
};

const User = mongoose.model("User", userSchema);

export { User };
