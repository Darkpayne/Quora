import {
  BrowserRouter,
  Route,
  Routes,  
} from "react-router-dom";
import Following from "./Pages/Following";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Questions from "./Pages/Questions";
import Test from "./Pages/Test";

function App() {
  return (
      <>  
     
       <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/profile" element={ <Profile />} />
          <Route path="/test" element={ <Test />} />
          <Route path="/following" element={ <Following />} />
          <Route path="/questions" element={ <Questions />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
