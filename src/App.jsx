import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import './App.css';
import { Outlet } from "react-router-dom";

function App() {
  

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
