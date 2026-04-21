import Layout from "../components/Layout";
import { useState } from "react";

function Tickets() {

const [show,setShow] = useState(false);

return (

<Layout>

<h1>Tickets</h1>

<button onClick={()=>setShow(true)}>
Crear Ticket
</button>

{show && (

<div style={{
background:"#00000090",
position:"fixed",
top:0,
left:0,
right:0,
bottom:0
}}>

<div style={{
background:"white",
width:"400px",
margin:"100px auto",
padding:"20px"
}}>

<h3>Nuevo Ticket</h3>

<textarea
placeholder="Descripción"
style={{width:"100%"}}
/>

<br/><br/>

<button>Guardar</button>

<button onClick={()=>setShow(false)}>
Cerrar
</button>

</div>

</div>

)}

</Layout>

);

}

export default Tickets;