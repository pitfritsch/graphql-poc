const arrayUsers = [
  { nome: "Pedro", ativo: false },
  { nome: "Sol", ativo: true },
  { nome: "Ivo", ativo: true, email: 'ivo@gmail.com' },
];

const userResolvers = {
  Query: {
    users: () => arrayUsers,
    primeiroUser: () => arrayUsers[0]
  }
};

module.exports = userResolvers;