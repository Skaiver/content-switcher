import { Router } from './classes/Router.js';
import { Route } from './classes/Route.js';
import { RouteConfigJavascriptFile } from './classes/RouteConfigJavascriptFile.js';

let snippetsPath = "media/snippets/";
let router = new Router([], snippetsPath);

router.requestFile("_contact.html", function (data: string) {
    router._switchContent(data);
});

const config: RouteConfig = {
    "name": "sidebar",
    "linkedElement": document.querySelector("nav a[data-snippet='sidebar']"),
    "file": `${snippetsPath}_contact.html`,
    "cb": function (snippetContent: string) {
        document.querySelector('section.sidebar').innerHTML = snippetContent;
    },
    "js_files": [
        new RouteConfigJavascriptFile('events_js', 'media/js/gen/routes/events.js'),
    ]
};

const sidebarRoute = new Route(config);



router.addRoute(sidebarRoute);



document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    // @ts-ignore
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});