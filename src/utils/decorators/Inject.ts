import { container } from './../Container';
/**
 * Decorator that marks a constructor parameter as a target for
 * Dependency Injection
 * @param target 
 */
export function Inject(target: string) {
    return function(constructor: any, property: PropertyKey): any {
        const descriptor = {
            get: () => container.resolve(target),
            enumerable: true,
            configurable: true,
        };
        Object.defineProperty(constructor, property, descriptor);
    };
}
