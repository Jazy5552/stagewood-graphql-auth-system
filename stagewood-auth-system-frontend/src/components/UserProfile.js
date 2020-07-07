import React from 'react';
import { AUTH_TOKEN } from '../constants';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_USER_DATA = gql`
  query UserData {
    user {
      name,
      username,
      email,
    }
  }
`;

export default function UserProfile() {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const {loading, error, data} = useQuery(GET_USER_DATA, {fetchPolicy: 'network-only'});

  if (!authToken) {
    this.props.history.push('/login');
    return 'Please log in';
  }

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      <h2>Hello {data.user.name}</h2>
      <div>
        {`Username: ${data.user.username}`}
      </div>
      <div>
        {`Email: ${data.user.email}`}
      </div>
      <div className="b f6">
        Only you can see this page
      </div>
    </div>
  );
}
