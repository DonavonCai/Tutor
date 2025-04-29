import {
    FormEvent,
    FormEventHandler,
    memo,
    useCallback,
    useState,
} from "react";
import { useNavigate } from "react-router";
import apiClient from "../services/api-client";

// interface IProps {
//     route: string;
//     method(): void;
// }

export const RegisterForm = memo((/*props: IProps*/) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit: FormEventHandler = async (e: FormEvent) => {
        setLoading(true);
        e.preventDefault();

        console.log(username);
        console.log(password);

        try {
            const res = await apiClient.post("/api/user/register/", {
                username,
                password,
            });
            if (res.status === 200) {
                navigate("/login");
            } else {
                navigate("/error");
            }
        } catch (e) {
            alert(e);
        } finally {
            setLoading(false);
        }
    };

    return loading ? (
        <div>...Loading</div>
    ) : (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>Register</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Username"
            />
            <button className="form-button" type="submit">
                Register
            </button>
        </form>
    );
});
