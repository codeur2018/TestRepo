import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-item',
  template: `
    <div class="article-item" *ngFor="let article of articlesIn">
      <span class="badge">{{article.id}}</span><br>
      <span>{{article.author}}</span><br>
      <span>{{article.title}}</span><br>
      <span>{{article.body}}</span>
    </div>
  `,
  styles: [`
    .article-item {
      display: inline-block;
      width: 18%;
      height: auto;
      text-align:justify;
    }
    .badge {
      display: block;
      width: 36px
      height: 36px;
      border-radius: 18px;
      color: #fff;
      background-color: skyblue;
      box-shadow: 2px 4px #ccc;
    }
  `]
})
export class ProfileItemComponent {
  @Input() articlesIn;
}
