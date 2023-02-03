export class Router {
    constructor(routes, snippetsPath = "web/media/snippets") {
        this.snippetsPath = snippetsPath;
        this.isLoading = false;
        this.routes = routes;
    }
    requestFile(filename, cb, pathToFileDir = this.snippetsPath) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", pathToFileDir + filename, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    const responseText = rawFile.responseText;
                    cb(responseText);
                    return;
                }
            }
        };
        rawFile.send();
        return "not real response";
    }
    addRoute(route) {
        if (route.linkedElement) {
            route.linkedElement.addEventListener('click', (e) => {
                this.navigate(route);
            });
            this.routes.push(route);
        }
    }
    navigate(route) {
        this.requestFile(route.file, this._switchContent);
        if (route.js_files) {
        }
    }
    toggleLoading() {
        let node = document.querySelector('.loader');
        if (!node) {
            throw new Error("no loader found on website.");
        }
        if (this.isLoading) {
            node.style.display = "none";
        }
        else {
            node.style.display = "block";
        }
        this.isLoading = !this.isLoading;
    }
    _switchContent(newContent) {
        this.toggleLoading();
        setTimeout(() => {
            document.querySelector('main').innerHTML = newContent;
            this.toggleLoading();
        }, 1000 * 3);
    }
}
//# sourceMappingURL=Router.js.map