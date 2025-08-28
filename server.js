const fastify = require("fastify")({ logger: true });
const userRoutes = require("./routes/userRoutes");

// parse JSON body
fastify.register(require("@fastify/formbody"));
fastify.register(require("@fastify/cors"));

// register routes
fastify.register(userRoutes);

// start server
const start = async () => {
  try {
    await fastify.listen({ port: 4000 });
    console.log("Server running on http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
