
class ProviderNotFoundException extends Error {
    constructor(message: string){
        super(message);
    }
}

export interface IContainerProvider {
    className: string;
    useValue: any;
}

/**
 * Class that provide and resolve the classes for
 * Dependency Injection
 */
class Container {

    private providers: { [key: string]: any } = {}

    public provide(details: IContainerProvider): void 
    {
        const className = this.capitalize(details.className);
        this.providers[className] = details.useValue;
    }

    /** @throws {ProviderNotFoundException} */
    public resolve(target: string): {}
    {   
        if(!this.hasProvider(target)) throw new ProviderNotFoundException(`No provider found for ${target}!`); 
        return this.providers[target];
    }

    public hasProvider(className: string): boolean 
    {
        return this.providers.hasOwnProperty(className);
    }

    private capitalize(str: string): string 
    {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

}


export const container = new Container();