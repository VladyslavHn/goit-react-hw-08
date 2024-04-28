import { useSelector } from "react-redux"
import { selectIsSignedIn, selectUserData } from "../../redux/auth/selectors"



const HomePage = () => {
  const userData = useSelector(selectUserData)
  const isSignedIn = useSelector(selectIsSignedIn)
  return (
    <div>
      {isSignedIn ? <h1>Welcome, {userData.name}!</h1> : <h1>Welcome!</h1>}
    </div>
  )
}

export default HomePage
