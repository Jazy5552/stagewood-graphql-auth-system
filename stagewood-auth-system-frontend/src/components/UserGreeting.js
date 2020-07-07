import React from 'react';
import { AUTH_TOKEN } from '../constants';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

const GET_USER_DATA = gql`
  query UserData {
    user {
      name,
    }
  }
`;

export default function UserProfile() {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const {loading, error, data} = useQuery(GET_USER_DATA);
  let message = '';

  if (loading) message = 'Loading...';
  else if (error) message = `Error: ${error.message}`;
  else message = `Welcome back ${data.user.name}`;

  return (
    <div>
      {authToken ? (
        <div>
          {message}
        </div>
      ) : (
        <div>
          Please log in
        </div>
      )}
    </div>
  );
}
