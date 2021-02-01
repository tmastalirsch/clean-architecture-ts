import { container } from './../Container';
/**
 * Decorator that marks a class as a provider.
 * Providers can be injected into other classes via constructor parameter injection.
 */
export function Injectable(): ClassDecorator { 
    return function (constructor: any) {
        container.provide({className: constructor.name, useValue: constructor});
    }
}