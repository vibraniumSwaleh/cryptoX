import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.render("index.ejs", { content: "Working now!"});
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});