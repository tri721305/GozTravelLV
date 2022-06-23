// import jwt from "jsonwebtoken";

//wants to like a post
//click the like button => auth middleware(next) => like controller
// const auth = async (req, res, next) => {
//   try {
//     // const x = req.headers.Authorization.split(" "[1]);
//     const token = req.headers.authorization.split(" ")[1];
//     console.log(token);
//     const isCustomAuth = token.length < 500;

//     let decodedData;

//     if (token && isCustomAuth) {
//       decodedData = jwt.verify(token, "test");

//       req.userId = decodedData.id;
//     } else {
//       decodedData = jwt.decode(token);

//       req.userId = decodedData.sub;
//     }

//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default auth;
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const authHeader = req.get("authorization");
  // console.log(authHeader);
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    // console.log(token);
    if (token) {
      let userId;
      try {
        let decodedToken = jwt.decode(token);
        console.log(decodedToken);
        userId = decodedToken.userId;
        // userId = decodedToken.id;
      } catch (err) {
        return res
          .status(400)
          .json({ error: "token are expired or incorrect" });
      }

      if (userId) {
        req.userId = userId;
        next();
      } else {
        return res.status(400).json({ error: "Not Loggedin" });
      }
    } else {
      return res.status(400).json({ error: "Not Loggedin" });
    }
  } else {
    return res.status(400).json({ error: "Not Loggedin" });
  }
};
export default auth;
