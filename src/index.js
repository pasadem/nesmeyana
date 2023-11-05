const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
// Запускаем сервер на порте, указанном в файле .env, или на порте 4000
const port = process.env.PORT || 5000;
// Строим схему с помощью языка схем GraphQL
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
// Предоставляем функции распознавания для полей схемы
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
const app = express();
// Настраиваем Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });
// Применяем промежуточное ПО Apollo GraphQL и указываем путь к /api
server.applyMiddleware({ app, path: '/api' });
app.listen({ port }, () =>
  console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  )
);
