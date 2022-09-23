import { useEffect, useState } from "react";
import {
  BrowserRouter,
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

function App() {

  const [isMobile, setIsMobile] = useState(false)

  // useEffect(() =>  
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? setIsMobile(true):setIsMobile(false), 
  // [])

  return <>{isMobile ? <Mobile/>:<Desktop/>}</>
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

const Desktop = () => {

  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/profile" element={ <Profile />} />
          <Route path="/test" element={ <Test />} />
          <Route path="/following" element={ <Following />} />
          <Route path="/questions" element={ <Questions />} />
          <Route path="/spaces" element={ <Spaces />} />
          <Route path="/notifications" element={ <Notification />} />
        </Routes>
      </BrowserRouter>
    
  )
}
