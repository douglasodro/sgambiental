import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {MiningZoneService} from './mining-zone.service'
import { MiningZone } from './mining-zone';


@Component({
  selector: 'app-mining-zone',
  templateUrl: './mining-zone.component.html',
  styleUrls: ['./mining-zone.component.css']
})
export class MiningZoneComponent implements OnInit {

  searchForm;
  miningZones: MiningZone[];

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
    this.miningZoneService.getMiningZoneList().subscribe((data: any): void => {
      this.miningZones = data;
    })

  }

  
  


}
