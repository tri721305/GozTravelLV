import express from "express";
// import S3 from "aws-sdk/clients/s3.js";
// import fs from "fs";
// import multer from "multer";
import mongoose from "mongoose";
// import {
//   S3Client,
//   AbortMultipartUploadCommand,
//   PutObjectCommand,
// } from "@aws-sdk/client-s3";
// import sharp from "sharp";
// import crypto from "crypto";
// // Config Environment variable
// import env from "dotenv";
// env.config();

// const randomImageName = (bytes = 32) =>
//   crypto.randomBytes(bytes).toString("hex");

// const bucketName = process.env.AWS_BUCKET_NAME;
// const region = process.env.AWS_BUCKET_REGION;
// const accessKeyId = process.env.AWS_ACCESS_KEY;
// const secretAccessKey = process.env.AWS_SECRET_KEY;

// const s3 = new S3Client({
//   //   accessKeyId: accessKeyId,
//   credentials: {
//     secretAccessKey: secretAccessKey,
//     accessKeyId: accessKeyId,
//   },
//   region: region,
// });

const app = express();

// // const prisma = new PrismaClient();

// //Config Upload Image
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// // app.get("/api/posts", async (req, res) => {
// //   const posts = prisma.posts.findMany({
// //     orderBy: [{ created: "desc" }],
// //   });
// // });

// app.post("/api/posts", upload.single("image"), async (req, res) => {
//   console.log("req", req.body, req.caption, req.file);
//   //   req.file.buffer;

//   // Resize Image
//   const buffer = await sharp(req.file.buffer)
//     .resize({ width: 1920, height: 1080, fit: "contain" })
//     .toBuffer();

//   let idImage = randomImageName();
//   const params = {
//     Bucket: bucketName,
//     Key: idImage,
//     Body: buffer,
//     ContentType: req.file.mimetype,
//   };

//   const command = new PutObjectCommand(params);

//   await s3.send(command).then((r) => console.log("re", idImage));

//   // const post = await prisma.posts.create({
//   //   data: {
//   //     caption: req.body.caption,
//   //     imageName: idImage,
//   //   },
//   // });
//   res.send({});
// });

// const CONNECTION_URL =
//   "mongodb+srv://minhtri123:minhtri123@cluster0.n5z1xdx.mongodb.net/Thesis?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const PORT = process.env.PORT || 5000;
// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useCreateIndex: true,
//   })
//   .then(() =>
//     app.listen(PORT, () =>
//       console.log(`Server Running on Port: http://localhost:${PORT}`)
//     )
//   )
//   .catch((error) => console.log(`${error} did not connect`));

// app.listen(3000, () => console.log("listening on port 8080"));

mongoose.connect("mongodb://localhost:127.0.0.1/admin");
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
app.listen(3000, () => console.log("listening on port 8080"));
//
