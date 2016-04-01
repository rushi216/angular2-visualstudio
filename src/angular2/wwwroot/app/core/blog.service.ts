import {Injectable} from "angular2/core";
import {Http, Headers, RequestOptions} from "angular2/http";


@Injectable()

export class BlogService {

    private apiUrl = "api/blogs";

    constructor(private http: Http) {
    }

    getBlogs() {
        return this.http.get(this.apiUrl).toPromise();
    }

    addBlog(blog) {
        let body = JSON.stringify(blog);
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiUrl, body, options).toPromise();
    }
}