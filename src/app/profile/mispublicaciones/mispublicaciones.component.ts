import { Component, OnInit, Input } from '@angular/core';
import { MisHistorietasService } from '../../historietas/mishistorietas/mishistorietas.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-mispublicaciones',
  templateUrl: './mispublicaciones.component.html',
  styleUrls: ['./mispublicaciones.component.css']
})
export class MispublicacionesComponent implements OnInit {
  @Input() historieta: Post;
  misHistorietas: Post[];

  constructor(private misHistorietasService: MisHistorietasService) { }

  ngOnInit() {
    this.misHistorietasService.getMisHistorietas().subscribe(historietas => this.misHistorietas = historietas);

  }

}
