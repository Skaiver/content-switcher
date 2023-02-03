import { Router } from './classes/Router.js';
import { Route } from './classes/Route.js';
import { RouteConfigJavascriptFile } from './classes/RouteConfigJavascriptFile.js';
let snippetsPath = "media/snippets/";
let router = new Router([], snippetsPath);
router.requestFile("_contact.html", function (data) {
    router._switchContent(data);
});
const config = {
    "name": "sidebar",
    "linkedElement": document.querySelector("nav a[data-snippet='sidebar']"),
    "file": `${snippetsPath}_contact.html`,
    "cb": function (snippetContent) {
        document.querySelector('section.sidebar').innerHTML = snippetContent;
    },
    "js_files": [
        new RouteConfigJavascriptFile('events_js', 'media/js/gen/routes/events.js'),
    ]
};
const sidebarRoute = new Route(config);
router.addRoute(sidebarRoute);
document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });
});
//# sourceMappingURL=index.js.map