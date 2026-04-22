import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";


<h1 className="text-4xl font-bold text-red-500">
  HelpDesk PRO 🚀
</h1>
function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Login />} />

<Route path="/dashboard" element={<Dashboard />} />

<Route path="/tickets" element={<Tickets />} />

</Routes>

</BrowserRouter>

);

}

export default App;