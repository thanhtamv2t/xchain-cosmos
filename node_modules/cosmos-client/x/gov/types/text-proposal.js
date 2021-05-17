export class TextProposal {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
    static fromJSON(value) {
        return new TextProposal(value.title, value.description);
    }
}
