import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArticlesService } from '../../_services/articles.service';
import { Article } from '../../_models/article';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  article: Article;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService) { }

  ngOnInit() {
    let token = localStorage.getItem('token');
    let id = this.route.snapshot.paramMap.get('id');
    this.checkUpdateArticle(token, id);
    this.getArticle(id);
  }

  getArticle(id: string): void {
    this.articlesService.readArticle(id)
      .subscribe(
        (res: Article) => {
          this.article = res['data'];
        },
        err => {
          console.log(err);
        }
      );
  }

  updateArticle(f) {
    this.articlesService.update(this.article)
      .subscribe(
        (res: Article) => {
          let id = this.route.snapshot.paramMap.get('id');
          this.router.navigate(['/article', id]);
        },
        err => {
          window.alert(err.error.error);
        }
      );
  }

  checkUpdateArticle(token: string, id: string) {
    this.articlesService.checkUpdate(token, id)
      .subscribe(
        (res: any) => {
          if(!res)
            this.router.navigate(['/']);
        }
      );
  }

}
