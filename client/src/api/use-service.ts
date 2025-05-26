import { useCallback, useState } from "react";

/**
 * @function useService
 * @description Custom hook for setting up async services in React components.
 * @param service The service to run.
 * @param onSuccess A callback function to run after the service returns successfully.
 * @returns A callback function to execute the service and a loading flag.
 */

export function useService<Response, Request = void>(
    service: (request: Request) => Promise<Response>,
    onSuccess?: (arg: Response) => void
): [(request: Request) => void, boolean] {
    // Track loading status
    const [loading, setLoading] = useState<boolean>(false);

    // Create a callback for the service
    const callService = useCallback(
        async (request: Request) => {
            setLoading(true);
            const result = await service(request);
            setLoading(false);

            if (onSuccess) {
                onSuccess(result);
            }
        },
        [onSuccess, service]
    );

    return [callService, loading];
}
