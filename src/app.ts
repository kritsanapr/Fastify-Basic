import * as fastify from "fastify";
import cors from "@fastify/cors";
import routers from "./router";

const app: fastify.FastifyInstance = fastify.fastify({
  logger: {
    level: "info",
  },
});

app.register(cors, {
  // put your options here
});
app.register(require("@fastify/formbody"));
app.register(routers);

export default app;
