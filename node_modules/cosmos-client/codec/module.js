export const maps = {
    type: new Map(),
    fromJSON: {},
};
export function toJSONString(value) {
    return JSON.stringify(value, (key, value) => {
        const type = maps.type.get(value === null || value === void 0 ? void 0 : value.constructor);
        if (type) {
            return {
                type,
                value: value.toJSONInCodec ? value.toJSONInCodec() : Object.assign({}, value),
            };
        }
        return value;
    });
}
export function fromJSONString(json) {
    return JSON.parse(json, (key, value) => {
        const _type = value === null || value === void 0 ? void 0 : value.type;
        const _value = value === null || value === void 0 ? void 0 : value.value;
        if (_type && maps.fromJSON[_type]) {
            return maps.fromJSON[_type](_value);
        }
        if (_type && _value && Object.keys(value).length == 2) {
            return new AminoWrapping(_type, _value);
        }
        return value;
    });
}
export function registerCodec(type, constructor, fromJSON) {
    maps.type.set(constructor, type);
    maps.fromJSON[type] = fromJSON;
}
export class AminoWrapping {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}
