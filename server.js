import express from "express";
const app = express();

//testing a route 
app.get("/", (req, res) => {
    res.send("Testing routes");
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);
})