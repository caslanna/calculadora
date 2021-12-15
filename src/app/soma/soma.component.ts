import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.scss']
})
export class SomaComponent implements OnInit {
  num1:any
  num2:any
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.num1 = this.activatedRoute.snapshot.paramMap.get('num1');
    this.num2 = this.activatedRoute.snapshot.paramMap.get('num2');
  }

}
