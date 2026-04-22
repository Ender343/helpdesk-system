import { Link } from "react-router-dom";

function Layout({ children }) {

return (

<div className="flex h-screen w-screen">

{/* Sidebar */}
<div className="w-60 bg-gray-900 text-white flex flex-col">

<div className="p-6 text-xl font-bold border-b border-gray-700">
HelpDesk
</div>

<nav className="flex-1 p-4 space-y-2">

<Link
to="/dashboard"
className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
>
Dashboard
</Link>

<Link
to="/usuarios"
className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
>
Usuarios
</Link>

<Link
to="/departamentos"
className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
>
Departamentos
</Link>

<Link
to="/tickets"
className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
>
Tickets
</Link>

</nav>

<div className="p-4 border-t border-gray-700">

<button
onClick={()=>{
localStorage.removeItem("token");
window.location.href="/";
}}
className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
>
Cerrar sesión
</button>

</div>

</div>

{/* Contenido */}
<div className="flex-1 overflow-y-auto bg-gray-200 p-6">

{children}

</div>

</div>

);

}

export default Layout;