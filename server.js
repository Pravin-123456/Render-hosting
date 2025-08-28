const fastify = require("fastify")({ logger: true });
const userRoutes = require("./routes/userRoutes");

// parse JSON body
fastify.register(require("@fastify/formbody"));
fastify.register(require("@fastify/cors"));

const PORT = process.env.PORT || 5000; 

fastify.register(require("@fastify/cors"), { origin: "*" });

// register routes
fastify.register(userRoutes);

// start server
const start = async () => {
  try {
    await fastify.listen({ port: PORT, host: "0.0.0.0" });
    console.log("Server running on http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();


