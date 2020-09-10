/*
 * @Author: amine.souissia
* @Author.email: amine.swayssia@gmail.com
 * @Date: 2020-09-10 18:59:10
 * @Last Modified by: amine.souissia
 * @Last Modified time: 2020-09-10 18:59:53
 * Copyright (c) 2020 CodeLab360, Inc
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    CoreRoutingModule
  ],
  declarations: [

  ],
  providers: [
  ],
})
export class CoreModule { }
