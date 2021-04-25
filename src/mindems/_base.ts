const path = require('path');

interface MindemStore {
    name: string,
    value: any
}

export default class Mindem {
    private local: MindemStore[];
    private templates: string[];

    /** Constructor */
    public constructor(name: string) {
        this.templates = require(path.resolve(name));
        
    }

    /** Function called before run */
    public PreLaunch(words: string[]) : boolean {
        return true;
    }

    /** Function called after preLaunch */
    public Launch(words: string[]) : any[] | null {
        return null;
    }
    
    /** Callback function (called after launch) */
    public PostLaunch(words: string[], response: string, postData: any[]) : boolean {
        return true;
    }

    /** Read output string and replace variables in it */
    public ProcessVariables(output: string) : string {
        Object.keys(this.local).forEach(variable => {
            output = output.replaceAll(`$${variable}`, this.local[variable]);
        });
        return output;
    }

    /** Work with local data */
    protected Data(key: string, value: any = null) : any {
        if(!value) {
            return this.local[key] || null;
        } else {
            this.local[key] = value;
            return true;
        }
    }
}