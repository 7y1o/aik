namespace Aik {
    export enum OutType {
        TEXT,
        ERROR
    }

    export class Output {
        public static Show(message: string, type: OutType = Aik.OutType.TEXT) {
            switch (type) {
                case Aik.OutType.TEXT: {
                    console.log(`[${ansi.cyan('Айк')}]: ${message}`);
                    break;
                }

                case Aik.OutType.ERROR: {
                    console.log(`[${ansi.cyan('Айк')}]: ${ansi.redBright(message)}`);
                    process.exit(0);
                }
            }
        }
    }
}