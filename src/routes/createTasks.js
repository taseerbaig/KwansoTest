const auth = require("../middleware/auth");

module.exports = (app, tasks) => {
  app.post("/create-tasks", auth, (req, res) => {
    console.info("Adding list of tasks");
    const { taskName } = req.body;

    tasks.push({ taskId: Math.floor(Math.random() * 100) + 1, taskName });
    console.info({ tasks });

    res.status(201).json({ tasks });
  });
};
