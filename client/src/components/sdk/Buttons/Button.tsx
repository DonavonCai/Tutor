import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

interface IProps {
    icon: IconDefinition;
    onClick(): void;
}

export const Button = memo((props: IProps) => {
    const { icon, onClick } = props;
    return (
        <button onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
});
