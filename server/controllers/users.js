import bycrypt from "bcryptjs"; // za hashiranje
import jwt from "jsonwebtoken"; // omogućuje sigurno spremanje usera u browser na neko vrijeme
import UserModel from "../models/user.js";

export const signin = async (req, res) => {
  // dohvat sa fronteda (email, password) - sve se dohvati s req.body
  const { email, password } = req.body;

  try {
    // trazimo usera u DB koji vec ima napravljen racun
    const existingUser = await UserModel.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User does not exist" });
    // provjera lozinke
    const isPasswordCorrect = await bycrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    // ako je sve dobro, dohvati se token koji se  saljefrontedu
    // def što sve zelimo spremit u token
    // drugi argument funckiji sign() je tajna
    // treci argument su dodatne opcije
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName, confirmPassword } = req.body;
  try {
    // ne moze netko napraviti racun s postojecim mailom
    const existingUser = await UserModel.findOne({ email });

    if (existingUser)
      return res.status(404).json({ message: "User does exist" });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords do not match" });

    // ako je sve okej, krenira se user, ali trebamo hashirat lozinku
    // drugi argument je salt (tezina hashiranja, vecinom 12)
    const hashedPassword = await bycrypt.hash(password, 12);
    // kreira se user
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    // potreban je i token
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({ result: result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
