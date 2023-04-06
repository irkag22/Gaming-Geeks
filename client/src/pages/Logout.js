

import Auth from '../utils/auth';

const Logout = (props) => {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <div>
        <p>{Auth.getProfile().data.username}'s profile</p>
      </div>

      <div>
      <button className="btn btn-lg btn-light m-2" onClick={logout}>
      Logout
      </button>
      </div>
    </>
  );
}
  
export default Logout;