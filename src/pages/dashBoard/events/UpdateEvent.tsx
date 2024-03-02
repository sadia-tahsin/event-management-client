import { Button } from "@/components/ui/button";
import Sidebar from "@/components/ui/layouts/Sidebar";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateEvent = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
  });
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["event", id],
    queryFn: () => fetch(`https://assignment5-server-roan.vercel.app/events/${id}`).then((res) => {
      if (!res.ok) {
        throw new Error("Event not found");
      }
      return res.json();
    }),
  });

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  type formData = any
    const { mutateAsync } = useMutation<void, Error, formData, any>({
          mutationFn: async (updatedData) => {
            try {
              console.log(updatedData);
              const response = await fetch(`https://assignment5-server-roan.vercel.app/updateEvent/${id}`, {
                method: "PUT",
                body: JSON.stringify(updatedData),
                headers: {
                  "Content-Type": "application/json",
                },
              });
            
              if (!response.ok) {
                throw new Error("Failed to update event");
              }
             
              return response.json();
            } catch (err) {
             
              console.log(err)
            }
          },
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["event", id] });
            
            setFormData({
              name: "",
              photo: ""
            });
           
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'One event has been updated successfully.',
            });
          },
          onError: (error) => {
            console.error("Error updating service:", error);
          
          },
        });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await mutateAsync(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Event not found</div>;

  return (
    <div className="grid grid-cols-12 bg-stone-100">
      <Sidebar />
      <div className="mt-5 ml-20 col-span-8">
        <form onSubmit={handleSubmit} className="bg-sky-900 p-5 rounded border border-gray-300">
      {/* Form fields for updating service data */}
       <h2 className="mt-4 mb-2 text-lg font-semibold text-white">Name:</h2>
       <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={formData.name} // old data as placeholder
        className="border-2 rounded m-2 p-2 border-sky-500 w-full"
      />
      <br />
      <h2 className="mt-4 mb-2 text-lg font-semibold text-white">Image URL:</h2>
      <input
        type="text"
        name="photo"
        value={formData.photo}
        onChange={handleChange}
        placeholder={formData.photo} //old data as placeholder
        className="border-2 rounded m-2 p-2 border-sky-500 w-full "
      />
      <br />
    
      <div className="text-center mt-2">
      <Button type="submit">
        Update
      </Button>
      </div>
     
    
        </form>
      </div>
    </div>
  );
};

export default UpdateEvent;