const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")

// Load environment variables
dotenv.config()

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Cors
app.use(cors({
  origin: ["http://localhost:3000", "https://www.1stopmandi.com"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true,
}));
app.options("*any", cors()); // <== this enables preflight support
// Serve uploaded files
app.use("/uploads", express.static("uploads"))

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI , {})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err))

// Routes
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use("/api/auth", require("./routes/auth"))
app.use("/api/products", require("./routes/products"))
app.use("/api/orders", require("./routes/orders"))
app.use("/api/admin", require("./routes/admin"))
app.use("/api/upload", require("./routes/upload"))
app.use("/api/payment", require("./routes/payment"))
app.use("/api/agent", require("./routes/agent"))
app.use("/api/contact", require("./routes/contact"))
// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")))

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
