import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import {Link, useNavigate} from "react-router";
import {auth} from "../../FAuth/firebase.init";
import {useEffect, useState} from "react";

const FLogin = () => {
  const navigation = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleGmailLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        navigation("/");
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    console.log("emon");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigation("/");
      })
      .catch((error) => console.error(error));
  };

  const [save, setSave] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        setSave(currentuser);
        console.log(currentuser);
      } else {
        console.log("no data", save);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className=" p-20 mt-50">
      <form onSubmit={handleGmailLogin} className="text-center  space-y-5">
        <input
          className="border-2 w-2/5 h-14 font-bold px-2"
          placeholder="enter your email"
          type="email"
          name="email"
        />
        <br />
        <input
          className="border-2 w-2/5 h-14 font-bold px-2"
          placeholder="enter your password "
          type="password"
          name="password"
        />
        <br />
        <button
          type="submit"
          className="btn btn-primary w-2/5 bg-red-200 text-black"
        >
          Login
        </button>

        <br />
        <button
          onClick={handleGoogleLogin}
          className="btn btn-primary w-2/5 bg-blue-400"
        >
          Login With google
        </button>
        <br />
        <button className="btn btn-primary w-2/5 bg-green-400 text-black">
          Login With GitHub
        </button>
        <p>
          Don't have a account?{" "}
          <Link to={"/register"} className="font-semibold text-blue-600">
            Register Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default FLogin;
