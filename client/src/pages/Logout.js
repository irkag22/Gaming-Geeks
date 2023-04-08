

import Auth from '../utils/auth';

const Logout = (props) => {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <div>
        <p>Please confirm logout from <span>{Auth.getProfile().data.username}</span>'s profile:</p>
        <br />
        <button type="button" aria-selected="true" className="chakra-tabs__tab css-1q32csp btnmargin" onClick={logout}>Confirm</button>
      </div>
    </>
  );
}
  
export default Logout;