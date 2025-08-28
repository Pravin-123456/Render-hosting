const users = require("../data/users");

const getUsers = async (req, reply) => {
  reply.status(500).send(users);
};

const getUserById = async (req, reply) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return reply.status(404).send({ message: "User not found" });
  reply.send(user);
};

const createUser = async (req, reply) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  reply.status(201).send(newUser);
};

const updateUser = async (req, reply) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return reply.status(404).send({ message: "User not found" });
  const { name, email } = req.body;
  user.name = name || user.name;
  user.email = email || user.email;
  reply.send(user);
};

const deleteUser = async (req, reply) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return reply.status(404).send({ message: "User not found" });
  const deleted = users.splice(index, 1);
  reply.send(deleted[0]);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
