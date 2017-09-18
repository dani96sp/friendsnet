import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Post } from '../../models/post.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Person } from '../../models/person.model';
import { MisHistorietasService } from '../mishistorietas/mishistorietas.service';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})

export class PublicarComponent implements OnInit {


  posts: Post[];
  person: Person;
  form: FormGroup;
  post = new FormControl('', Validators.required);

  // tslint:disable-next-line:max-line-length
  constructor(private misHistorietasService: MisHistorietasService, fb: FormBuilder, private personService: PersonService, private cd: ChangeDetectorRef) {
    this.form = fb.group({
      'post': this.post
    });
   }

  ngOnInit() {
    this.misHistorietasService.getHistorietas().subscribe(posts => this.posts = posts);
    this.personService.getPerson().subscribe(person => this.person = person);
  }

  postPost() {
    // tslint:disable:prefer-const
    let post: Post = new Post();
    post.person = this.person;
    post.publish = new Date();
    post.text = this.form.value.post;
    this.misHistorietasService.addHistorieta(post).subscribe(posts => {
      this.posts = posts;
    });
  }

}
