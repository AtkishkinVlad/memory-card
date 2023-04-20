import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from './card/card.module';
import { CardListModule } from './card-list/card-list.module';
import { AddCardFormModule } from './add-card-form/add-card-form.module';
import { MemoryCardComponent } from './memory-card.component';

@NgModule({
  declarations: [MemoryCardComponent],
  imports: [CommonModule, CardModule, CardListModule, AddCardFormModule],
  exports: [MemoryCardComponent]
})
export class MemoryCardModule {}
