import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'app/app-material.module';
import { CardComponent } from 'app/core/components/card/card.component';
import { CopyButtonComponent } from 'app/core/components/copy-btn/copy-btn.component';
import { Display } from 'app/core/components/display/display.component';
import { PageComponent } from 'app/core/components/page/page.component';
import { ViewButtonComponent } from 'app/core/components/view-button/view-button.component';
import { ViewChartAreaComponent } from 'app/core/components/view-chart-area/view-chart-area.component';
import { ViewChartBarComponent } from 'app/core/components/view-chart-bar/view-chart-bar.component';
import { ViewChartDonutComponent } from 'app/core/components/view-chart-donut/view-chart-donut.component';
import { ViewChartGaugeComponent } from 'app/core/components/view-chart-gauge/view-chart-gauge.component';
import { ViewChartLineComponent } from 'app/core/components/view-chart-line/view-chart-line.component';
import { ViewChartPieComponent } from 'app/core/components/view-chart-pie/view-chart-pie.component';
import { ViewChartComponent } from 'app/core/components/view-chart/view-chart.component';
import { ViewControlComponent } from 'app/core/components/view-control/view-control.component';
import { ViewControllerComponent } from 'app/core/components/view-controller/view-controller.component';
import { ViewComponent } from 'app/core/components/view/view.component';
import { WidgetComponent } from 'app/core/components/widgets/widget/widget.component';
import { WidgetChartComponent } from 'app/core/components/widgets/widgetchart/widgetchart.component';
import { WidgetCpuComponent } from 'app/core/components/widgets/widgetcpu/widgetcpu.component';
import { WidgetMemoryComponent } from 'app/core/components/widgets/widgetmemory/widgetmemory.component';
import { WidgetNicComponent } from 'app/core/components/widgets/widgetnic/widgetnic.component';
import { WidgetPoolComponent } from 'app/core/components/widgets/widgetpool/widgetpool.component';
import { WidgetStorageComponent } from 'app/core/components/widgets/widgetstorage/widgetstorage.component';
import { SimpleFailoverBtnComponent, SimpleFailoverBtnDialog } from 'app/core/components/widgets/widgetsysinfo/simple-failover-btn.component';
import { WidgetSysInfoComponent } from 'app/core/components/widgets/widgetsysinfo/widgetsysinfo.component';
import { CommonDirectivesModule } from 'app/directives/common/common-directives.module';
import { EntityModule } from 'app/pages/common/entity/entity.module';
import { CopyPasteMessageComponent } from 'app/pages/shell/copy-paste-message.component';
import { StorageService } from 'app/services/storage.service';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { HtmlTooltipDirective } from './directives/html-tooltip/html-tooltip.directive';
import { TextLimiterTooltipComponent } from './directives/text-limiter/text-limiter-tooltip/text-limiter-tooltip.component';
import { TextLimiterDirective } from './directives/text-limiter/text-limiter.directive';
import { ConvertPipe } from './pipes/convert.pipe';
import { WidgetControllerComponent } from './widgets/widgetcontroller/widgetcontroller.component';
/*
 *
 * This is the Core Module. By importing this module you'll
 * ensure your page will have the right dependencies in place
 * to make use of Core Components
 *
 * */

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    OverlayModule,
    PortalModule,
    FlexLayoutModule,
    FormsModule,
    TranslateModule,
    RouterModule,
    CommonDirectivesModule,
    EntityModule,
  ],
  declarations: [
    ContextMenuComponent,
    CopyPasteMessageComponent,
    PageComponent,
    ViewComponent,
    CardComponent,
    ViewControlComponent,
    ViewControllerComponent,
    Display,
    ViewButtonComponent,
    ViewChartComponent,
    ViewChartAreaComponent,
    ViewChartDonutComponent,
    ViewChartPieComponent,
    ViewChartGaugeComponent,
    ViewChartBarComponent,
    ViewChartLineComponent,
    WidgetComponent,
    WidgetChartComponent,
    WidgetSysInfoComponent,
    WidgetNicComponent,
    WidgetCpuComponent,
    WidgetMemoryComponent,
    WidgetPoolComponent,
    TextLimiterDirective,
    HtmlTooltipDirective,
    TextLimiterTooltipComponent,
    WidgetControllerComponent,
    SimpleFailoverBtnComponent,
    SimpleFailoverBtnDialog,
    ConvertPipe,
    CopyButtonComponent,
    WidgetStorageComponent,
  ],
  exports: [ // Modules and Components here
    CommonModule,
    MaterialModule,
    OverlayModule,
    PortalModule,
    FlexLayoutModule,
    Display,
    ContextMenuComponent,
    CopyPasteMessageComponent,
    PageComponent,
    ViewComponent,
    ViewChartComponent,
    ViewChartAreaComponent,
    ViewChartDonutComponent,
    ViewChartGaugeComponent,
    ViewChartBarComponent,
    ViewChartPieComponent,
    ViewChartLineComponent,
    ViewControlComponent,
    ViewButtonComponent,
    ViewControllerComponent,
    CardComponent,
    WidgetComponent,
    WidgetChartComponent,
    WidgetSysInfoComponent,
    WidgetNicComponent,
    WidgetCpuComponent,
    WidgetMemoryComponent,
    TextLimiterDirective,
    HtmlTooltipDirective,
    TextLimiterTooltipComponent,
    WidgetPoolComponent,
    WidgetControllerComponent,
    SimpleFailoverBtnComponent,
    SimpleFailoverBtnDialog,
    CopyButtonComponent,
    WidgetStorageComponent,
  ],
  entryComponents: [
    ContextMenuComponent,
    CopyPasteMessageComponent,
    ViewComponent,
    ViewChartComponent,
    ViewChartAreaComponent,
    ViewChartDonutComponent,
    ViewChartGaugeComponent,
    ViewChartBarComponent,
    ViewChartPieComponent,
    ViewChartLineComponent,
    ViewControlComponent,
    ViewButtonComponent,
    ViewControllerComponent,
    CardComponent,
    WidgetComponent,
    WidgetChartComponent,
    WidgetSysInfoComponent,
    WidgetNicComponent,
    WidgetCpuComponent,
    WidgetMemoryComponent,
    WidgetPoolComponent,
    TextLimiterTooltipComponent,
    WidgetControllerComponent,
    SimpleFailoverBtnComponent,
    SimpleFailoverBtnDialog,
    CopyButtonComponent,
    WidgetStorageComponent,
  ],
  providers: [
    StorageService,
  ],
})
export class CoreComponents {}
