import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {HTTP_PROVIDERS} from 'angular2/http';
import {BlogListComponent} from "./blogList/blogList.component";
import {BlogAddComponent} from "./blogAdd/blogAdd.component";
import {BlogService} from "./core/blog.service";

@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, BlogService]
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