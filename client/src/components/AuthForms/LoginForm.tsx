import { ReactElement, useCallback } from "react";
import { Button, TextInput, Form } from "@utils";
import { useForm } from "react-hook-form";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";

interface ILoginForm {
    username: string;
    password: string;
}

export function LoginForm(): ReactElement {
    //#region Form setup
    const { register, handleSubmit } = useForm<ILoginForm>();
    //#endregion

    //#region Event handlers
    const onSubmit = useCallback((data: ILoginForm) => {
        console.log(data);
    }, []);
    //#endregion

    return (
        <Form>
            <TextInput labelText="Username" {...register("username")} />
            <TextInput
                labelText="Password"
                {...register("password")}
                type="Password"
            />
            <Button
                onClick={handleSubmit(onSubmit)}
                icon={faSignIn}
                tone="positive"
                weight="primary"
            />
        </Form>
    );
}
