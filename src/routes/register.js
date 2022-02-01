module.exports = (app, user) => {
  app.post("/register", (req, res) => {
    const { email, password } = req.body;

    user.userId = Math.floor(Math.random() * 100) + 1;
    user.email = email;
    user.password = password;

    console.info({ user });

    res.status(201).json({ userId: user.userId, email: user.email });
  });
};
