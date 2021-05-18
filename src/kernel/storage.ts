import * as fs from 'fs';
import * as path from 'path';
import * as u from './utils';

namespace AssistantKernel {
    /** Root storage interface */
    export interface StorageRoot {
        keys: any[]
        data: any[]
    }

    /** Storage for saved data */
    class Storage {
        /** Storage holder */
        private db: StorageRoot;

        /**
         * Initializer for storage data
         * @param {string} file Path to file with data
         */
        public constructor(file: string) {
            try {
                this.db = JSON.parse(fs.readFileSync(file, 'utf-8'));
            } catch (e) {
                //
            }
        }
    }

    // Singleton storage
    export let storage = new Storage('./store.json');
}