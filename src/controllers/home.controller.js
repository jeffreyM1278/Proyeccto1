export const getHome = (req, res) => {
  res.render("home", { title: "Inicio", highlight: "Inicio", user: req.session.user });
};

export const getContact = (req, res) => {
  const ref = req.query.ref || "";
  res.render("contact", { title: "Contacto", highlight: "Contacto", user: req.session.user, ref });
};
