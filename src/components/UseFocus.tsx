import { MutableRefObject, useRef } from 'react';

const useFocus = (): [any, () => void] => {
    const htmlElRef: MutableRefObject<any> = useRef(null);
    const setFocus = (): void => {
        if (htmlElRef.current != null) {
            htmlElRef.current.focus();
            htmlElRef.current.style = 'border: 10px solid red; Padding: 25px';
        }
    };

    return [htmlElRef, setFocus];
};

export default useFocus;
