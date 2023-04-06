import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/applogo/logo.png";
import { AiFillDatabase } from "react-icons/ai";
import { useSelector,useDispatch } from "react-redux";
import { authActions } from "../redux/store";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [open, isOpen] = useState(false);
  const [value, setvalue] = useState();
  const dispatch = useDispatch();
  const navigate= useNavigate()

  const isLogin = useSelector((state) => state.isLogin);
  console.log(isLogin);

  const handleLogout=()=>{
    try {
        dispatch(authActions.logout())
        alert("logout successfully")
        navigate("/login")
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <nav
        className={`z-[9] fixed w-full left-0 top-0 pl-24 shadow-custom ${
          sticky ? "text-gray-900 bg-white" : "text-[#fafafa]"
        } bg-gray-600`}
      >
        <div className="flex justify-between items-center">
          <div>
            <img className="w-56" src={logo} alt="" />
          </div>
          {isLogin && (
            <div
              className="flex gap-3"
              value={value}
              onChange={(e, val) => setvalue(val)}
            >
              <div className="px-5 rounded-md bg-gray-300 text-black font-semibold hover:bg-white ">
                {" "}
                <NavLink to="/blogs">Blogs</NavLink>
              </div>
              <div className="px-5 rounded-md bg-gray-300 text-black  font-semibold hover:bg-white ">
                <NavLink to="/my-blogs">My Blogs</NavLink>{" "}
              </div>
            </div>
          )}

          <div
            className={`${
              sticky
                ? "md:bg-white/0 bg-[#fafafa] "
                : "bg-[#fafafa] text-gray-800 "
            } pr-24  md:block hidden px-7 font-medium rounded-bl-full `}
          >
            <ul className="text-base flex py-4 items-center gap-1">
              {!isLogin && (
                <>
                  <li className="px-5 rounded-md bg-gray-300 hover:bg-gray-600 hover:text-white">
                    {" "}
                    <NavLink to="/login">LOGIN</NavLink>
                  </li>
                  <li className="px-5 rounded-md bg-gray-300 hover:bg-gray-600 hover:text-white">
                    {" "}
                    <NavLink to="/register">REGISTER</NavLink>
                  </li>
                </>
              )}
              {
                isLogin && (<>
                <li className="px-5 rounded-md bg-gray-300 hover:bg-gray-600 hover:text-white">
                {" "}
                <button onClick={handleLogout}>LOGOUT</button>
              </li>
                </>)
              }
              
            </ul>
          </div>
          <div
            onClick={() => isOpen(!open)}
            className={`z-[999] text-3xl md:hidden m-5 ${
              open ? "text-gray-900" : "text-gray-500"
            }`}
          >
            <AiFillDatabase />
          </div>
          <div
            className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 ${
              open ? "right-0" : "right-[-100%]"
            }`}
          >
            <ul className="flex flex-col text-lg py-2 justify-center gap-10 h-full">
              <li>
                <NavLink to="/">lOGIN</NavLink>
              </li>
              <li>
                <NavLink to="/register">REGISTER</NavLink>
              </li>
              <li>
                <button>logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
