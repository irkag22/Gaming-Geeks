import Auth from '../utils/auth';

function Profile() {


   // submit form
   const updateFavorites = async (event) => {
    event.preventDefault();
    try {

      var favorites = new Array();

      for (var i=1; i < 15; i++) {

         var game = new Object();
         if (document.getElementById("game" + i).checked) {
          game.id = i;
          game.name = document.getElementById("game" + i).value;
          game.fav = "Y";
          favorites.push(game);
        }

      }

      var favs = JSON.stringify(favorites);

      alert(favs);
      



    } catch (e) {
      console.error(e);
    }

  };



    return (
      <div>
        <div>
          <p>Welcome <span>{Auth.getProfile().data.username}</span>!</p> <br />
          <p>Please use tabs above to navigate. <br />
          Happy Gaming! <br />
          😁 </p>
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
          </table>
          <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Update Games
          </button>          
          </form>
          <br></br>
          <br></br>
        </div>
      </div>
    );
}
    
export default Profile;