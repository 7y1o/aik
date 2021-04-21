const fs = require('fs');
const out = require(`${__dirname}/output`);

namespace Aik {
    class Data {
        private dictionary: object;
        private variables: object;
        private templates: object;
        private mindems: object;
    
        /** Init data holders */
        public constructor() {
            this.dictionary = this.loadJSON(`${__dirname}/../../data/dictionary.json`);
        }
    
        /** Load data from disk */
        private loadJSON(path: string) : object {
            let gotData: object;
            
            try {
                gotData = JSON.parse(
                    fs.readFileSync(path).toString('utf-8')
                );
            } catch(err) {
                out.Output.show(`мне не удалось получить данные (файл ${path})`);
            }

            return gotData;
        }
    }
}

module.exports = Aik;