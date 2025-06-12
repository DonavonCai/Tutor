import { useCallback } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Button, TextAreaInput } from "@utils";
import { useForm } from "react-hook-form";

import "./ChatForm.scss";

interface IChatInput {
    prompt: string;
}

export function ChatForm() {
    //#region Form setup
    const { register, handleSubmit } = useForm<IChatInput>();
    //#endregion

    //#region Event handlers
    const onSubmit = useCallback((data: IChatInput) => {
        console.log(data);
    }, []);
    //#endregion

    return (
        <form method="dialog" className="ChatForm">
            <TextAreaInput labelText="Prompt" {...register("prompt")} />
            <Button onClick={handleSubmit(onSubmit)} icon={faArrowUp} />
        </form>
    );
}
