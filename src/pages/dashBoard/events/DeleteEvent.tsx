// import { Button } from "@/components/ui/button";
// import Sidebar from "@/components/ui/layouts/Sidebar";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// const DeleteEvent = () => {
//   const queryClient = useQueryClient();

//   const getEvents = async () => {
//     return await fetch("https://assignment5-server-roan.vercel.app/events").then((res) => res.json());
//   };

//   const { data } = useQuery({
//     queryKey: ["events"],
//     queryFn: getEvents,
//   });
 

//   const { mutateAsync } = useMutation({ 
//     mutationFn: async (id:string) => {
//       console.log(id)
//       return await fetch(`https://assignment5-server-roan.vercel.app/deleteEvent/${id}`, {
//         method: "DELETE",
//       });
//     },
    
//       onSuccess: () => {
//         queryClient.invalidateQueries({queryKey:['events']});
      
//     }
//    });
  

//   const handleDelete = async(id:string) => {
//   console.log(id)
//    await mutateAsync(id);
//   };

//   const events = data?.map((item: any) => ({
//     photo: item.photo,
//     name: item.name,
//     id: item._id,
//   }));

//   return (
//     <div className="grid grid-cols-12">
//       <Sidebar />
//       <div className="mt-5 mx-20 col-span-10">
//         <Table>
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
//                   <TableCell className="font-medium col-span-2">{item.name}</TableCell>
//                   <TableCell>
//                     {item.photo && (
//                       <div className="rounded-md">
//                         <img src={item.photo} alt="" className="object-contain w-20 h-20" />
//                       </div>
//                     )}
//                   </TableCell>
                 
//                   <TableCell className="text-center">
//                     <Button variant={"destructive"} onClick={() => handleDelete(item.id)}>
//                       Delete
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default DeleteEvent;
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/ui/layouts/Sidebar";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DeleteEvent = () => {
  const queryClient = useQueryClient();

  const getEvents = async () => {
    return await fetch("https://assignment5-server-roan.vercel.app/events").then((res) => res.json());
  };

  const { data } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (id: string) => {
      console.log(id);
      return await fetch(`https://assignment5-server-roan.vercel.app/deleteEvent/${id}`, {
        method: "DELETE",
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    }
  });

  const handleDelete = async (id: string) => {
    console.log(id);
    await mutateAsync(id);
  };

  const events = data?.map((item: any) => ({
    photo: item.photo,
    name: item.name,
    id: item._id,
  }));

  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <div className="mt-5 mx-4 md:mx-20 col-span-10">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Event Name</TableHead>
              <TableHead>Photo</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events &&
              events.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium md:col-span-2">{item.name}</TableCell>
                  <TableCell>
                    {item.photo && (
                      <div className="rounded-md">
                        <img src={item.photo} alt="" className="object-contain w-20 h-20" />
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    <Button variant={"destructive"} onClick={() => handleDelete(item.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DeleteEvent;

