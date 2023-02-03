export class Route {
    constructor(config) {
        this._name = config.name;
        this._file = config.file;
        this._js_files = config.js_files;
        this._cb = config.cb;
        this._linkedElement = config.linkedElement;
    }
    get name() {
        return this._name;
    }
    get file() {
        return this._file;
    }
    get js_files() {
        return this._js_files;
    }
    get cb() {
        return this._cb;
    }
    get linkedElement() {
        return this._linkedElement;
    }
}
//# sourceMappingURL=Route.js.map