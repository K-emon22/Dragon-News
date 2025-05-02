// import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
// import React from "react";
// import {Link} from "react-router";
// import {auth} from "../../FAuth/firebase.init";

// const FRegister = () => {
//   const handleRegister = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const name = e.target.name.value;

//     const photoURL = e.target.photoURL.value;

//     createUserWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         const user = result.user;
//         console.log(result);

//         updateProfile(user, {
//           displayName: name,

//           photoURL: photoURL,
//         })
//           .then(() => {})
//           .catch((error) => console.error(error));
//       })

//       .catch((error) => console.error(error));
//   };

//   return (
//     <div className=" p-20 mt-50">
//       <form onSubmit={handleRegister} className="text-center  space-y-5">
//         <input
//           className="border-2 w-2/5 h-14 font-bold px-2"
//           type="text"
//           name="phone"
//           placeholder="Phone Number"
//         />

//         <br />

//         <input
//           className="border-2 w-2/5 h-14 font-bold px-2"
//           type="text"
//           name="photoURL"
//           placeholder="Photo URL"
//         />

//         <br />

//         <input
//           className="border-2 w-2/5 h-14 font-bold px-2"
//           type="text"
//           name="address"
//           placeholder="Address"
//         />
//         <br />
//         <input
//           className="border-2 w-2/5 h-14 font-bold px-2"
//           type="text"
//           name="name"
//           placeholder="name "
//         />
//         <br />
//         <input
//           className="border-2 w-2/5 h-14 font-bold px-2"
//           placeholder="enter your email"
//           type="email"
//           name="email"
//         />
//         <br />
//         <input
//           className="border-2 w-2/5 h-14 font-bold px-2"
//           placeholder="enter a password "
//           type="password"
//           name="password"
//         />
//         <br />
//         <button className="btn btn-primary w-2/5 bg-green-400 text-black">
//           Register
//         </button>
//         <p>
//           Already have a account?{" "}
//           <Link to={"/login"} className="font-semibold text-blue-600">
//             Login
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default FRegister;

import {useContext} from "react";
import {Link} from "react-router";
import {AuthContext} from "../../Contex/ContextFile";
import {updateProfile} from "firebase/auth";

const FRegister = () => {
  const {creatUser} = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photoURL.value;
    creatUser(email, password)
      .then((result) => {
        console.log(result);
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className=" p-20 mt-50">
      <form onSubmit={handleRegister} className="text-center  space-y-5">
        <input
          className="border-2 w-2/5 h-14 font-bold px-2"
          type="text"
          name="name"
          placeholder="name "
        />
        <br />
        <input
          className="border-2 w-2/5 h-14 font-bold px-2"
          type="text"
          name="photoURL"
          placeholder="Photo URL"
        />

        <br />

        <input
          className="border-2 w-2/5 h-14 font-bold px-2"
          placeholder="enter your email"
          type="email"
          name="email"
        />
        <br />
        <input
          className="border-2 w-2/5 h-14 font-bold px-2"
          placeholder="enter a password "
          type="password"
          name="password"
        />
        <br />
        <button className="btn btn-primary w-2/5 bg-green-400 text-black">
          Register
        </button>
        <p>
          Already have a account?{" "}
          <Link to={"/login"} className="font-semibold text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default FRegister;
