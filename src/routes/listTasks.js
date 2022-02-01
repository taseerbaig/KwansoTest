const auth = require("../middleware/auth");

module.exports = (app, tasks) => {
  app.get("/list-tasks", auth, (req, res) => {
    console.info("Getting list of tasks");
    res.status(201).json({ tasks });
  });
};
