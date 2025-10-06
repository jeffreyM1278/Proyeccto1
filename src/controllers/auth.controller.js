let users = [];

export const getLogin = (req, res) => {
  res.render("login", { title: "Login", highlight: "", user: req.session.user, error: null });
};

export const postLogin = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.render("login", { title: "Login", highlight: "", user: null, error: "Credenciales inválidas" });
  req.session.user = user;
  res.redirect("/");
};

export const getRegister = (req, res) => {
  res.render("register", { title: "Registro", highlight: "", user: req.session.user, error: null });
};

export const postRegister = (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.render("register", { title: "Registro", highlight: "", user: null, error: "Usuario ya existe" });
  }
  users.push({ username, password });
  res.redirect("/login");
};

export const logout = (req, res) => {
  req.session.destroy(() => res.redirect("/"));
};

export const profile = (req, res) => {
  if (!req.session.user) return res.redirect("/login");
  res.render("profile", { title: "Perfil", highlight: "", user: req.session.user });
};
