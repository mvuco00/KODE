import jwt from "jsonwebtoken";

// koristi se u rutama, kad je potrebno napraviti provjeru
// napravi nešto i kreni na next thing
const auth = async (req, res, next) => {
  try {
    // je li korisnik taj za kojeg se predstavlja (treba provjeriti token)
    // token je na prvoj poziciji nakon što se splita
    const token = req.headers.authorization.split("")[1];
    // ako uvijet ne vrijedi, onda je to google OAuth token
    const isCustomAuth = token.length < 500;
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");
      req.userId = decodedData?.id;
    } else {
      // za google OAuth ne treba tajna
      decodedData = jwt.decode(token);
      // sub je google-ov id za razlikovanje user-a
      req.userId = decodedData?.sub;
    }
    // npr user želi nešto lajkati:
    // middleware provjeri je li token važeći (izvrši prethodan kod) i ako je sve ok, onda je moguće lajkanje tj next()
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
