// think of this file like Program.cs for a .Net backend
import express from "express";
import cors from "cors";
import session from 'express-session';
import csurf from 'csurf';
import { RecipeRoutes } from "./routes/recipeRoutes";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET, // will need to set up the .env file for local env vars
  saveUninitialized: true,
  resave: false,
  //store: what store do I want to use?
  cookie: {
    secure: false,
    httpOnly: true,
    sameSite: 'strict'
  }
}));

const csrfProtection = csurf({ sessionKey: 'session',
  cookie: { // cookie settings same as session because some are client-side fetch requests
    secure: false,
    httpOnly: true,
    sameSite: 'strict'
  }
});

app.use("/recipes", RecipeRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
