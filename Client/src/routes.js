import React from "react";


// import components and load lazy 


const Dashboard = React.lazy(()=> import("./Containers/Dashboard/index"));
const Scheduler = React.lazy(()=> import("./Containers/Schduler/Search"));
const Calendar = React.lazy(()=> import("./Containers/Schduler/Calender"));
const Holiday = React.lazy(()=> import("./Containers/Holiday/Index"));
const Settings = React.lazy(()=> import('./Containers/Settings/Index'))
const routes = [
    {
      path: "/home",
      exact: true,
      name: "Dashboard",
      component: Dashboard,
    },
    {
        path: "/scheduler",
        exact: true,
        name: "Scheduler",
        component: Scheduler,
    },
    {
      path: "/scheduler/search",
      exact: true,
      name: "Calendar",
      component: Calendar,
    },
    {
      path: "/holiday/me",
      exact: true,
      name: "Holiday",
      component: Holiday,
    },
    {
      path: "/setting",
      exact: true,
      name: "Settings",
      component: Settings,
    }
]


export default routes;