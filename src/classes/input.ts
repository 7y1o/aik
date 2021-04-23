namespace Aik {
    export class Input {
        /** Get simple line from user */
        public static Line(question: string) : string {
            let done = false;
            let data = null;

            // Prepare
            let {Input} = require('enquirer');
            let input = new Input({
                message: question
            });

            // Run
            try {
                input.run().then(result => {
                    data = result;
                    done = true;
                });
                require('deasync').loopWhile(() => !done);
            } catch (e) {
                return '';
            }
            return data;
        }

        /** Get choice of list from user */
        public static Choice(question: string, variants: string[]) : string {
            let done = false;
            let data = null;

            // Prepare
            let {Select} = require('enquirer');
            let input = new Select({
                message: question,
                choices: variants
            });

            // Run
            try {
                input.run().then(result => {
                    data = result;
                    done = true;
                });
                require('deasync').loopWhile(() => !done);
            } catch (e) {
                return '';
            }
            return data;
        }

        /** Get boolean from user */
        public static Toggle(question: string, trueVariant: string, falseVariant: string) : string {
            let done = false;
            let data = null;

            // Prepare
            let {Toggle} = require('enquirer');
            let input = new Toggle({
                message: question,
                enabled: trueVariant,
                disabled: falseVariant
            });

            // Run
            try {
                input.run().then(result => {
                    data = result;
                    done = true;
                });
                require('deasync').loopWhile(() => !done);
            } catch (e) {
                return '';
            }
            return data;
        }
    }
}