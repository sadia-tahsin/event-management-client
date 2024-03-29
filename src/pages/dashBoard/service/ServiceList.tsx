import { Button } from "@/components/ui/button";
import Sidebar from "@/components/ui/layouts/Sidebar";
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

const ServiceList = () => {
  const queryClient = useQueryClient();
  
  const getServices = async () => {
    return await fetch("https://assignment5-server-roan.vercel.app/services").then((res) =>
      res.json()
    );
  };
  
  const { data } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  const services = data?.map((item: any) => ({
    id: item._id,
    photo: item.Photo,
    name: item.name,
    features: item.features
  }));

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
    await mutateAsync(id);
  };

  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <div className="mt-5 mx-5 md:mx-20 col-span-10">
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
            {services &&
              services.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>
                    {item.photo && ( 
                      <div className="rounded-md">
                        <img src={item.photo} alt="" className="object-contain w-20 h-20"/>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">
                    <ol>
                      {item.features.map((feature: any, index: number) => (
                        <li key={index} className="py-2">
                          {index + 1}. {feature}
                        </li>
                      ))}
                    </ol>
                  </TableCell>
                  <TableCell className="text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
                      <Button variant={"destructive"} onClick={() => handleDelete(item.id)}>
                        Delete
                      </Button>
                      <Link to={`/update-service/${item.id}`}>
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

export default ServiceList;

