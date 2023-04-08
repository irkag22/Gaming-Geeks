import Auth from '../utils/auth';

function Profile() {
    return (
        <div>
          <p>Welcome <span>{Auth.getProfile().data.username}</span>!</p> <br />
          <p>Please use tabs above to navigate. <br />
          Happy Gaming! <br />
          😁 </p>
        </div>
    );
}
    
export default Profile;