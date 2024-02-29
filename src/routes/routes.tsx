import App from "@/App";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import DashBoard from "@/pages/dashBoard/DashBoard";
import AddEvent from "@/pages/dashBoard/events/AddEvent";
import DeleteEvent from "@/pages/dashBoard/events/DeleteEvent";
import EventList from "@/pages/dashBoard/events/EventList";
import UpdateEvent from "@/pages/dashBoard/events/UpdateEvent";
import AddService from "@/pages/dashBoard/service/AddService";
import DeleteService from "@/pages/dashBoard/service/DeleteService";
import ServiceList from "@/pages/dashBoard/service/ServiceList";
import UpdateService from "@/pages/dashBoard/service/UpdateService";
import Home from "@/pages/home/index";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>          
            },
            {
                path: 'about',
                element: <About></About>           
            },
            {
                path: 'contact',
                element: <Contact></Contact>           
            },
            {
                path: 'dashboard',
                element: <DashBoard></DashBoard>          
            },
            {
                path: 'add-service',
                element: <AddService></AddService>         
            },
            {
                path: 'services',
                element: <ServiceList></ServiceList>         
            },{
                path: 'delete-service',
                element: <DeleteService></DeleteService>        
            },{
                path: '/update-service/:id',
                element: <UpdateService></UpdateService>        
            },
            {
                path: 'add-event',
                element: <AddEvent></AddEvent>         
            },
            {
                path: 'events',
                element: <EventList></EventList>        
            },{
                path: 'delete-event',
                element: <DeleteEvent></DeleteEvent>       
            },{
                path: 'update-event/:id',
                element: <UpdateEvent></UpdateEvent>      
            }

        ]
    }
])

export default router;