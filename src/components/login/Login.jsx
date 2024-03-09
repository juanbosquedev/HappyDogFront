// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { userLog } from "../../redux/actions/actionCreator";

// import Box from "@mui/material/Box";

// import Typography from "@mui/material/Typography";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// export const Login = ({ closeModal }) => {
//   const dispatch = useDispatch();
//   const userLogs = useSelector((state) => state.userLogged.logged);

//   const [user, setUser] = useState({
//     user: "",
//     password: "",
//   });

//   const onInputChange = ({ target }) => {
//     const { name, value } = target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault(), closeModal();
//     dispatch(userLog(user));
//   };
//   return (
//     <form onSubmit={onSubmit}>
//       {userLogs === false && <p>datos incorrectos</p>}
//       <div className="modal" tabIndex="-1"></div>

//       <Box sx={style}>
//         <Typography id="transition-modal-title" variant="h6" component="h2">
//           Text in a modal
//         </Typography>
//         <Typography id="transition-modal-description" sx={{ mt: 2 }}>
//           <div className={style}>
//             <label htmlFor="name" className="form-label">
//               Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="user"
//               name="user"
//               placeholder="user name"
//               value={user.user}
//               onChange={onInputChange}
//             ></input>
//           </div>
//         </Typography>
//         <Typography id="transition-modal-description" sx={{ mt: 2 }}>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Email
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="password"
//               name="password"
//               placeholder="password"
//               value={user.password}
//               onChange={onInputChange}
//             ></input>
//           </div>
//         </Typography>
//         <button type="submit" onClick={onSubmit} className="btn btn-primary">
//           Ingresar
//         </button>
//       </Box>
//     </form>
//   );
// };


// "use client";

import { Avatar } from "@mui/material";
import { AiFillCaretDown } from "react-icons/ai";
import { useCallback, 
  // useState 
} from "react";
// import Link from "next/link";
// import MenuItem from "./MenuItem";
// import { signOut } from "next-auth/react";
// import BackDrop from "./BackDrop";
// import { SafeUser } from "@/types";

// interface currentUserProps {
//   currentUser: SafeUser | null;
// }
export const Login = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    // setIsOpen((prev) => !prev);
  }, []);
  return (
    <>
      <div className="relative z-30">
        <div
          className="
        p-2
        border-[1px]
        border-slate-400
        flex
        flex-row
        items-center
        gap-1
        rounded-full
        cursor-pointer
        hover:shadow-md
        transition
        text-slate-700"
          onClick={toggleOpen}
        >
          <Avatar src={""} />
          <AiFillCaretDown />
        </div>
        {/* {isOpen && (
          <div
            className="
        absolute
        rounded-md
        shadow-md
        w-[170px]
        bg-white
        overflow-hidden
        right-0
        top-12
        text-sm
        flex
        flex-col
        coursor-pointer"
          >
            {currentUser ? (
              <div>
                <Link href="/orders">
                  <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
                </Link>
                <Link href="/admin">
                  <MenuItem
                    onClick={() => {
                      toggleOpen;
                    }}
                  >
                    Admin Dashboard
                  </MenuItem>
                </Link>
                <hr/>
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                >
                  Logout
                </MenuItem>
              </div>
            ) : (
              <div>
                <Link href="/login">
                  <MenuItem onClick={toggleOpen}>Log In </MenuItem>
                </Link>
                <Link href="/register">
                  <MenuItem onClick={toggleOpen}>Register </MenuItem>
                </Link>
              </div>
            )}
          </div>
        )} */}
      </div>
      Login{/* {isOpen ? <BackDrop onClick={toggleOpen} /> : null} */}
    </>
  );
};

// export default Login;
