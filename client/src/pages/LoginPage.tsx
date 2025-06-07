import { memo } from "react";
import { Page } from "./Page";
import { LoginForm } from "../components/AuthForms/LoginForm";

export const LoginPage = memo(() => {
    return (
        <Page>
            <LoginForm />
        </Page>
    );
});
