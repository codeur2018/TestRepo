import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ArticleComponent } from './article/article.component';

// services


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
