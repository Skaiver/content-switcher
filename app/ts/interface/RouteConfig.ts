interface RouteConfig {
    name: string;
    file: string;
    js_files: RouteConfigJavascriptFiles[];
    cb: Function;
    linkedElement: HTMLElement;
}