import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-item',
  template: `
    <div class="article-item" *ngFor="let article of articlesIn">
      <span class="badge" style="text-align:center;color:yellow;font-weight:600">{{article.id}}</span><br>
      <span style="display: block; font-weight:bold; margin-bottom:5px;text-transform:uppercase">{{article.title}}</span><br>
      <span>{{article.body}}</span>
    </div>
  `,
  styles: [`
    .article-item {
      display: inline-block;
      width: 18%;
      min-height:230px;
      text-align:left;
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
