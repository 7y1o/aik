const ansi = require('ansi-colors');

namespace Aik {
    enum OutType {
        LINE,
        ERROR
    }

    class Output {
        /** Output simple line */
        public static show(message: string, type: OutType) {
            console.log(`${ansi.greenBright('Айк')}: ${type === OutType.ERROR ? ansi.redBright(message) : message}`);
        }
    }
}

module.exports = Aik;