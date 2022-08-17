import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import dotenv from "dotenv";

const Authenticate = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "no token Unauthorized" });
  }

  const decode = jwt.verify(
    token,
    process.env.JWT_SECRET ? process.env.JWT_SECRET : "mynameissudeep"
  );
  const user = await User.findById(decode.id);
  if (!user) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  req.user = user;
  next();
};
export default Authenticate;
// if (!token) {
//   return res.status(401).json({
//     message: "login in first",
//   });
// }
// const decoded = jwt.verify(
//   token,
//   process.env.JWT_SECRET ? process.env.JWT_SECRET : "mynameissudeep"
// );

// req.user = await User.findById(decoded.id);

// next();
