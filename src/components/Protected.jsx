import { useContext, useEffect } from "react";
import { useRouter } from 'next/router'
import { UserContext } from "../context/userContext";

export default function withAuth(Component) {
  return function WithAuth(props) {
    const { userInfo } = useContext(UserContext);
    const router = useRouter()

    useEffect(() => {
        if (userInfo == null) {
          router.push("/login");
        }
      }, [userInfo]);
  
      if (userInfo == null) {
        return null;
      }

    return <Component {...props} />;
  };
}