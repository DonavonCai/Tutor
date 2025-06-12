import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import { useCombineCssClasses } from "@utils";

import "./Button.scss";

interface IProps {
    onClick(): void;
    icon: IconDefinition;
    tone?: "positive" | "neutral" | "negative";
    weight?: "primary" | "secondary";
}

export const Button = memo((props: IProps) => {
    const { icon, onClick, tone, weight } = props;

    const classes = useCombineCssClasses(
        "Button",
        tone !== undefined ? [tone] : undefined,
        weight !== undefined ? [weight] : undefined
    );

    return (
        <button className={classes} onClick={onClick}>
            <FontAwesomeIcon icon={icon} color={tone} />
        </button>
    );
});
