import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },

  {
    path: "/users",
    title: "Users",
    rtlTitle: "التعديلات",
    icon: "icon-single-02",
    class: ""
  },
  
  {
    path: "/recruiters",
    title: "Recruiters",
    rtlTitle: "التعديلات",
    icon: "icon-coins",
    class: ""
  },
  
  {
    path: "/freelancers",
    title: "Freelancers",
    rtlTitle: "التعديلات",
    icon: "icon-laptop",
    class: ""
  },
  {
    path: "/parameters",
    title: "Parameters",
    rtlTitle: "التعديلات",
    icon: "icon-settings",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
