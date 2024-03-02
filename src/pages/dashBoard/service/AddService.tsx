import { Button } from "@/components/ui/button";
import Sidebar from "@/components/ui/layouts/Sidebar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import Swal from 'sweetalert2';
const AddService = () => {
  const queryClient = useQueryClient()
  const [formData, setFormData] = useState({
    name: "",
    Photo: "", 
    features: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    Photo: "", 
    features: "",
  }); // Added state for form errors
  interface ServiceData {
    name: string;
    Photo: string;
    features: string[];
    description?: string; // Optional field
  }
  const { mutateAsync } = useMutation({ 
    mutationFn: async (data:ServiceData) => {
      return await fetch("https://assignment5-server-roan.vercel.app/addService", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['services']})
    }
  });

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();
  
    // Validate required fields and display errors if any
    let formIsValid = true;
    const newErrors:any = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      formIsValid = false;
    }
    if (!formData.Photo.trim()) {
      newErrors.Photo = "Photo URL is required";
      formIsValid = false;
    }
    if (!formData.features.trim()) {
      newErrors.features = "Features are required";
      formIsValid = false;
    }
    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }
  
    // Convert features string to array
    const featuresArray = formData.features.split("\n").map((feature) => feature.trim());
  
    try {
      // Send data with features as an array
      await mutateAsync({ ...formData, features: featuresArray });
      setFormData({
        name: "",
        Photo: "",
        features: "",
        description: "",
      });
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your service has been added successfully.',
      });
    } catch (error) {
      console.error("Error adding service:", error);
     }
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };



  return (
    <div className="grid grid-cols-12 bg-stone-100">
      <Sidebar />
      <div className="col-span-10 flex justify-center items-center p-4 md:p-10 mx-auto w-full">
      <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-lg shadow-md w-full md:w-1/2">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">Add Service</h1>
        <div className="mb-6">
          {errors.name && <span className="text-red-500">{errors.name}</span>}
          <input
            type="text"
            name="name"
            value={formData.name}
            className="border border-gray-300 rounded-lg w-full px-4 py-2 mb-2"
            placeholder="Enter Service Name"
            onChange={handleChange}
          />
          {errors.Photo && <span className="text-red-500">{errors.Photo}</span>}
          <input
            type="text"
            name="Photo"
            value={formData.Photo}
            className="border border-gray-300 rounded-lg w-full px-4 py-2 mb-2"
            placeholder="Enter Photo URL"
            onChange={handleChange}
          />
          {errors.features && <span className="text-red-500">{errors.features}</span>}
          <textarea
            name="features"
            value={formData.features}
            className="border border-gray-300 rounded-lg p-2 w-full h-32 resize-none"
            placeholder="Features (one per line)"
            onChange={handleChange}
          ></textarea>
          <textarea
            name="description"
            value={formData.description}
            className="border border-gray-300 rounded-lg p-2 w-full h-32 resize-none"
            placeholder="Description (optional)"
            onChange={handleChange}
          ></textarea>
          </div>
          <div className="text-center">
            <Button type="submit" className="px-4 py-2 rounded-lg">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default AddService;
