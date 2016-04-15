﻿import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {BlogService} from "../core/blog.service";
import {SELECT_DIRECTIVES} from 'ng2-select/ng2-select';

@Component({
    selector: "blog-list",
    templateUrl: "app/blogList/blogList.html",
    directives: [ROUTER_DIRECTIVES, SELECT_DIRECTIVES]
})

export class BlogListComponent {

    private value: any = {};
    private _disabledV: string = '0';
    private disabled: boolean = false;
    private items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
        'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
        'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
        'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
        'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
        'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
        'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
        'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
        'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];

    private get disabledV(): string {
        return this._disabledV;
    }

    private set disabledV(value: string) {
        this._disabledV = value;
        this.disabled = this._disabledV === '1';
    }

    private selected(value: any) {
        console.log('Selected value is: ', value);
    }

    private removed(value: any) {
        console.log('Removed value is: ', value);
    }

    private typed(value: any) {
        console.log('New search input: ', value);
    }

    private refreshValue(value: any) {
        this.value = value;
    }


    public blogs;

    constructor(private blogService: BlogService) {
        
    }

    ngOnInit() {
        this.blogService.getBlogs().then((blogs) => {
            this.blogs = blogs.json();
        });
    }

}