import { createContext, useContext } from 'react';

type NavigationContextProps =
    | {
          activeRoute: string;
          setActiveRoute: (route: string) => void;
      }
    | undefined;
const NavigationContext = createContext<NavigationContextProps>(undefined);

export default NavigationContext;

export function useActiveRoute(): [string, (route: string) => void] {
    const context = useContext(NavigationContext);
    if (context) {
        return [context.activeRoute, context.setActiveRoute];
    }
    throw new Error('component should be wrapped inside a context provider');
}
