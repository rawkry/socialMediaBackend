/**
 * Enable Cors
 */

import cors from "cors";
import { Application } from "express";
import express from "express";
import config from "../config";
import { BadRequestError } from "../exception/Errors/bad-request-error";

class CORS {
  mount(express) {
    const allowedOrigins = config.app.allowedOrigins
      .split(",")
      .map((each) => each.replace(/\s+/, ""));

    const options = {
      origin: function (origin, callback) {
        callback(null, true);
        return;
        if (!origin) {
          callback(null, true);
          return;
        }
        if (allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          throw new BadRequestError("Not allowed by CORS");
          // callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,

      // allowedHeaders: [
      //   "Origin",
      //   "X-Requested-With",
      //   "Content-Type",
      //   "Accept",
      //   "X-Access-Token",
      // ],
      // credentials: false,
      // methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
      // preflightContinue: false,
      // optionsSuccessStatus: 200, // Some legacy browsers choke on 204
    };

    express.use(cors(options));
    // _express.use(cors());

    return express;
  }
}

export default new CORS();
