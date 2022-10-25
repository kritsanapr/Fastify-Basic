import fastify from "fastify";
import app from "./app";

const PORT = 8080;
const address = "127.0.0.1";

const start = async () => {
  try {
    await app.listen(PORT, address);
    console.log(`Server started on port ${PORT}`);
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
};

start();
