import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function demo(fastify: FastifyInstance) {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("Demo routing is work");
  });

  fastify.post("/", async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("Demo routing port mathod");
  });

  fastify.put("/", async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("Demo routing put method");
  });

  fastify.delete("/", async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("Demo routing delete mathod");
  });
}
