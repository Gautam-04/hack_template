import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { analytics } from "./firebase";
import { logEvent } from "firebase/analytics";
import Auth from "./pages/Auth/Auth";


logEvent(analytics, 'notification_received');

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
