require("dotenv").config()

const express = require('express')
const app = express()

const cors = require("cors")

const PORT = process.env.PORT || 3000

const ConnectDB = require("./src/configs/db")

//importing the routes or controllers  UserController or UserRoutes and AuthController or AuthRoutes
const UserRoutes = require("./src/controllers/user.controller")
const AuthRoutes = require("./src/controllers/auth.controller")


//middlewares 
app.use(express.json())
app.use(cors({
    origin: "https://kelas25-kpn2.vercel.app",
    methods: ["GET", "POST", "PUT"]
}));


app.get("/", (req, resp) => {
    resp.send("Hello Yousub Here, Home page")
})

app.get("/msg", (req, resp) => {
    resp.send("Welcome to my Api")
})


//routes
app.post("/api/users", UserRoutes)
app.post("/api/auth", AuthRoutes)

app.listen(PORT, () => {
    ConnectDB()
    console.log(`Connected on ${PORT}`)
})






