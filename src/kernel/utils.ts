import * as chalk from "chalk";

namespace AssistantKernel {
    /** Output colors */
    export enum OutColor {
        GREEN_FG,
        YELLOW_FG,
        RED_FG,
        WHITE_FG,
        GRAY_FG,
        WHITE_BG
    }

    /** Base utilities class */
    export class Utils {
        /**
         * Output text to console
         * @param {string} text Text to show
         * @param {OutColor} color Color of the text
         */
        public static out(text: string, color: OutColor) {
            switch (color) {
                case AssistantKernel.OutColor.GRAY_FG: {
                    console.log(chalk.gray(text));
                    break;
                }

                case AssistantKernel.OutColor.GREEN_FG: {
                    console.log(chalk.greenBright(text));
                    break;
                }

                case AssistantKernel.OutColor.RED_FG: {
                    console.log(chalk.redBright(text));
                    break;
                }

                case AssistantKernel.OutColor.WHITE_FG: {
                    console.log(chalk.whiteBright(text));
                    break;
                }

                case AssistantKernel.OutColor.YELLOW_FG: {
                    console.log(chalk.yellowBright(text));
                    break;
                }

                case AssistantKernel.OutColor.WHITE_BG: {
                    console.log(chalk.bgWhite(text));
                    break;
                }
            }
        }
    }
}