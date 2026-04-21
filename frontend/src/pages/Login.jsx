import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const login = async () => {
try {

const response = await axios.post(
"http://127.0.0.1:8000/api/login",
{
email,
password
}
);

console.log(response.data);

localStorage.setItem("token", response.data.token);
localStorage.setItem("user", JSON.stringify(response.data.user));
alert("Login correcto");
navigate("/dashboard");

} catch (error) {

alert("Credenciales incorrectas");

}
};

return (
<div style={{padding:"50px"}}>

<h2>HelpDesk Login</h2>

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={login}>
Ingresar
</button>

</div>
);

}

export default Login;