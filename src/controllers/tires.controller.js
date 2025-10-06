import { createRequire } from "module";
const require = createRequire(import.meta.url);

export const listTires = (req, res) => {
  const tires = require("../data/tires.json");
  res.render("tires-list", { title: "Catálogo", highlight: "Catálogo", user: req.session.user, tires });
};

export const tireDetail = (req, res) => {
  const tires = require("../data/tires.json");
  const { id } = req.params;
  const tire = tires.find(t => t.id === id);
  if (!tire) return res.status(404).render("home", { title: "No encontrado", highlight: "Catálogo", user: req.session.user });
  res.render("tire-detail", { title: `${tire.brand} ${tire.model}`, highlight: "Catálogo", user: req.session.user, tire });
};
