import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";

const app = express(); //poziv express funkcije kojim se radi express aplikcija

//postavljanje bodyParsera kako bi mogao ispravno slati zahtjeve
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//uspostava middlewarea izmedu aplikacije i servera
//svim routama dodajemo postfix /posts
app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://userKODE:marija2020@clusterkode.28tl0.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

//connect vraća promise
//call back u then-u se pokrene kad je spajanje uspješno
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
