export class ErrorMessage {
    constructor(
        public forControl: string,
        public forValidator: string,
        public text: string
    ) {    }
}

export const ShoppinglistFormErrorMessages = [
    new ErrorMessage('name', 'required', 'Ein Listenname muss angegeben werden'),
    new ErrorMessage('id', 'required', 'Es muss eine ID angegeben werden'),
    new ErrorMessage('due_date', 'required', 'Es muss ein Enddatum angegeben werden'),
    //new ErrorMessage('items', 'max', 'Maximal 10 Sterne erlaubt'),
    //new ErrorMessage('comments', 'max', 'Maximal 10 Sterne erlaubt'),
];