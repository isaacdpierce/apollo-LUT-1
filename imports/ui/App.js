import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import ResolutionForm from './ResolutionForm';

const App = ({ data }) => {
  if (data.loading) return <div>Loading...</div>;
  return (
    <div>
      <h1>{data.hi}</h1>
      <ResolutionForm />
      {data.resolutions.map(resolution => (
        <li key={resolution._id}>{resolution.name}</li>
      ))}
    </div>
  );
};

const hiQuery = gql`
  {
    hi
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(hiQuery)(App);
