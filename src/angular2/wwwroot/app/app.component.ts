import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {BlogListComponent} from "./blogList/blogList.component";
import {BlogAddComponent} from "./blogAdd/blogAdd.component";
import {BlogService} from "./core/blog.service";

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, BlogService]
})

@RouteConfig(
        [
            {
                path: "/",
                name: "BlogList",
                component: BlogListComponent,
                useAsDefault: true
            },
            {
                path: "/blogadd",
                name: "BlogAdd",
                component: BlogAddComponent
            }
        ]
)

export class AppComponent {


}