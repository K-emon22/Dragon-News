import {useContext} from "react";
import {Link, useNavigate} from "react-router";
import {AuthContext} from "../../Contex/ContextFile";

const NavBar = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const {currentUsers, loading, signout} = useContext(AuthContext);

  const userimage = currentUsers?.photoURL;

  if (currentUsers) {
    console.log("ejkkkhghkn");
  } else if (loading) {
    console.log("loding");
  }
  const navigate = useNavigate();

  const handleSignout = () => {
    signout()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className=" grid grid-cols-3 mt-10">
      <div></div>
      <div className="my-auto mx-auto">
        <ul className="flex flex-row gap-5 ">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>About </li>
          <li>Career </li>
        </ul>
      </div>
      <div className=" flex flex-row gap-5 my-auto ml-auto ">
        {loading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : currentUsers ? (
          <img
            className="rounded-full w-12 h-12"
            src={userimage}
            alt="img"
            referrerPolicy="no-referrer"
          ></img>
        ) : (
          <img src="https://i.ibb.co.com/RTwtT104/user.png" alt="" />
        )}

        <Link to={"/login"} className="btn btn-primary my-auto">
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span> // ✨ Spinner
          ) : currentUsers ? (
            "Logout"
          ) : (
            "Login"
          )}
        </Link>
       {
        currentUsers && <button onClick={handleSignout} className="btn btn-primary my-auto">

        LOGOUT
      </button>
       }
      </div>
    </div>
  );
};

export default NavBar;
