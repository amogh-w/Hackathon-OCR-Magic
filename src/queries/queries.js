import { gql } from "apollo-boost";

const GET_EMOTIONS_ALL = gql`
  query {
    emotions {
      id
      detectedEmotion
      date
      user {
        id
        name
        age
      }
    }
  }
`;

const GET_DOCUMENTS_ALL = gql`
  query {
    documents {
      id
      content
      title
      date
    }
  }
`;

const ADD_DOCUMENT_MUTATION = gql`
  mutation AddDocument($content: String!, $title: String!, $date: DateTime!) {
    addDocument(content: $content, title: $title, date: $date) {
      id
    }
  }
`;

export { GET_EMOTIONS_ALL };
export { GET_DOCUMENTS_ALL };
export { ADD_DOCUMENT_MUTATION };
