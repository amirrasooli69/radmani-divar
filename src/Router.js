import MainPage from "views/MainPage";
import About from "components/page/About";
import Contact from "components/page/contact";
import Chat from "components/chatComponent/Chat";
import NewAdvertising from "components/Advertising/newAdvertis/NewAdvertising";
import Weblog from "components/blog/Weblog";
import Support from "components/Support/Support";
import SingelAdvertis from "components/Advertising/view/SingelAdvertis";
import Vehicle from "components/Advertising/typeAdvertis/Vehicle";
import ElectronicTools from "components/Advertising/typeAdvertis/ElectronicTools";

const router =[
     {
         path: "/",
         name: "رادمانی شو",
         component: MainPage,
         menuPosition: "mainMenu",
         render: true,
         mainMenu: true,
         parentRoute: null,
     },
     {
         path: "/chat",
         name: "چت",
         component: Chat,
         menuPosition: "mainMenu",
         render: true,
         mainMenu: true,
         parentRoute: "/",
     },
     
     {
         path: "/about",
         name: "درباره ما",
         component:About,
         menuPosition: "mainMenu",
         render:true,
         mainMenu: true,
         parentRoute: "/",
     },
     {
         path: "/contact",
         name: "تماس با ما",
         component: Contact,
         menuPosition: "mainMenu",
         render: true,
         mainMenu: true,
         parentRoute: "/",
     },
     {
         path: "/new",
         name: "ثبت آگهی جدید",
         component: NewAdvertising,
         menuPosition: "mainMenu",
         render: true,
         mainMenu: true,
         parentRoute: "/",
     },
     {
         path: "/blog",
         name: "ثبت آگهی جدید",
         component: Weblog,
         menuPosition: "mainMenu",
         render: true,
         mainMenu: true,
          parentRoute: "/",
     },
     {
         path: "/support",
         name: "ثبت آگهی جدید",
         component: Support,
         menuPosition: "mainMenu",
         render: true,
         mainMenu: true,
          parentRoute: "/",
     },
     {
         path: `/view/:name/:id`,
         name: "نمایش آگهی",
         component: SingelAdvertis,
         menuPosition: "mainMenu",
         render: true,
         mainMenu: true,
          parentRoute: "/",
     },
     {
        path: `/vehicle`,
        name: "وسیله نقلیه",
        component: Vehicle,
        menuPosition: "mainMenu",
        render: true,
        mainMenu: true,
         parentRoute: '/',
    },
    {
        path: `/electronictools`,
        name: "لوازم الکترونیکی",
        component: ElectronicTools,
        menuPosition: "mainMenu",
        render: true,
        mainMenu: true,
         parentRoute: '/',
    },
]
export default router;