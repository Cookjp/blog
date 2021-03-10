import React from 'react';
import { Button } from '@material-ui/core';
import { gql, useQuery } from '@apollo/client';
import client from 'Graphql/Apollo';

// styles

const message = gql`
 query {
   prints {
    id
    description
    dateAdded
    sales
  }
}
`;

// markup
const IndexPage = () => {
  const { loading, error, data } = useQuery(message, { client });

  const post = () => {
    console.log(loading, error, data);
  };

  return (<Button variant="contained" onClick={post}>Click Me</Button>);
};

export default IndexPage;
