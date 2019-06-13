import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from  'rxjs';
import { Article } from  '../_models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  SERVER = "http://localhost/Nutritionist/backend";

  constructor(private http: HttpClient) { }

  readArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(`${this.SERVER}/getArticles.php`);
  }

  readArticle(id: string): Observable<Article>{
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<Article>(`${this.SERVER}/getArticle.php`, {params: params});
  }

  readArticlesOfUser(token: string): Observable<Article[]>{
    const params = new HttpParams().set('token', token.toString());
    return this.http.get<Article[]>(`${this.SERVER}/getArticlesByUser.php`, {params: params});
  }

  delete(id: string) {
    const params = new HttpParams().set('id', id.toString());
    return this.http.delete(`${this.SERVER}/deleteArticle.php`, { params: params});
  }

  update(article: Article): Observable<Article> {
    let token = localStorage.getItem('token').toString();
    return this.http.put<Article>(`${this.SERVER}/updateArticle.php`, { article, token });
  }

  checkUpdate(token: string, id: string) {
    const params = new HttpParams().set('token', token.toString()).set('id', id.toString());
    return this.http.get(`${this.SERVER}/checkUpdateArticle.php`, { params: params });
  }

  store(article: Article): Observable<Article> {
    let token = localStorage.getItem('token').toString();
    return this.http.post<Article>(`${this.SERVER}/addArticle.php`, { article, token });
  }

}
