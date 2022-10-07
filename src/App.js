import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,  
} from "react-router-dom";
import Following from "./Pages/Following";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Notification from "./Pages/Notification";
import Profile from "./Pages/Profile";
import Questions from "./Pages/Questions";
import Spaces from "./Pages/Spaces.js";
import Test from "./Pages/Test";
import { useContext } from "react";
import AuthContext from "./ContextApi/AuthContext";

function App() {

  const {user} = useContext(AuthContext)

  const [isMobile, setIsMobile] = useState(false)

  // useEffect(() =>  
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? setIsMobile(true):setIsMobile(false), 
  // [])

  return <>{isMobile ? <Mobile user={user}/>:<Desktop user={user}/>}</>
}

export default App;

const Mobile = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <>home</>} />
        <Route path="/login" element={ <>1</>} />
        <Route path="/profile" element={ <>2</>} />
        <Route path="/test" element={ <>3</>} />
        <Route path="/following" element={ <>4</>} />
        <Route path="/questions" element={ <>5</>} />
        <Route path="/spaces" element={ <>6</>} />
        <Route path="/notifications" element={ <>7</>} />
      </Routes>
    </BrowserRouter>
  )
}

const Desktop = ({user}) => {

  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <Navigate to="/login"  />} />
          <Route path="/login" element={user ? <HomePage /> :<Login />} />
          <Route path="/profile" element={user ?  <Profile /> : <Navigate to="/login"  />} />
          <Route path="/test" element={user ? <Test />: <Navigate to="/login"  />} />
          <Route path="/following" element={user ?  <Following /> : <Navigate to="/login"  />} />
          <Route path="/questions" element={user ? <Questions /> : <Navigate to="/login"  />} />
          <Route path="/spaces" element={user ? <Spaces /> : <Navigate to="/login"  />} />
          <Route path="/notifications" element={user ? <Notification /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    
  )
}
