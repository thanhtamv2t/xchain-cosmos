import { Msg } from "../../../types/msg";
/**
 *
 */
export class MsgMultiSend extends Msg {
    /**
     *
     * @param inputs
     * @param outputs
     */
    constructor(inputs, outputs) {
        super();
        this.inputs = inputs;
        this.outputs = outputs;
    }
    static fromJSON(value) {
        return new MsgMultiSend(value.inputs, value.outputs);
    }
}
