import Auth from '../utils/auth';

function Profile() {
    return (
        <div>
          <p>Welcome {Auth.getProfile().data.username}!</p> <br />
          <p>Please use tabs above to navigate. Happy Gaming!</p>
        </div>
    );
}
    
export default Profile;