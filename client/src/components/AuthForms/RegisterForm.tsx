import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { Button, Form, TextInput, useService } from "@utils";
import { ReactElement, useCallback } from "react";
import { useForm } from "react-hook-form";
import { createUser } from "../../services/create-user";
import { IRegisterForm } from "src/types/users";

export function RegisterForm(): ReactElement {
    //#region Form setup
    const { register, handleSubmit } = useForm<IRegisterForm>();
    //#endregion

    const onSuccess = useCallback(() => {}, []);

    const [executeRegister] = useService(createUser, onSuccess);

    //#region Event handlers
    const onSubmit = useCallback(
        (data: IRegisterForm) => {
            const { email, password } = data;
            executeRegister({
                email,
                password,
            });
        },
        [executeRegister]
    );
    //#endregion

    return (
        <Form>
            <TextInput labelText="Email" {...register("email")} />
            <TextInput
                labelText="Password"
                {...register("password")}
                type="Password"
            />
            <TextInput
                labelText="Confirm password"
                {...register("confirmPassword")}
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
