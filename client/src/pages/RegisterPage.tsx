import { memo } from "react";
import { RegisterForm } from "../components/AuthForms/RegisterForm";
import { Page } from "./Page";

export const RegisterPage = memo(() => {
    return (
        <Page>
            <RegisterForm />
        </Page>
    );
});
