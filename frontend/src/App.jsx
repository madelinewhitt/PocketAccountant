import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Welcome />
            </>} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </main>
    </Router>
  )
}

export default App
