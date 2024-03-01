import { Button } from "@/components/ui/button";
import Sidebar from "@/components/ui/layouts/Sidebar";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateService = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: "",
    Photo: "",
    features: [],
    description: "",
  });
  const {id} = useParams()
  const { data, isLoading } = useQuery({
    queryKey: ["service",id], // Unique query key for the service data
    queryFn: () => fetch(`https://assignment5-server-roan.vercel.app/services/${id}`).then((res) => res.json()),
  });

  useEffect(() => {
    if (data) {
      // Populate form fields with existing data
      setFormData(data);
      console.log(formData)
    }
  }, [data]);

  const { mutateAsync } = useMutation({
    mutationFn: async (updatedData) => {
      try {
        console.log(updatedData);
        const response = await fetch(`https://assignment5-server-roan.vercel.app/updateService/${id}`, {
          method: "PUT",
          body: JSON.stringify(updatedData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        // Check if the response is successful
        if (!response.ok) {
          throw new Error("Failed to update service");
        }
        // Return the data if successful
        return response.json();
      } catch (err) {
        // Throw the error to be caught by the onError callback
        throw new Error(err.message);
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["service"] });
      // Optionally show success message
    },
    onError: (error) => {
      console.error("Error updating service:", error);
      // Optionally show error message
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

  const handleDeleteFeature = (index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      features: prevFormData.features.filter((_, i) => i !== index),
    }));
  };

  const handleAddFeature = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      features: [...prevFormData.features, ""],
    }));
  };

  if (isLoading) return <div>Loading...</div>;

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
        placeholder={formData.name} // Use old data as placeholder
        className="border-2 rounded m-2 p-2 border-sky-500 w-full"
      />
      <br />
      <h2 className="mt-4 mb-2 text-lg font-semibold text-white">Image URL:</h2>
      <input
        type="text"
        name="photo"
        value={formData.Photo}
        onChange={handleChange}
        placeholder={formData.Photo} // Use old data as placeholder
        className="border-2 rounded m-2 p-2 border-sky-500 w-full "
      />
      <br />
      {/* Display features */}
      <h2 className="mt-4 mb-2 text-lg font-semibold text-white">Features:</h2>
      <div className="border border-sky-500 rounded p-2">
        {formData.features.map((feature, index) => (
          <div key={index} className="flex items-center justify-between border-b border-gray-300 py-2">
            <input
              type="text"
              value={feature}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  features: prevFormData.features.map((f, i) =>
                    i === index ? e.target.value : f
                  ),
                }))
              }
              className="w-full bg-transparent outline-none font-semibold"
              placeholder={`Feature ${index + 1}`}
            />
            <button onClick={() => handleDeleteFeature(index)} className="text-red-600 hover:text-red-800 focus:outline-none">
              Delete
            </button>
          </div>
        ))}
        {/* Button to add new feature */}
        <button onClick={handleAddFeature} className="mt-2 bg-sky-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none">
          Add more
        </button>
      </div>
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

export default UpdateService;
