import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "llanteria-demo", resave: false, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
import indexRoutes from "./routes/index.routes.js";
import authRoutes from "./routes/auth.routes.js";
import tiresRoutes from "./routes/tires.routes.js";

app.use("/", indexRoutes);
app.use("/", authRoutes);
app.use("/llantas", tiresRoutes);

// 404
app.use((req, res) => res.status(404).render("home", { title: "404", highlight: "", user: req.session.user }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚗 Servidor corriendo en http://localhost:${PORT}`));
