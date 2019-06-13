import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../_services/articles.service';
import { Article } from '../../_models/article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles: Article[];
  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articlesService.readArticles().subscribe(
    (res: Article[]) => {
      this.articles = res['data'];
    },
    err => {
      console.log(err);
    }
  );

  }


}
