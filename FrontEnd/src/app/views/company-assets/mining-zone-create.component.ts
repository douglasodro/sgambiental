import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mining-zone-create',
  templateUrl: './mining-zone-create.component.html',
  styleUrls: ['./mining-zone-create.component.css']
})
export class MiningZoneCreateComponent implements OnInit {

  checkoutForm;

  constructor(
    private formBuilder: FormBuilder

  ) {


    this.checkoutForm = this.formBuilder.group({
      id: '',
      name: '',
      location: '',
      oreType: '',
      mining: '',
      area: '',
      processType: ''

      
    });
  
  }

  ngOnInit(): void {
  }

}
