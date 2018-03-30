import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  postsList: any = [];

  form = new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    textbody: new FormControl('')
  });
  constructor() { }

  ngOnInit() {

  }

  doSavePost(myform: any) {
    console.log('Form submitted : ', myform.value);
    // TODO
    // save the posts in array postsList
    // edit the postsLists on browser
  }

}
