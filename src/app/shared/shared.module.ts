import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RoutesService } from '@core/services/routes/routes.service';
import { FooterComponent } from './components/footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { CollectionsComponent } from '@shared/components/collections/collections.component';
import { MatCardModule } from '@angular/material/card';
import { CollectionComponent } from '@shared/components/collection/collection.component';
import { FilterComponent } from './components/filter/filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CollectionsComponent,
    CollectionComponent,
    FilterComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CollectionsComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [RoutesService],
})
export class SharedModule {}
