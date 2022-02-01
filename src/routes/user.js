const auth = require("../middleware/auth");

module.exports = (app, checkUser) => {
  app.get("/user", auth, (req, res) => {
    // console.info(req.query.userId);
    if (checkUser.userId === req.query.userId);
    res.status(200).send(checkUser);
  });
};
