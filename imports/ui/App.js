import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import RegisterForm from './RegisterForm';
import ResolutionForm from './ResolutionForm';
import LoginForm from './LoginForm';

const App = ({ loading, resolutions }) => {
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <RegisterForm />
      <LoginForm />
      <button onClick={() => Meteor.logout()} type="submit">
        Logout
      </button>
      <ResolutionForm />

      {resolutions.map(resolution => (
        <li key={resolution._id}>{resolution.name}</li>
      ))}
    </div>
  );
};

const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data }),
})(App);
