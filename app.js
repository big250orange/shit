const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("src"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    title: "Home",
  };
  res.render("index", data);
});

// about route
app.get("/about", (req, res) => {
  const data = {
    title: "About",
  };
  res.render("about", data);
});

// contact route
app.get("/contact", (req, res) => {
  const data = {
    title: "Contact",
  };
  res.render("contact", data);
});

// contact post route
app.post("/contact", (req, res) => {
  const data = {
    title: "Contact",
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };
  
  // Res.send
  // res.send(data);
  res.render("contact", data);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
