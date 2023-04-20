import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCardFormComponent } from './add-card-form.component';

@NgModule({
  declarations: [AddCardFormComponent],
  imports: [CommonModule],
  exports: [AddCardFormComponent]
})
export class AddCardFormModule {}
