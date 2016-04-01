import {Component} from "angular2/core";
import {BlogService} from "../core/blog.service";
import {Router} from "angular2/router";

@Component({
    selector: "blog-add",
    templateUrl: "app/blogAdd/blogAdd.html"
})

export class BlogAddComponent {
    public blog = {};

    constructor(private blogService: BlogService, private router: Router) {
        
    }

    addBlog(blog) {
        this.blogService.addBlog(blog).then(() => {
            this.router.navigate(["BlogList"]);
        });
        
    }

}