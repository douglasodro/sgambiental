import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyAssetsRoutingModule } from './company-assets-routing.module';
import { MiningZoneComponent } from './mining-zone.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';



import {HttpClientModule} from '@angular/common/http';
import { MiningZoneCreateComponent } from './mining-zone-create.component';



@NgModule({
  declarations: [MiningZoneComponent, MiningZoneCreateComponent],
  imports: [
    CommonModule,
    CompanyAssetsRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CompanyAssetsModule { }
