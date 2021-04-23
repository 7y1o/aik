const fs = require('fs');

namespace Aik {

    export class Data {
        private mindems: any;
        private saved: any;

        /** Initialize assistant data holder */
        public constructor() {
            this.mindems = Aik.Data.LoadJSON(`${__dirname}/../../data/mindems.json`);
            this.saved = Aik.Data.LoadJSON(`${__dirname}/../../data/saved.json`);
        }

        /** Load JSON file from disk */
        public static LoadJSON(path: string) {
            let dataHolder;

            try {
                dataHolder = JSON.parse(
                    fs.readFileSync(path).toString('utf-8')
                );
            } catch (e) {
                Aik.Output.Show(`Упс! Не удалось загрузить файл ${path}`, Aik.OutType.ERROR);
            }

            return dataHolder;
        }

        /** Check if user runs assistant first time */
        public get FirstRun(): boolean {
            return !this.saved.name || !this.saved.search;
        }
    }
}
