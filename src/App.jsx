import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoomPanel from "./components/RoomPanel";
import { Routes, Route } from "react-router-dom";
import RoomDetailsPage from "./pages/RoomDetailsPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Header />
      <Routes>
        <Route path="/" element={<RoomPanel />} />
        <Route path="/room/:roomName" element={<RoomDetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
