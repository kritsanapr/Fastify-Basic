"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)();
const PORT = 8080;
server.get("/", (req, reply) => {
    reply.send("reply something");
});
server.listen(PORT, "127.0.0.1", (error, address) => {
    if (error)
        throw error;
    console.log(`Server listening on ${address}`);
});
//# sourceMappingURL=server.js.map