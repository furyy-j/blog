import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {FbCreateResponse, Post} from "../../shared/interfaces";
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})

export class PostService{
    constructor(private http:HttpClient) {
    }

    create(post:Post): Observable<Post>{

        return this.http.post(`${environment.fbDbUrl}/posts.json`,post)
            .pipe(map((response: FbCreateResponse)=>{
                return  {
                    ...post,
                    id: response.name,
                    date: new Date(post.date)
                }
            }))
    }
}
