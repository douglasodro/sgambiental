import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {MiningZoneService} from './mining-zone.service'


@Component({
  selector: 'app-mining-zone',
  templateUrl: './mining-zone.component.html',
  styleUrls: ['./mining-zone.component.css']
})
export class MiningZoneComponent implements OnInit {

  searchForm;
  miningZones;

  constructor(
    private formBuilder: FormBuilder,
    private miningZoneService: MiningZoneService


  ) {


    this.searchForm = this.formBuilder.group({
      id : '',
      name: '',
      oreType:''
    });
  }

  ngOnInit(): void {
    this.miningZones = this.miningZoneService.getMiningZoneList();
    console.log('mining-zone', this.miningZones);
  }

}
