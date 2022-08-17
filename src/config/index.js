import * as dotenv from "dotenv";

dotenv.config();

const config = {
  app: {
    name: process.env.APP_NAME || "Commconnect",
    env: process.env.NODE_ENV || "development",
    url: process.env.APP_URL || "http://localhost:8000",
    host: process.env.APP_HOST || "localhost",
    port: process.env.APP_PORT || 8000,
    isDev: process.env.NODE_ENV === "development",
    isProd: process.env.NODE_ENV === "production",

    allowedOrigins:
      process.env.ALLOWED_ORIGINS ||
      "http://localhost:9261 , http://localhost:3000, https://wiseadmitdev.web.app, http://localhost:50050, https://wiseadmitdev.netlify.app, https://master.dvdl81m48ov9n.amplifyapp.com, https://admin.wiseadmit.io, http://beta.wiseadmit.io, https://beta.wiseadmit.io",
    morganLevel: process.env.MORGAN_LEVEL || "common",
  },
};

export default config;
