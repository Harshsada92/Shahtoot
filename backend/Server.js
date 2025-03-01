const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./details.env" });

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

const CallbackSchema = new mongoose.Schema(
  {
    name: String,
    phoneNumber: String,
    timing: String,
  },
  { collection: "shahtoot-clone" }
);

const Callback = mongoose.model("Callback", CallbackSchema);
app.post("/api/callback", async (req, res) => {
  try {
    const { name, phoneNumber, timing } = req.body;
    const newCallback = new Callback({ name, phoneNumber, timing });
    await newCallback.save();

    console.log("Data stored successfully:", newCallback);
    res.status(201).json({ message: "Submitted Successfully!" });
  } catch (error) {
    console.error("Error storing data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/callbacks", async (req, res) => {
  try {
    const callbacks = await Callback.find();
    res.status(200).json(callbacks);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
