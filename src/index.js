import { Database } from "./provider/Database.js";
import cors from "cors";
import express from "express";
import { indexDashboardRouter } from "./routes/common/dashboard/index.js";
import cookieParser from "cookie-parser";

import bodyParser from "body-parser";
import Authenticate from "./middleware/authenticate.js";
import { User } from "./models/user.js";
import fileUpload from "express-fileupload";

const app = express();

const router = express.Router();
async function main() {
  app.use(
    fileUpload({
      useTempFiles: true,
      // tempFileDir: "/tmp/",
    })
  );
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  await Database.init();
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());
  app.use(cookieParser());

  app.use(indexDashboardRouter);

  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  app.get(
    "/about",

    Authenticate,
    (req, res) => {
      res.send(req.user);
    }
  );

  app.listen(5000);
  console.log("Server running on port 5000");
}

main();
