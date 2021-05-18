namespace AssistantKernel {
    /** Assistant mindem interface */
    export interface MindemManifest {
        key: string,
        name: string,
        description: string,
        version: number,
        examples: string[]
    }

    /** Mindem data holder and executor */
    export class Mindem {

        /** Unique mindem key */
        private key: string;

        /** Name of the mindem */
        private name: string;

        /** Mindem description */
        private description: string;

        /** Version of the mindem (aka 0.1, 0.2 and etc) */
        private version: number;

        /** Examples for train assistant */
        private examples: string[];
    }
}