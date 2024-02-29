import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    
    <div className="bg-gray-900 col-span-2 h-screen sticky top-0 left-0 p-5">
      <nav className="flex flex-col gap-2">
      <NavLink
          to="/add-service"
          className={({ isActive }) =>
            cn(
              "p-3 bg-neutral-700 text-white hover:text-red-500 rounded-md truncate transition-all flex items-center gap-2",
              {
                "text-orange-500": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>{" "}
          <span className="truncate">Add Service</span>
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            cn(
              "p-3 bg-neutral-700 text-white hover:text-red-500 rounded-md truncate transition-all flex items-center gap-2",
              {
                "text-orange-500": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>{" "}
          <span className="truncate">View Service List</span>
        </NavLink>
        {/* <NavLink
          to="/update-service"
          className={({ isActive }) =>
            cn(
              "p-3 bg-neutral-700 text-white hover:text-red-500 rounded-md truncate transition-all flex items-center gap-2",
              {
                "text-orange-500": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>{" "}
          <span className="truncate">Update Service</span>
        </NavLink> 
        <NavLink
          to="/delete-service"
          className={({ isActive }) =>
            cn(
              "p-3 bg-neutral-700 text-white hover:text-red-500 rounded-md truncate transition-all flex items-center gap-2",
              {
                "text-orange-500": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>{" "}
          <span className="truncate">Delete Service</span>
        </NavLink>  */}
        <NavLink
          to="/add-event"
          className={({ isActive }) =>
            cn(
              "p-3 bg-neutral-700 text-white hover:text-red-500 rounded-md truncate transition-all flex items-center gap-2",
              {
                "text-orange-500": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>{" "}
          <span className="truncate">Add Event</span>
        </NavLink>
         <NavLink
          to="/events"
          className={({ isActive }) =>
            cn(
              "p-3 bg-neutral-700 text-white hover:text-red-500 rounded-md truncate transition-all flex items-center gap-2",
              {
                "text-orange-500": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>{" "}
          <span className="truncate">View Event List</span>
        </NavLink> 
       
      </nav>
    </div>
  );
};

export default Sidebar;
