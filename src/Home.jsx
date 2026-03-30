import { Link, Outlet } from "react-router-dom";
import "./Home.css";
import { useState } from "react";
import { setUsers } from "./slice/userSlice";
import { useDispatch } from "react-redux";

const Home = () => {
    const dispatch = useDispatch()
    const [formInput, setFormInput] = useState({
        name: "",
        email: "",
        age: "",
        contact:"",

    });

    const handlechange = (event)=>{
        const {name,value} = event.target;
    
        setFormInput ((CurrInput) => {
        return{
            ...CurrInput,
            [name]:value,
        };
    });
    };

    console.log(formInput);

    const addUsers = (event)=>{
        event.preventDefault();
        dispatch(setUsers(formInput))

    }

    
    return (
            <div>
                <h1>Welcome to Our Website!</h1>
                <p>Discover our amazing products and services. We are committed to providing you with the best experience possible. Explore our website to learn more about what we have to offer!</p>
                 <form>
                    <label>Name</label>
                    <br/>
                    <input name="name"
                     type="text" value={formInput.name} onChange={handlechange}/>
                    <br/>
                    <label>Age</label>
                    <br/>
                    <input name="age"
                     type="text" value={formInput.age} onChange={handlechange}/>
                    <br/>
                    <label>Email</label>
                    <br/>
                    <input name="email"
                     type="text" value={formInput.email} onChange={handlechange}/>
                    <br/>
                    <label>Contact</label>
                    <br/>
                    <input name="contact"
                     type="number" value={formInput.contact} onChange={handlechange}/>
                    <br/>
                    <button onClick={addUsers}>Add</button>
                    </form>  
            </div>
    );
          
}

export default Home;
 
                        
