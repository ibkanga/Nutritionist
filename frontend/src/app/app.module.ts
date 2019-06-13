import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './_services/authguard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './_components/home/home.component';
import { FooterComponent } from './_components/footer/footer.component';
import { MenuComponent } from './_components/menu/menu.component';
import { PagenotfoundComponent } from './_components/pagenotfound/pagenotfound.component';
import { ContactComponent } from './_components/contact/contact.component';
import { BlogComponent } from './_components/blog/blog.component';
import { ArticleComponent } from './_components/article/article.component';
import { LoginRegisterComponent } from './_components/login-register/login-register.component';
import { UpdateArticleComponent } from './_components/update-article/update-article.component';
import { ArticlesComponent } from './_components/articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    PagenotfoundComponent,
    ContactComponent,
    BlogComponent,
    ArticleComponent,
    LoginRegisterComponent,
    UpdateArticleComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
