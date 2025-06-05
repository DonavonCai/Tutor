import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

import "./Button.scss";

interface IProps {
    icon: IconDefinition;
    onClick(): void;
    flavor?: "positive" | "neutral";
}

export const Button = memo((props: IProps) => {
    const { icon, onClick, flavor } = props;

    return (
        <button className={"Button"} onClick={onClick}>
            <FontAwesomeIcon
                icon={icon}
                color={flavor === "positive" ? "green" : "yellow"}
            />
        </button>
    );
});
