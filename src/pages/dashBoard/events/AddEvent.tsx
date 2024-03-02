
// export default AddEvent;
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/ui/layouts/Sidebar";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import Swal from 'sweetalert2';

const AddEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    photo: "", 
  });

  const [errors, setErrors] = useState({
    name: "",
    photo: "", 
  });
  interface eventData {
    name: string;
    photo: string;
   
  }
  const { mutateAsync } = useMutation({ 
    mutationFn: async (data:eventData) => {
      return await fetch("https://assignment5-server-roan.vercel.app/addEvent", {
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
  
    let formIsValid = true;
    const newErrors = {
      name: "",
      photo:""
    };
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      formIsValid = false;
    }
    if (!formData.photo.trim()) {
      newErrors.photo = "Photo URL is required";
      formIsValid = false;
    }
    
    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }
  
    try {
      await mutateAsync({...formData});
      setFormData({
        name: "",
        photo: ""
      });
      setErrors({
        name: "",
        photo: ""
      })
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'One event has been added successfully.',
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
      <Sidebar/>
      <div className="col-span-10 flex justify-center items-center p-4 md:p-10 mx-auto w-full">
        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-lg shadow-md w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">Add Event</h1>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              className="border border-gray-300 rounded-lg w-full px-4 py-2"
              placeholder="Enter event name"
              onChange={handleChange}
            />
            {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
          </div>
          <div className="mb-6">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
            <input
              type="text"
              name="photo"
              value={formData.photo}
              className="border border-gray-300 rounded-lg w-full px-4 py-2"
              placeholder="Enter photo URL"
              onChange={handleChange}
            />
            {errors.photo && <span className="text-red-500 text-sm mt-1">{errors.photo}</span>}
          </div>
          <div className="text-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
  
  
};

export default AddEvent;
