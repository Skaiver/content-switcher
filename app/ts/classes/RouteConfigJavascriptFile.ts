export class RouteConfigJavascriptFile implements RouteConfigJavascriptFiles{
    handle: string;
    path: string;
    priority: number;

    constructor(handle:string, path:string, priority=10) {
        this.handle = handle;
        this.path = path;
        this.priority = priority;
    }

}