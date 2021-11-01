import React, {useRef} from 'react';
import Header from '../components/Header';
import '../styles/Login.scss';

const Login = () => {

    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
    }

    return (
        <>
            <Header/>
            <div className="login">
                <div className="form-container">
                    <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo"/>

                    <form action="/" className="form" ref={form}>
                        <label for="email" className="label">Email address</label>
                        <input type="text" id="email" placeholder="platzi@example.cm" className="input input-email" name="email"/>

                        <label for="password" className="label">Password</label>
                        <input type="password" id="password" placeholder="*********" className="input input-password" name="password"/>

                        <input type="submit" value="Log in" className="primary-button login-button" onClick={handleSubmit}/>
                        <a href="/">Forgot my password</a>
                    </form>

                    <button class="secondary-button signup-button">Sign up</button>
                </div>
            </div>
        </>
    );
}
 
export default Login;