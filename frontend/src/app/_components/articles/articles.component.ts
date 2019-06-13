import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../_services/articles.service';
import { Article } from '../../_models/article';
import * as $ from 'jquery';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  article = new Article(0, '', '', '', '', '');
  articles: Article[] = [];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    let token = localStorage.getItem('token');
    this.articlesService.readArticlesOfUser(token)
    .subscribe(
      (res: Article[]) => {
        this.articles = res['data'];
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteArticle(id: string) {
    this.articlesService.delete(id)
      .subscribe(
        (res: Article[]) => {
          window.alert("Deleted successfully");
          this.getArticles();
        },
        err => {
          window.alert(err.error.error);
        }
      );
  }

  addArticle(f) {
    this.articlesService.store(this.article)
      .subscribe(
        (res: Article) => {
          window.alert("Article successfully created!");
          f.reset();
          let $element = $('#articleAlert');
          $element.hide();
          this.getArticles();
        },
        err => {
          let $element = $('#articleAlert');
          $element.html(err.error.error);
          $element.show();
        }
      );
  }


}
