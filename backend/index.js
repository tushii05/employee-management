const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();
const PORT = 4001;

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/employee", employeeRoutes);
app.use("/category", categoryRoutes);

// mongoose.connect(
//   'mongodb+srv://agnito14:<password>@cluster0.2a4wycs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// );

mongoose.connect(
  'mongodb+srv://agnito14:Agnito1234@cluster0.yxrqhxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
);

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('MongoDB connected successfully');
});

app.get("/", (req, res) => {
  res.json("Hello ")
});

app.listen(PORT, () => {
  console.log(`Server is connected and running on port ${PORT}`);
});
