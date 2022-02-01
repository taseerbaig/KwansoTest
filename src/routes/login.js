const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

module.exports = (app, checkUser) => {
  app.post("/login", auth, (req, res) => {
    const user = {};
    const { email, password } = req.body;

    const token = jwt.sign({ email, password }, process.env.TOKEN_KEY);

    if (checkUser.email === email && checkUser.password === password) {
      user.email = email;
      user.password = password;
      user.token = token;

      console.info({ userAdded: user });
      res.status(200).send(user);
    } else {
      res.status(401).send("Invalid User");
    }
  });
};
