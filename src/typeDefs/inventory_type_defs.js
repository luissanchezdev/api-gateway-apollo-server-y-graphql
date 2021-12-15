const { gql } = require('apollo-server');
const inventoryTypeDefs = gql `
type Inventory {
name: String!
price: Int!
description: String!
}
extend type Query {
inventoryByName(name: String!): Inventory
}
`;
module.exports = inventoryTypeDefs;