import { useLayoutEffect, useState } from 'react';

export function useComponentSize(ref: React.RefObject<HTMLDivElement>) {
    const [size, setSize] = useState({ width: 0, height: 0 });
    useLayoutEffect(() => {
        const updateSize = () => {
            if (!ref.current) {
                return;
            }
            const size = ref.current.getBoundingClientRect();
            setSize(size);
        };
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, [ref]);
    return size;
}
