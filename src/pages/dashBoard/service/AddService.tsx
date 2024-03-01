import { Button } from "@/components/ui/button";
import Sidebar from "@/components/ui/layouts/Sidebar";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import Swal from 'sweetalert2';
const AddService = () => {
  const [formData, setFormData] = useState({
    name: "",
    photo: "", 
    features: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    photo: "", 
    features: "",
  }); // Added state for form errors
  interface ServiceData {
    name: string;
    photo: string;
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
    if (!formData.photo.trim()) {
      newErrors.photo = "Photo URL is required";
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
        photo: "",
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

  // return (
  //   <div className="grid grid-cols-12 bg-stone-100">
  //     <Sidebar />
  //     <div className="mt-5 ml-20 col-span-8 p-5">
  //       <form onSubmit={handleSubmit} className="bg-sky-900 p-10 rounded border border-gray-300">
  //       {errors.name && <span className="text-red-500">{errors.name}</span>} {/* Display name error message */}
  //         <input
  //           type="text"
  //           name="name"
  //           value={formData.name}
  //           className="border-2 rounded m-2 p-2 border-sky-500 w-full"
  //           placeholder="Service Name"
  //           onChange={handleChange}
  //         />
  //          {errors.photo && <span className="text-red-500">{errors.photo}</span>} {/* Display photo error message */}
        
  //         <input
  //           type="text"
  //           name="photo" // Corrected name attribute
  //           value={formData.photo}
  //           className="border-2 rounded m-2 p-2 border-sky-500 w-full"
  //           placeholder="Photo URL"
  //           onChange={handleChange}
  //         />
  //         {errors.features && <span className="text-red-500">{errors.features}</span>} {/* Display features error message */}
        
  //          <textarea
  //           name="features"
  //           value={formData.features}
  //           className="border-2 rounded m-2 p-2 border-sky-500 w-full h-32 resize-none"
  //           placeholder="Features (one per line)"
  //           onChange={handleChange}
  //         ></textarea>
  //           <textarea
  //           name="description"
  //           value={formData.description}
  //           className="border-2 rounded m-2 p-2 border-sky-500 w-full h-32 resize-none"
  //           placeholder="Description (optional)"
  //           onChange={handleChange}
  //         ></textarea>
  //         <div className="text-center"> {/* Center the button horizontally */}
  //           <Button type="submit">Submit</Button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );

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
          {errors.photo && <span className="text-red-500">{errors.photo}</span>}
          <input
            type="text"
            name="photo"
            value={formData.photo}
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
