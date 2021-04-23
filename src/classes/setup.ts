namespace Aik {
    export class Setup {
        /** Run setup */
        public static RunSetup() {
            let templates: any = Aik.Data.LoadJSON(`${__dirname}/../../data/templates.json`);

            // Begin
            console.log(Aik.Output.GetRandomString(templates.first_run, 200));

            // Ask name
            console.log(Aik.Output.GetRandomString(templates.get_name, 200));
            let userName = this.getUserName();

            // Ask name while name not found in input string
            while(!userName) {
                console.log(Aik.Output.GetRandomString(templates.get_name_fail));
                userName = this.getUserName();
            }

            // Got user name
            console.log(Aik.Output.GetRandomString(templates.get_name_success, 200));
        }

        public static findName(line: string) : string {
            const availableNames = Aik.Data.LoadJSON(`${__dirname}/../../data/names.json`);
            line.trim().split(' ').forEach(word => {
                let found = availableNames.findIndex(item => require('natural').JaroWinklerDistance(item, word) > .85);
                if(found !== -1) {
                    return line.trim().split(' ')[found];
                }
            })
            return '';
        }

        public static getUserName() : string {
            return this.findName(Aik.Input.Line('Ваше имя'));
        }
    }
}