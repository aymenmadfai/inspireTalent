import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { RecruitersComponent } from "../../pages/recruiters/recruiters.component";
import { FreelancersComponent } from "src/app/pages/freelancers/freelancers.component";
import { UsersComponent } from "src/app/pages/users/users.component";
import { ParametersComponent } from "src/app/pages/parameters/parameters.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "recruiters", component: RecruitersComponent },
  { path: "freelancers", component: FreelancersComponent },
  { path: "users", component: UsersComponent },
  { path: "parameters", component: ParametersComponent },
  // { path: "rtl", component: RtlComponent }
];
