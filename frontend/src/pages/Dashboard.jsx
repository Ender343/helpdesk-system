import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

const [data,setData] = useState({});

useEffect(()=>{
loadData();
},[]);

const loadData = async () => {

const response = await axios.get(
"http://127.0.0.1:8000/api/dashboard",
{
headers:{
Authorization:`Bearer ${localStorage.getItem("token")}`
}
}
);

setData(response.data);

};

return (

<Layout>

<div className="p-6">

<h1 className="text-2xl font-bold mb-4 border-b pb-2 text-black">
Dashboard
</h1>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
<h2 className="text-lg">Total</h2>
<p className="text-3xl font-bold">{data.total || 0}</p>
</div>

<div className="bg-yellow-500 text-white p-6 rounded-xl shadow-lg">
<h2 className="text-lg">Abiertos</h2>
<p className="text-3xl font-bold">{data.abiertos || 0}</p>
</div>

<div className="bg-indigo-500 text-white p-6 rounded-xl shadow-lg">
<h2 className="text-lg">En Proceso</h2>
<p className="text-3xl font-bold">{data.proceso || 0}</p>
</div>

<div className="bg-green-500 text-white p-6 rounded-xl shadow-lg">
<h2 className="text-lg">Cerrados</h2>
<p className="text-3xl font-bold">{data.cerrados || 0}</p>
</div>

</div>

</div>

</Layout>

);

}

export default Dashboard;