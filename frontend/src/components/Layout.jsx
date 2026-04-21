import { Link } from "react-router-dom";

function Layout({ children }) {

const user = JSON.parse(localStorage.getItem("user"));

return (

<div style={{display:"flex"}}>

<div style={{
width:"250px",
height:"100vh",
background:"#1e293b",
color:"white",
padding:"20px"
}}>

<h2>HelpDesk</h2>

<p>{user?.name}</p>

<hr/>

<nav>

<div>
<Link to="/dashboard" style={{color:"white"}}>
Dashboard
</Link>
</div>

<br/>

{user?.rol_id === 1 && (
<>
<div>
<Link to="/usuarios" style={{color:"white"}}>
Usuarios
</Link>
</div>

<br/>

<div>
<Link to="/departamentos" style={{color:"white"}}>
Departamentos
</Link>
</div>

<br/>
</>
)}

<div>
<Link to="/tickets" style={{color:"white"}}>
Tickets
</Link>
</div>

</nav>

<br/>

<button
onClick={()=>{
localStorage.clear();
window.location.href="/";
}}
>
Cerrar sesión
</button>

</div>

<div style={{flex:1,padding:"30px"}}>

{children}

</div>

</div>

);

}

export default Layout;