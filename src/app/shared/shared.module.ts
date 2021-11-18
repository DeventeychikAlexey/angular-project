import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';

import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { CollectionsComponent } from '@shared/components/collections/collections.component';
import { CollectionComponent } from '@shared/components/collection/collection.component';
import { FilterComponent } from '@shared/components/filter/filter.component';
import { DialogComponent } from '@shared/components/dialog/dialog.component';
import { FormFieldInputComponent } from '@shared/components/form-field-input/form-field-input.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ProgressBarComponent } from '@shared/components/progress-bar/progress-bar.component';
import { FormFieldTextareaComponent } from '@shared/components/form-field-textarea/form-field-textarea.component';
import { FormFieldSelectComponent } from './components/form-field-select/form-field-select.component';
import { UppyComponent } from '@shared/components/uppy/uppy.component';
import { CollectionsSectionComponent } from './components/collections-section/collections-section.component';
import { ItemComponent } from './components/item/item.component';
import { ListSectionComponent } from './components/list-section/list-section.component';
import { ItemsSectionComponent } from './components/items-section/items-section.component';
import { ItemsComponent } from './components/items/items.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CollectionsComponent,
    CollectionComponent,
    FilterComponent,
    DialogComponent,
    FormFieldInputComponent,
    ButtonComponent,
    ProgressBarComponent,
    FormFieldTextareaComponent,
    FormFieldSelectComponent,
    UppyComponent,
    CollectionsSectionComponent,
    ItemComponent,
    ListSectionComponent,
    ItemsSectionComponent,
    ItemsComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CollectionsComponent,
    FilterComponent,
    FormFieldInputComponent,
    ButtonComponent,
    ProgressBarComponent,
    FormFieldTextareaComponent,
    FormFieldSelectComponent,
    CollectionComponent,
    UppyComponent,
    CollectionsSectionComponent,
    ItemsSectionComponent,
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
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatSelectModule,
  ],
})
export class SharedModule {}
