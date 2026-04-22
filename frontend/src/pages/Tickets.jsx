import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";

function Tickets() {

const [show,setShow] = useState(false);
const [tickets,setTickets] = useState([]);
const [descripcion,setDescripcion] = useState("");

useEffect(()=>{

loadTickets();

},[]);

const loadTickets = async () => {

try {

const response = await axios.get(
"http://127.0.0.1:8000/api/tickets",
{
headers:{
Authorization:`Bearer ${localStorage.getItem("token")}`
}
}
);

setTickets(response.data);

} catch(error){

console.error(error);

}

};

const guardarTicket = async () => {

try {

await axios.post(
"http://127.0.0.1:8000/api/tickets",
{
descripcion
},
{
headers:{
Authorization:`Bearer ${localStorage.getItem("token")}`
}
}
);

setShow(false);
setDescripcion("");
loadTickets();

} catch(error){

console.error(error);

}

};

const cambiarEstado = async (id,estado) => {

try {

await axios.put(
`http://127.0.0.1:8000/api/tickets/${id}`,
{
estado
},
{
headers:{
Authorization:`Bearer ${localStorage.getItem("token")}`
}
}
);

loadTickets();

}catch(error){

console.error(error);

}

};
const [usuarios,setUsuarios] = useState([]);

const loadUsuarios = async () => {

const response = await axios.get(
"http://127.0.0.1:8000/api/usuarios",
{
headers:{
Authorization:`Bearer ${localStorage.getItem("token")}`
}
}
);

setUsuarios(response.data);

};

useEffect(()=>{

loadTickets();
loadUsuarios();

},[]);

const cambiarPrioridad = async (id,prioridad) => {

try {

await axios.put(
`http://127.0.0.1:8000/api/tickets/${id}`,
{
prioridad
},
{
headers:{
Authorization:`Bearer ${localStorage.getItem("token")}`
}
}
);

loadTickets();

}catch(error){

console.error(error);

}

};

const asignarTecnico = async (id,asignado_a) => {

await axios.put(
`http://127.0.0.1:8000/api/tickets/${id}`,
{
asignado_a
},
{
headers:{
Authorization:`Bearer ${localStorage.getItem("token")}`
}
}
);

loadTickets();

};


const getEstadoBadge = (estado) => {

switch(estado){
case "abierto":
return "bg-yellow-100 text-yellow-800";
case "en_proceso":
return "bg-blue-100 text-blue-800";
case "cerrado":
return "bg-green-100 text-green-800";
default:
return "bg-gray-100 text-gray-800";
}

};

const getPrioridadBadge = (prioridad) => {

switch(prioridad){
case "alta":
return "bg-red-100 text-red-800";
case "media":
return "bg-yellow-100 text-yellow-800";
case "baja":
return "bg-green-100 text-green-800";
default:
return "bg-gray-100 text-gray-800";
}

};
return (

<Layout>


<div className="p-6">

<h1 className="text-2xl text-black font-bold mb-4">Tickets</h1>

<button
onClick={()=>setShow(true)}
className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mb-4"
>
+ Crear Ticket
</button>

<div className="overflow-x-auto bg-white rounded-xl shadow">

<table className="min-w-full">

<thead className="bg-gray-100 text-black">
<tr>
<th className="text-left p-3">ID</th>
<th className="text-left p-3">Descripción</th>
<th className="text-left p-3">Estado</th>
<th className="text-left p-3">Prioridad</th>
<th className="text-left p-3">Asignado</th>
</tr>
</thead>

<tbody>

{tickets.map(ticket => (

<tr key={ticket.id} className="border-t hover:bg-gray-50">

<td className="text-black p-3">{ticket.id}</td>

<td className="text-black p-3">{ticket.descripcion}</td>

<td className="p-3">

<span
onClick={()=>{
const nuevo =
ticket.estado === "abierto" ? "en_proceso" :
ticket.estado === "en_proceso" ? "cerrado" : "abierto";

cambiarEstado(ticket.id,nuevo);
}}
className={`cursor-pointer hover:opacity-80 transition px-3 py-1 rounded-full text-sm font-semibold ${getEstadoBadge(ticket.estado)}`}
>
{ticket.estado}
</span>

</td>
<td className="p-3">

<span
className={`px-3 py-1 rounded-full text-sm font-semibold ${getPrioridadBadge(ticket.prioridad)}`}
>
{ticket.prioridad.charAt(0).toUpperCase() + ticket.prioridad.slice(1)}
</span>

</td>

<td className="p-3">

<span
onClick={()=>{
const nueva =
ticket.prioridad === "baja" ? "media" :
ticket.prioridad === "media" ? "alta" : "baja";

cambiarPrioridad(ticket.id,nueva);
}}
className={`cursor-pointer hover:opacity-80 transition px-3 py-1 rounded-full text-sm font-semibold ${getPrioridadBadge(ticket.prioridad)}`}
>
{ticket.prioridad}
</span>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

{show && (

<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

<div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fadeIn">

{/* Título */}
<h2 className="text-2xl font-bold mb-4 text-gray-800">
Crear Ticket
</h2>

{/* Input */}
<textarea
placeholder="Describe el problema..."
value={descripcion}
onChange={(e)=>setDescripcion(e.target.value)}
className="w-full border bg-gray-300 border-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
rows="4"
/>

{/* Botones */}
<div className="flex justify-end gap-3 mt-6">

<button
onClick={()=>setShow(false)}
className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
>
Cancelar
</button>

<button
onClick={guardarTicket}
className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
>
Guardar
</button>

</div>

</div>

</div>

)}

</Layout>

);

}

export default Tickets;