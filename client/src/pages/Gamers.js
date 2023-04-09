import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

import './style.css';

export default function Gamers() {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        {users.map(user => <div>{user.username}</div>)}
      </div>
    </main>
  );
};
