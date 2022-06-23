import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: existingUser.email, userId: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
// export const signin = async (req, res) => {
//   const { email, password } = req.body;
//   let error = {};

//   // if (!ValidateEmail(email)) {
//   //   error.email = 'email address should be valid '
//   // }
//   // if (!email || email.trim().length === 0) {
//   //   error.email = "email field must be required";
//   // }

//   // if (!password || password.trim().length === 0) {
//   //   error.password = "password must be required";
//   // }

//   // if (Object.keys(error).length) {
//   //   return res.status(422).json({ error });
//   // }

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ error: "email not found" });
//     }

//     const verifyPassword = await bcrypt.compare(password, user.password);
//     if (!verifyPassword) {
//       return res.status(400).json({ error: "password is incorrect" });
//     }

//     const token = jwt.sign({ userId: user.id }, "test", {
//       expiresIn: "1h",
//     });

//     user.active = true;
//     await user.save();

//     // return res.status(201).json({
//     //   message: "login successfully",
//     //   data: {
//     //     token,
//     //   },
//     // });
//     res.status(200).json({ result: user, token });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// };

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password don't match" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: result.email, userId: result._id },
      "test",
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ result, token });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
