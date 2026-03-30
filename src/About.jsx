import {useDispatch, useSelector} from "react-redux"
import { deleteUser } from "./slice/userSlice";

function About() {
    const users = useSelector((state) => state.usersInfo.users);
    const dispatch = useDispatch();

    console.log(users);

    const deleteUserInfo =(index) => {
        dispatch(deleteUser(index));

    };
    
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to our website! We are dedicated to providing you with the best experience possible. Our team is passionate about delivering high-quality content and services to our users. Thank you for visiting us!</p>
            {users?.map((user,index)=>{
                return(
                    <div key={index}>
                        <h1>{user.name}</h1>
                        <h2>{user.age}</h2>
                        <h2>{user.email}</h2>
                        <h2>{user.contact}</h2>
                        <button onClick={() => deleteUserInfo(index)}>Delete</button>
                        </div>
                );
            })};
        </div>
    );
};

export default About;