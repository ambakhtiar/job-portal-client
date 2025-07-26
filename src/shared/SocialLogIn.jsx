import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";


const SocialLogIn = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="m-4 flex flex-col justify-center">
            <div className='divider'>Or</div>
            <button onClick={handleGoogleSignIn} className="btn">Sign In with Google</button>
        </div>
    );
};

export default SocialLogIn;