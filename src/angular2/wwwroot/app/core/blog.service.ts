import {Injectable} from "angular2/core";

@Injectable()

export class BlogService {
    public blogs = [{ Id: 1, Title: "a", Description: "b" }];

    getBlogs() {
        return this.blogs;
    }

    addBlog(blog) {
        blog.Id = Math.floor(Math.random() * (10000 - 0)) + 0;
        this.blogs.push(blog);
    }
}