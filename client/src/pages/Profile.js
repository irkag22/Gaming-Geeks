import Auth from '../utils/auth';
import { useEffect} from 'react';
import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';
import { QUERY_USER } from '../utils/queries';
import { QUERY_USERS } from '../utils/queries';


//const Profile = (props) => {
export default function Profile() {

  const [updateUser, { error, tdata }] = useMutation(UPDATE_USER);
  var users;
  var user;
  var username;
  const { loading, data } = useQuery(QUERY_USERS);
  users = data?.users || [];
  //const {user, loading} = useQuery(QUERY_USER, {variables: {username: 'kdog51'}});

  /*
  const { udata } = useQuery(QUERY_USER);
  let user;

  if (udata) {
    user = udata.user;
  }
  */



  //onst {user, loading} = useQuery(QUERY_USER);

  //const u = data?.user;
  //alert(users.length);
  
//{username: Auth.getProfile().data.username}

   // submit form
   const updateFavorites = async (props) => { 

      //STORE favs in database
      try {

        var favorites = [];

        for (var i=1; i < 17; i++) {
  
            var game = {};
           if (document.getElementById("game" + i).checked) {
            game.id = i;
            game.name = document.getElementById("game" + i).value;
            game.fav = "Y";
            favorites.push(game);
          }
  
        }
        var favjson = JSON.stringify(favorites);
        const { favsResult } = await updateUser({
          variables: {favorites: favjson}
        });
 
      } catch (e) {
        console.error(e);
      }
  }

  useEffect(() => {
    const onPageLoad = (props) => { 
      
      var dbstring = ""
      username = "";
      for (var j=0; j < users.length; j++) {
        if (users[j].username === Auth.getProfile().data.username) {
            user = users[j];
            dbstring = user.favorites;
            username = user.username;
        }
      }
      //retrive string from database

      //var dbstring = '[{"id":3,"name":"PUBG: Battlegrounds","fav":"Y"},{"id":7,"name":"Dead By Daylight","fav":"Y"},{"id":11,"name":"Red Dead Redemption II","fav":"Y"}]';

      //alert(dbstring);

      var obj;
      if (dbstring.length > 0) {
        obj = JSON.parse(dbstring);
      } else {
        obj = [];
      }

      for (var i=0; i < obj.length; i++) {
  
        var idstring = "game" + obj[i].id;
  
          var chkbox = document.getElementById(idstring);

          if (chkbox != null) {
            chkbox.checked = true;
          }
  
      }
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);


    return (
      <div>
        <div>
          <p>Welcome <span>{Auth.getProfile().data.username}</span>!</p> <br />

          <p>Please check the boxes below for the games you are most interested in playing today. It will show next to your username. Now other gamers who are also looking to play can reach out. And don't forget to look yourself for others people to game with!</p>

        </div>
        <div><br></br></div>
        <div>
          <form onSubmit={updateFavorites}>
          <table>
            <tr><td colspan="5">Favorite Games</td></tr>
            <tr>
              <td><input type="checkbox" id="game1" value="Among Us" /></td><td>Among Us</td>
              <td width="50"></td>
              <td><input type="checkbox" id="game2" value="Goose Goose Duck" /></td><td>Goose Goose Duck</td>
            </tr>
            <tr>
              <td><input type="checkbox" id="game3" value="PUBG: Battlegrounds" /></td><td>PUBG: Battlegrounds</td>
              <td width="50"></td>
              <td><input type="checkbox" id="game4" value="Apex Legends" /></td><td>Apex Legends</td>
            </tr>
            <tr>
              <td><input type="checkbox" id="game5" value="Civilization VI" /></td><td>Civilization VI</td>
              <td width="50"></td>
              <td><input type="checkbox" id="game6" value="Elden Ring" /></td><td>Elden Ring</td>
            </tr>
            <tr>
              <td><input type="checkbox" id="game7" value="Dead By Daylight" /></td><td>Dead By Daylight</td>
              <td width="50"></td>
              <td><input type="checkbox" id="game8" value="Stardew Valley" /></td><td>Stardew Valley</td>
            </tr>      
            <tr>
              <td><input type="checkbox" id="game9" value="Rocket League" /></td><td>Rocket League</td>
              <td width="50"></td>
              <td><input type="checkbox" id="game10" value="Final Fantasy XIV" /></td><td>Final Fantasy XIV</td>
            </tr> 
            <tr>
              <td><input type="checkbox" id="game11" value="Red Dead Redemption II" /></td><td>Red Dead Redemption II</td>
              <td width="50"></td>
              <td><input type="checkbox" id="game12" value="The Elder Scrolls V: Skyrim" /></td><td>The Elder Scrolls V: Skyrim</td>
            </tr>
            <tr>
              <td><input type="checkbox" id="game13" value="Grand Theft Auto V" /></td><td>Grand Theft Auto V</td>
              <td width="50"></td>
              <td><input type="checkbox" id="game14" value="Sims 4" /></td><td>Sims 4</td>
            </tr>
            <tr>
              <td><input type="checkbox" id="game15" value="Any Game" /></td><td>Any Game</td>
              <td width="50"></td>
              <td><input type="checkbox" id="game16" value="Other" /></td><td>Other</td>
            </tr>
          </table>
          <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Update Games
          </button>    
          <br></br>
          <p>Please use tabs above to navigate. <br />
          Happy Gaming! <br />
          😁 </p>      
          </form>
          <br></br>
          <br></br>
        </div>
      </div>
    );
}
    
//export default Profile;