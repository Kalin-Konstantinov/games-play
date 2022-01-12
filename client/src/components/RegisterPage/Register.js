import { Link } from "react-router-dom";
import { safeUserData } from "../../helpers/authControl";
import { register } from "../../services/authServise";

const Register = ({
    history,
    onLogin,
}) => {

    const onSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        const rePassword = form.get('confirm-password');
        if (password !== rePassword) {
            return alert('Password must match repeat password.');
        }
        register({ email, password })
            .then(x => {
                if (x.code) {
                    throw x;
                }
                safeUserData(x);
                onLogin();
                e.target.reset();
                history.push('/');
            })
            .catch(err => alert(err.message));
    }


    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>

    );
}

export default Register;