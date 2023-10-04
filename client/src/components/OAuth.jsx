import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      console.log('could not sign in with google', error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="text-red p-3 rounded-lg uppercase hover:opacity-95 border border-red-700"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Center text horizontally
      }}
    >
      Continue with{" "}
      <span>
        <img
          src="https://th.bing.com/th/id/R.f863aef4d15f1498abe6f2d498cdc987?rik=xOBP%2bYgoFH77AA&pid=ImgRaw&r=0"
          height="20"
          width="20"
          style={{ marginLeft: "8px" }} // Adjust margin as needed
        />
      </span>{" "}
    </button>
  );
}
