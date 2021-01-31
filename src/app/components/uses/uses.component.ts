import { Component, OnInit } from '@angular/core';
import { uses } from '../../data/uses';
import { UsesType } from '../../models/uses.model';
@Component({
  selector: 'app-uses',
  templateUrl: './uses.component.html',
  styleUrls: ['./uses.component.scss'],
})
export class UsesComponent implements OnInit {
  uses: UsesType[] = uses;
  constructor() {}

  ngOnInit(): void {}
}
