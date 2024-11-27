import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Header />
      <div className="min-h-[78vh]">
        <Outlet />{" "}
      </div>
      <Footer/>
      <Toaster />
    </>
  );
}

export default App;
