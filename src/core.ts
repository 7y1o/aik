const ansi = require('ansi-colors');

namespace Aik {
    class Core {
        private data: Aik.Data;

        /** Initialize assistant */
        constructor() {
            this.data = new Aik.Data();

            // Check if
            if(this.data.FirstRun) {
                //
            }
        }
    }
}

module.exports = Aik;