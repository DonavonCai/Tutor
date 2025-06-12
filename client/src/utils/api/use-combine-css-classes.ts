import { useMemo } from "react";

export const useCombineCssClasses = (
    ...classes: (string | string[] | undefined)[]
) => {
    const combinedClasses: string = useMemo(() => {
        return classes
            .flat() // Convert to a single array of strings | undefined
            .filter(Boolean) // Remove falsy values
            .join(" "); // Separate with spaces
    }, [classes]);
    return combinedClasses;
};
