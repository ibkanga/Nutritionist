import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './_services/authguard.service';

import { HomeComponent } from './_components/home/home.component';
import { BlogComponent } from './_components/blog/blog.component';
import { ArticleComponent } from './_components/article/article.component';
import { ContactComponent } from './_components/contact/contact.component';
import { PagenotfoundComponent } from './_components/pagenotfound/pagenotfound.component';
import { LoginRegisterComponent } from './_components/login-register/login-register.component';
import { UpdateArticleComponent } from './_components/update-article/update-article.component';
import { ArticlesComponent } from './_components/articles/articles.component';

const routes: Routes = [
  {
    path: '',
	  component: HomeComponent
  },
  {
	  path: 'blog',
	  component: BlogComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    canActivate: [AuthGuardService]
  },
  {
	  path: 'article/:id',
	  component: ArticleComponent
  },
  {
	  path: 'update/:id',
	  component: UpdateArticleComponent,
    canActivate: [AuthGuardService]
  },
  {
	  path: 'contact',
	  component: ContactComponent
  },
  {
	  path: 'login',
	  component: LoginRegisterComponent
  },
  {
	  path: '**',
	  component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
