import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule } from '@circlon/angular-tree-component';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from 'app/app-material.module';
import { CommonDirectivesModule } from 'app/directives/common/common-directives.module';
import { TooltipModule } from 'app/modules/tooltip/tooltip.module';
import { IxCheckboxComponent } from 'app/pages/common/ix-forms/components/ix-checkbox/ix-checkbox.component';
import { IxChipsComponent } from 'app/pages/common/ix-forms/components/ix-chips/ix-chips.component';
import { IxComboboxComponent } from 'app/pages/common/ix-forms/components/ix-combobox/ix-combobox.component';
import { IxExplorerComponent } from 'app/pages/common/ix-forms/components/ix-explorer/ix-explorer.component';
import { IxFieldsetComponent } from 'app/pages/common/ix-forms/components/ix-fieldset/ix-fieldset.component';
import { IxFormErrorsComponent } from 'app/pages/common/ix-forms/components/ix-form-errors/ix-form-errors.component';
import { IxInputComponent } from 'app/pages/common/ix-forms/components/ix-input/ix-input.component';
import { IxModalComponent } from 'app/pages/common/ix-forms/components/ix-modal/ix-modal.component';
import { IxModalDirective } from 'app/pages/common/ix-forms/components/ix-modal/ix-modal.directive';
import { IxSelectComponent } from 'app/pages/common/ix-forms/components/ix-select/ix-select.component';
import { IxTextareaComponent } from 'app/pages/common/ix-forms/components/ix-textarea/ix-textarea.component';
import { IxUserComboboxComponent } from 'app/pages/common/ix-forms/components/ix-user-combobox/ix-user-combobox.component';
import { IxFormatterService } from 'app/pages/common/ix-forms/services/ix-formatter.service';
import { EnclosureModule } from 'app/pages/system/view-enclosure/enclosure.module';
import { IxModalHeaderComponent } from './components/ix-modal/components/ix-modal-header/ix-modal-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MarkdownModule.forRoot(),
    FlexLayoutModule,
    EnclosureModule,
    CommonDirectivesModule,
    TooltipModule,
    TranslateModule,
    TreeModule,
  ],
  declarations: [
    IxInputComponent,
    IxSelectComponent,
    IxComboboxComponent,
    IxFieldsetComponent,
    IxModalComponent,
    IxModalDirective,
    IxModalHeaderComponent,
    IxCheckboxComponent,
    IxFormErrorsComponent,
    IxUserComboboxComponent,
    IxTextareaComponent,
    IxChipsComponent,
    IxExplorerComponent,
  ],
  exports: [
    IxInputComponent,
    IxSelectComponent,
    IxComboboxComponent,
    IxModalComponent,
    IxModalHeaderComponent,
    IxFieldsetComponent,
    IxModalDirective,
    IxUserComboboxComponent,
    IxCheckboxComponent,
    IxFormErrorsComponent,
    IxTextareaComponent,
    IxChipsComponent,
    IxExplorerComponent,
  ],
  providers: [
    IxFormatterService,
  ],
})
export class IxFormsModule {}
