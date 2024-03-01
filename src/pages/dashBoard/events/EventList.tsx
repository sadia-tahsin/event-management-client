// import { Button } from "@/components/ui/button";
// import Sidebar from "@/components/ui/layouts/Sidebar";
// import { Avatar, AvatarImage } from "@/components/ui/avatar"

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { Link } from "react-router-dom";

// const EventList = () => {
//   const queryClient = useQueryClient();

//   const getEvents = async () => {
//     return await fetch("https://assignment5-server-roan.vercel.app/events").then((res) =>
//       res.json()
//     );
//   };
  
//   const { data } = useQuery({
//     queryKey: ["events"],
//     queryFn: getEvents,
//   });
//   console.log(data);

//   const events = data?.map((item: any) => ({
//     id: item._id,
//     photo: item.photo,
//     name: item.name,
//   }));

//   const { mutateAsync } = useMutation({ 
//     mutationFn: async (id: string) => {
//       return await fetch(`https://assignment5-server-roan.vercel.app/deleteEvent/${id}`, {
//         method: "DELETE",
//       });
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['events'] });
//     }
//   });

//   const handleDelete = async (id: string) => {
//     await mutateAsync(id);
//   };

//   return (
//     <div className="grid grid-cols-12">
//       <Sidebar></Sidebar>
//       <div className="mt-5 ml-20 col-span-8">
//         {/* <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead className="w-[100px]">Event Name</TableHead>
//               <TableHead>Photo</TableHead>
//               <TableHead className="text-center">Action</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {events &&
//               events.map((item: any) => (
//                 <TableRow key={item.id}>
//                   <TableCell className="font-medium">{item.name}</TableCell>
//                   <TableCell>
//                     {item.photo && ( 
//                       <Avatar>
//                         <AvatarImage src={item.photo} />
//                       </Avatar>
//                     )}
//                   </TableCell>
//                   <TableCell className="text-center">
//                     <Button variant={"destructive"} onClick={() => handleDelete(item.id)}>Delete</Button>
//                     <Link to={`/update-event/${item.id}`}>
//                       <Button className="ml-5">Update</Button>
//                     </Link>
//                   </TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table> */}
//         <Table>
//   <TableHeader>
//     <TableRow className="grid grid-cols-3">
//       <TableHead className="col-span-1">Event Name</TableHead>
//       <TableHead className="col-span-1">Photo</TableHead>
//       <TableHead className="col-span-1 text-center">Action</TableHead>
//     </TableRow>
//   </TableHeader>
//   <TableBody>
//     {events &&
//       events.map((item: any) => (
//         <TableRow key={item.id} className="grid grid-cols-3">
//           <TableCell className="col-span-1 font-medium">{item.name}</TableCell>
//           <TableCell className="col-span-1">
//             {item.photo && ( 
//               <Avatar>
//                 <AvatarImage src={item.photo} />
//               </Avatar>
//             )}
//           </TableCell>
//           <TableCell className="col-span-1 text-center">
//             <Button variant={"destructive"} onClick={() => handleDelete(item.id)}>Delete</Button>
//             <Link to={`/update-event/${item.id}`}>
//               <Button className="ml-5">Update</Button>
//             </Link>
//           </TableCell>
//         </TableRow>
//       ))}
//   </TableBody>
// </Table>

//       </div>
//     </div>
//   );
// };

// export default EventList;
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/ui/layouts/Sidebar";
import { Avatar, AvatarImage } from "@/components/ui/avatar"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const EventList = () => {
  const queryClient = useQueryClient();

  const getEvents = async () => {
    return await fetch("https://assignment5-server-roan.vercel.app/events").then((res) =>
      res.json()
    );
  };
  
  const { data } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });
  console.log(data);

  const events = data?.map((item: any) => ({
    id: item._id,
    photo: item.photo,
    name: item.name,
  }));

  const { mutateAsync } = useMutation({ 
    mutationFn: async (id: string) => {
      return await fetch(`https://assignment5-server-roan.vercel.app/deleteEvent/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    }
  });

  const handleDelete = async (id: string) => {
    await mutateAsync(id);
  };

  return (
    <div className="grid grid-cols-12">
      <Sidebar></Sidebar>
      <div className="mt-5 ml-20 col-span-8">
        <Table>
          <TableHeader>
            <TableRow className="grid grid-cols-3">
              <TableHead className="col-span-1">Event Name</TableHead>
              <TableHead className="col-span-1">Photo</TableHead>
              <TableHead className="col-span-1 text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events &&
              events.map((item: any) => (
                <TableRow key={item.id} className="grid grid-cols-3">
                  <TableCell className="col-span-1 font-medium">{item.name}</TableCell>
                  <TableCell className="col-span-1">
                    {item.photo && ( 
                      <Avatar>
                        <AvatarImage src={item.photo} />
                      </Avatar>
                    )}
                  </TableCell>
                  <TableCell className="col-span-1 text-center">
                    <div className="flex flex-col md:flex-row justify-center md:justify-start gap-2">
                      <Button variant={"destructive"} onClick={() => handleDelete(item.id)}>Delete</Button>
                      <Link to={`/update-event/${item.id}`}>
                        <Button>Update</Button>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default EventList;

