import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

import './style.css';

export default function Gamers() {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  const favArrays = [];

  for (var i=0; i < users.length; i++) {

    var gamerstring = users[i].username + ": ";
    var favoritestring = users[i].favorites;

    var obj = null;
    if (favoritestring.length > 0) {
      obj = JSON.parse(favoritestring);
    } else {
      obj = [];
    }

    for (var j=0; j < obj.length; j++) {
      if (j != 0) {
        gamerstring += ", ";
      }
      gamerstring += obj[j].name;      
    }
    
    favArrays[i] = gamerstring;

  }

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <p>Here you can view other other users of the site, and see which gamers are interested in the same games you are. Start a chat with them, or start a game. Start making friends now!</p>
        <br></br>
        <br></br>
            {favArrays.map(favorites => 
              <table width="100%">
                <tr>
                <td>
                {favorites}
                </td></tr>
                <br></br>
                </table>
            )}
      </div>
    </main>
  );
};
