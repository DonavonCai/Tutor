import { useMemo } from "react";

export const useCombineCssClasses = (
    baseClass: string,
    additionalClasses: string[] | undefined
) => {
    const combinedClasses: string = useMemo(() => {
        return additionalClasses
            ? baseClass + " " + additionalClasses.join(" ")
            : baseClass;
    }, [additionalClasses, baseClass]);
    return combinedClasses;
};
