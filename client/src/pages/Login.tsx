import { memo } from "react";
import { Page } from "./Page";
import { LoginForm } from "../components/AuthForms/LoginForm";

export const Login = memo(() => {
    return (
        <Page>
            <LoginForm />
        </Page>
    );
});
