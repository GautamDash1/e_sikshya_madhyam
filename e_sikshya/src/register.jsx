import React ,{useState} from "react";
export const Register = (props) => {
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [name,setName] =useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className ="auth-form-container">
             <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
                <input value={ name } type="name" placeholder="Enter the full name." id="name" name="name"/>
                <label htmlFor="email">E-mail</label>
                <input value={ email } onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter the email." id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={ pass } onChange={(e) => setPass(e.target.value)}type="password" placeholder="Enter password" id="password" name="password"/>
                <button type = "submit">Sign Up</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    )
}