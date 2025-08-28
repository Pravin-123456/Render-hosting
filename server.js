const fastify = require("fastify")({ logger: true });
const userRoutes = require("./routes/userRoutes");

// parse JSON body
fastify.register(require("@fastify/formbody"));

// ✅ Register CORS only once here
fastify.register(require("@fastify/cors"), {
  origin: ["http://localhost:3000", "https://your-frontend.vercel.app"], 
  methods: ["GET", "POST", "PUT", "DELETE"],
});

// register routes
fastify.register(userRoutes);

// start server
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 4000, host: "0.0.0.0" });
    console.log("🚀 Server running");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
