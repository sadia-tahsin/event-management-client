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

const DeleteService = () => {
  const queryClient = useQueryClient();

  const getServices = async () => {
    return await fetch("https://assignment5-server-roan.vercel.app/services").then((res) => res.json());
  };

  const { data } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
 

  const { mutateAsync } = useMutation({ 
    mutationFn: async (id:string) => {
      return await fetch(`https://assignment5-server-roan.vercel.app/deleteService/${id}`, {
        method: "DELETE",
      });
    },
    
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey:['services']});
      
    }
   });
  

  const handleDelete = async(id:string) => {
  console.log(id)
   await mutateAsync(id);
  };

  const service = data?.map((item: any) => ({
    photo: item.Photo,
    name: item.name,
    features: item.features,
    id: item._id,
  }));

  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <div className="mt-5 mx-20 col-span-10">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Service Name</TableHead>
              <TableHead>Photo</TableHead>
              <TableHead>Offered Features</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {service &&
              service.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>
                    {item.photo && (
                      <div className="rounded-md">
                        <img src={item.photo} alt="" className="object-contain w-20 h-20" />
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">
                    <ul>
                      {item.features.map((feature: any, index: number) => (
                        <li key={index} className="py-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
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

export default DeleteService;
