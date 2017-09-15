import { Component, OnInit, Input } from '@angular/core';
import { MisHistorietasService } from './mishistorietas.service';
import { Post } from '../../models/post.model';


@Component({
  selector: 'app-mishistorietas',
  templateUrl: './mishistorietas.component.html',
  styleUrls: ['./mishistorietas.component.css']
})
export class MishistorietasComponent implements OnInit {
  @Input() historieta: Post;
  misHistorietas: Post[];

  constructor(private misHistorietasService: MisHistorietasService) { }

  ngOnInit() {
    this.misHistorietasService.getHistorietas().subscribe(historietas => this.misHistorietas = historietas);

  }

}
