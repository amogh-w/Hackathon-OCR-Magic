const graphql = require("graphql");
const graphqlDate = require("graphql-iso-date");
const Document = require("../models/document");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema
} = graphql;
const { GraphQLDateTime } = graphqlDate;

const DocumentType = new GraphQLObjectType({
  name: "Document",
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    title: { type: GraphQLString },
    date: { type: GraphQLDateTime }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    documents: {
      type: GraphQLList(DocumentType),
      resolve(parent, args) {
        return Document.find({});
      }
    }
  }
});

const Mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addDocument: {
      type: DocumentType,
      args: {
        content: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        date: { type: new GraphQLNonNull(GraphQLDateTime) }
      },
      resolve(parent, args) {
        let document = new Document({
          content: args.content,
          title: args.title,
          date: args.date
        });
        return document.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});
