import { createContext } from 'react';

export const CursorContext = createContext({
    onLinkEntered: () => {},
    onLinkExited: () => {}
});