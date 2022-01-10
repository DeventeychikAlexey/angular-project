import { NgModule } from '@angular/core';
import { FormFieldInputComponent } from './forms/components/form-field-input/form-field-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormFieldSelectComponent } from './forms/components/form-field-select/form-field-select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormFieldTextareaComponent } from './forms/components/form-field-textarea/form-field-textarea.component';
import { FormButtonComponent } from './forms/components/form-button/form-button.component';
import { MatButtonModule } from '@angular/material/button';
import { ProgressBarComponent } from './progress-bar/component/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsService } from './forms/services/forms.service';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CollectionComponent } from './collections/components/collection/collection.component';
import { CollectionsComponent } from './collections/components/collections/collections.component';
import { CollectionSectionComponent } from './collections/components/collection-section/collection-section.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CollectionsSectionComponent } from './collections/components/collections-section/collections-section.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { DialogService } from './dialog/services/dialog.service';
import { UppyComponent } from './uppy/uppy.component';
import { CollectionSectionCardFormComponent } from './collections/components/collection-section-card-form/collection-section-card-form.component';
import { CollectionSectionCardFormCreateComponent } from './collections/components/collection-section-card-form-create/collection-section-card-form-create.component';
import { CollectionSectionCardFormEditComponent } from './collections/components/collection-section-card-form-edit/collection-section-card-form-edit.component';
import { ItemComponent } from './items/components/item/item.component';
import { ItemsComponent } from './items/components/items/items.component';
import { ItemSectionComponent } from './items/components/item-section/item-section.component';
import { ItemsSectionComponent } from './items/components/items-section/items-section.component';
import { ButtonCreateComponent } from './button-create/button-create.component';
import { ItemSectionCardFormComponent } from './items/components/item-section-card-form/item-section-card-form.component';
import { ItemSectionCardFormCreateComponent } from './items/components/item-section-card-form-create/item-section-card-form-create.component';
import { ItemSectionCardFormEditComponent } from './items/components/item-section-card-form-edit/item-section-card-form-edit.component';
import { MatIconModule } from '@angular/material/icon';
import { ItemFieldsComponent } from './items/components/item-fields/item-fields.component';
import { ItemFieldsFormComponent } from './items/components/item-fields-form/item-fields-form.component';
import { CommentComponent } from './comment/comment.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  providers: [FormsService, DialogService],
  declarations: [
    FormFieldInputComponent,
    FormFieldSelectComponent,
    FormFieldTextareaComponent,
    FormButtonComponent,
    ProgressBarComponent,
    DialogComponent,
    CollectionComponent,
    CollectionsComponent,
    CollectionSectionComponent,
    CollectionsSectionComponent,
    ListComponent,
    SearchComponent,
    UppyComponent,
    CollectionSectionCardFormComponent,
    CollectionSectionCardFormCreateComponent,
    CollectionSectionCardFormEditComponent,
    ItemComponent,
    ItemsComponent,
    ItemSectionComponent,
    ItemsSectionComponent,
    ButtonCreateComponent,
    ItemSectionCardFormComponent,
    ItemSectionCardFormCreateComponent,
    ItemSectionCardFormEditComponent,
    ItemFieldsComponent,
    ItemFieldsFormComponent,
    CommentComponent,
  ],
  exports: [
    FormFieldInputComponent,
    FormFieldSelectComponent,
    FormFieldTextareaComponent,
    FormButtonComponent,
    ProgressBarComponent,
    DialogComponent,
    CollectionComponent,
    CollectionsComponent,
    CollectionSectionComponent,
    CollectionsSectionComponent,
    ListComponent,
    SearchComponent,
    CollectionSectionCardFormCreateComponent,
    CollectionSectionCardFormEditComponent,
    ItemComponent,
    ItemsComponent,
    ItemSectionComponent,
    ItemsSectionComponent,
    ButtonCreateComponent,
    ItemSectionCardFormComponent,
    ItemSectionCardFormCreateComponent,
    ItemSectionCardFormEditComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDialogModule,
    MatCardModule,
    RouterModule,
    MatIconModule,
    MatListModule,
  ],
})
export class SharedModule {}
