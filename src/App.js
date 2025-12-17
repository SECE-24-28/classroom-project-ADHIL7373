import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Users from "./Users";
import Books from "./Books";
import Invoices from "./invoices";
import Invoice from "./invoice";

function App() {
  return (
    <BrowserRouter>
      <h1>Welcome to React Router Demo</h1>
      <ul>
       <Link to="/">< li>Home</li></Link>
       <Link to="/about"><li>About</li></Link>
       <Link to="/contact"><li>Contact</li></Link>
       <Link to="/users/1"><li>Users 1</li></Link>
        <Link to="/users/2"><li>Users 2</li></Link>
        <Link to ="/Books/oldBooks"><li>old Books</li></Link>
        <Link to="/Books/newBooks"><li>New Books</li></Link>
        <Link to='/invoices'><li>Invoices</li></Link>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/:id" element={<Users />} />
    <Route path="/Books">
       <Route path="newBooks" element={<Books/>}></Route>
        <Route path="oldBooks" element={<Books/>}></Route>
      </Route>
      <Route path='/invoices' element={<Invoices/>}/>
      <Route path='/invoice/:id' element={<Invoice/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
