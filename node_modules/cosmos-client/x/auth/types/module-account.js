export class ModuleAccount {
    /**
     *
     * @param base_account
     * @param name
     * @param permissions
     */
    constructor(base_account, name, permissions) {
        this.base_account = base_account;
        this.name = name;
        this.permissions = permissions;
    }
    /**
     *
     * @param value
     */
    static fromJSON(value) {
        return new ModuleAccount(value.base_account, value.name, value.permissions);
    }
}
