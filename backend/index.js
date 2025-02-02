require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require('cors')
const nodemailer = require("nodemailer")
const crypto = require("crypto");

const app = express();
app.use(express.json());
app.use(cors());

// DB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))


    //UserSchema
    const UserSchema = new mongoose.Schema({
        name: String,
        email: { type: String, unique: true },
        password: String,
        isVerified: { type: Boolean, default: false },
        verificationToken: String
    });
    const User = mongoose.model("users", UserSchema);

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});


//register route
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = crypto.randomBytes(32).toString("hex");

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            verificationToken,
        });

        const verificationLink = `http://localhost:5000/verify-email?token=${verificationToken}`;

        await transporter.sendMail({
            from: "t.kelaskar16@gmail.com",
            to: email,
            subject: "Verify your email",
            html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`,
        });

        res.json({ message: "Verification email sent. Please check your inbox." });
    } catch (error) {
        console.error(error); // Print the error in the terminal for debugging
        res.status(500).json({ error: "Internal server error" });
    }
});


//verfication route
app.get("/verify-email",async(req,res)=>{
    const {token} = req.query;
    try{
    const user = await User.findOne({ verificationToken: token });
    if (!user) return res.status(400).json({ error: "Invalid or expired token" });

    user.isVerified = true;
    user.verificationToken = null;
    await user.save();

    res.json({ message: "Email verified successfully. You can now log in." });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
})

//Login
app.post("/login", async (req, res) => {
    try{
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    res.json({ message: "Login successful"});
    }
    catch(error){
        res.status(500).json({error:"Server error"});
    }
  });

  //google-login

  app.post("/google-login", async (req, res) => {
    const { name, email } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            user = new User({ name, email });
            await user.save();
        }

        res.json({ message: "Google Login Successful", user });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
app.listen(process.env.PORT, () => {
    console.log("server is running")
})