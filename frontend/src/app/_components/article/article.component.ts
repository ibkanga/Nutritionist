import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ArticlesService } from '../../_services/articles.service';
import { Article } from '../../_models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article = new Article(0, '', '', '', '', '');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.getArticle(id);
  }

  getArticle(id: string): void {
    this.articlesService.readArticle(id).subscribe(
      (res: Article) => {
        this.article = res['data'];
      },
      err => {
        this.router.navigate(['/']);
      }
    );

  }

}
