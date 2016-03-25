import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {BlogListComponent} from "./blogList/blogList.component";
import {BlogDetailComponent} from "./blogDetail/blogDetail.component";

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig(
        [
            {
                path: "/bloglist",
                name: "BlogList",
                component: BlogListComponent,
                useAsDefault: true
            },
            {
                path: "/blogdetail",
                name: "BlogDetail",
                component: BlogDetailComponent
            }
        ]
)

export class AppComponent {


}