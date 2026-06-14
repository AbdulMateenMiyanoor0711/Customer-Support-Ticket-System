import { BrowserRouter, Route, Routes,Link } from "react-router";
import Submitticket from "./components/Submitticket";
import Viewticket from "./components/Viewticket";
const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Submitticket />} />
            <Route path="/ticket" element={<Viewticket />} />
          </Routes>
          <nav>
          <Link to="/">Submit Ticket</Link>
          <Link to="/ticket">View Ticket</Link>
        </nav>
        </BrowserRouter>
        
      </div>
    </>
  );
};

export default App;
