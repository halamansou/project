import { Navigate, Outlet } from 'react-router-dom';
const Protectedrout=()=>{
   const isAuthnticated=true;

    if (!isAuthnticated) {
      console.log("you Must Login");
      return <Navigate to="/" />;
    }
    return <Outlet/>;
};
export default Protectedrout;



// import { Navigate, Outlet } from 'react-router-dom';
// import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { loginDialogAtom, userAtom } from '../atoms';

// const ProtectedRoute = ({ redirectPath, children }) => {
//   const user = useRecoilValue(userAtom);
//   const setLoginDialogState = useSetRecoilState(loginDialogAtom);

//   if (!user.isLoggedIn) {
//     setLoginDialogState(true);
//     return <Navigate to={redirectPath || '/'} replace />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;
