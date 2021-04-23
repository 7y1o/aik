const ansi = require('ansi-colors');

namespace Aik {
    export class Core {
        private data: Aik.Data;

        /** Initialize assistant */
        constructor() {
            this.data = new Aik.Data();

            // Check if user runs assistant program first time
            if(this.data.FirstRun) {
                Aik.Setup.RunSetup();
            }

            // After checks, run assistant
            this.RunAssistant();
        }

        /** Run main loop */
        public RunAssistant() {
            let doneInput: boolean = false;
            let inputResult: string = '';

            while (true) {
                doneInput = false;
                inputResult = '';

                // Prepare input
                let {Input} = require('enquirer');
                let getInput = new Input({
                    message: 'Вы'
                });

                // Run input
                getInput.run().then(result => {
                    inputResult = result;
                    doneInput = true;
                });
                require('deasync').loopWhile(() => !doneInput);

                // If user input is empty, pass
                if(!inputResult) continue;

                // Else process it
                this.CheckInput(inputResult);
            }
        }

        /** Check input */
        private CheckInput(line: string) : string {
            // TODO: Get input, tokenize it and find needed mindem for execute
            return '';
        }

        /** Replace variables */
        private ProcessLine(line: string) : string {
            // TODO: Get string line and replace variables in it
            return '';
        }
    }
}