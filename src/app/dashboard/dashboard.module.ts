import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { MaterialModule } from "../shared/material.module";
import { InvoicesModule } from "../invoices/invoices.module";
import { ClientsModule } from "../clients/clients.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from "../core/services/token-interceptor.service";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    InvoicesModule,
    ClientsModule
  ],
  declarations: [DashboardComponent, SideNavComponent, ToolbarComponent],
})
export class DashboardModule {}
