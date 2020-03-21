# OCR Magic

![1](/Screenshots/0.png?raw=true "SIH")

Presenting a React Web Application to convert Printed Text or Other Text to convert into local data using OCR, and storing the extracted data into a Database. It uses React.js for frontend, while MongoDB + GraphQL as its backend. OCR Technology is added using the Pure Javascript Multilingual OCR Library Tesseract.js

## Features of Tesseract.js

- Supports more than 100 languages
- Automatic text orientation and script detection
- Simple interface for reading paragraph, word, and character bounding boxes
- It can run either in a browser and on a server with NodeJS.

## Screenshots

Dashboard

![1](/Screenshots/1.png?raw=true "Dashboard")

Image Convert Screen

![1](/Screenshots/2.png?raw=true "Image Convert Screen")

## Schemas:

Document Schema:

```
const documentSchema = new Schema({
  content: String,
  title: String,
  date: Date,
  userId: String
});
```

## Code Snippets

GraphQL Root Query and Mutation:

```
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
```

## Resources:

- [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html) - Get started with React here
- [Material-UI](https://material-ui.com/) - React components for faster and easier web development
- [Express.js](https://expressjs.com/) - A web application framework for Node.js
- [GraphQL](https://graphql.org/) - An open-source data query and manipulation language for APIs
- [Mongoose](https://mongoosejs.com/docs/) - An Object Data Modeling (ODM) library for MongoDB and Node
- [Firebase](https://firebase.google.com/) - Build apps fast, without managing infrastructure
- [Tesseract.js](https://tesseract.projectnaptha.com/) - The pure Javascript port of the popular Tesseract OCR engine
- [Multer ](https://tesseract.projectnaptha.com/) - Multer is a node.js middleware for handling multipart/form-data

## Available Scripts:

In the root directory, you can run: `nodemon server`

Server will be running at [http://localhost:5001](http://localhost:5001). It is required for endpoint where Tesseract.js is running.

In the server directory, you can run: `nodemon server`

Server will be running at [http://localhost:5000](http://localhost:5000). It is required for MongoDB cluster connectivity and GraphQL endpoints.

In the src directory, you can run: `yarn start`

The website will be live at [http://localhost:3000](http://localhost:3000).

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Team Members:

| [Amogh Warkhandkar](https://github.com/amogh-w) | [Omkar Bhambure](https://github.com/blablabluomie) |
