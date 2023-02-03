import { Route } from './Route.js';


export class Router {
    snippetsPath: string;
    isLoading: boolean;
    routes: Route[];

    constructor(routes: Route[], snippetsPath="web/media/snippets") {
        this.snippetsPath = snippetsPath;
        this.isLoading = false;
        this.routes = routes;
    }

    requestFile(filename: string, cb: Function, pathToFileDir:string=this.snippetsPath){
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET",  pathToFileDir + filename, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    const responseText = rawFile.responseText;
                    cb(responseText);
                    return 
                }
            }
        }
        rawFile.send();
        return "not real response";
    }

    addRoute(route: Route) {
        if(route.linkedElement){
            route.linkedElement.addEventListener('click', (e) => {
                this.navigate(route);
            });
        this.routes.push(route);
        }
    }

    navigate(route: Route){
        this.requestFile(route.file, this._switchContent);

        // load js dependencies
        if(route.js_files) {

        }
    }

    toggleLoading() {
        let node = document.querySelector('.loader');
        if (!node) {
            throw new Error("no loader found on website.");
        }
        if (this.isLoading) {
            // magic to show loading animation
            (node as HTMLElement).style.display = "none";
        } else {
            // magic to remove loading animation
            (node as HTMLElement).style.display = "block";
        }

        this.isLoading = !this.isLoading;
    }

    _switchContent(newContent: string) {
        this.toggleLoading();
        setTimeout(() => {
            document.querySelector('main').innerHTML = newContent;
            this.toggleLoading();
        }, 1000 * 3);

    }
}
