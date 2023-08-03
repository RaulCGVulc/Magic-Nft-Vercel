import { useCallback } from 'react';

export default function useGuardedCallback(cb, dependencies) {
    return useCallback(
        async (...args) => {
            try {
                return await cb(...args);
            } catch {}
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [...(dependencies || [])]
    );
}