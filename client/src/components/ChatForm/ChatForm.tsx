import { useCallback } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import { TextInput } from "../Inputs/TextInput";

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
            <TextInput labelText="Prompt" {...register("prompt")} />
            <Button onClick={handleSubmit(onSubmit)} icon={faArrowUp} />
        </form>
    );
}
