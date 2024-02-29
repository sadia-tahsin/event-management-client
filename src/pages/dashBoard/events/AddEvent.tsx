// import { Button } from "@/components/ui/button";
// import Sidebar from "@/components/ui/layouts/Sidebar";
// import { useMutation } from "@tanstack/react-query";
// import { FormEvent, useState } from "react";
// import Swal from 'sweetalert2';
// const AddEvent = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     photo: "", 
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     photo: "", 
  
//   }); // Added state for form errors
//   interface EventData {
//     name: string;
//     photo: string;
//      }
//   const { mutateAsync } = useMutation({ 
//     mutationFn: async (data:EventData) => {
//       return await fetch("http://localhost:3000/addEvent", {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     },
//   });

//   const handleSubmit = async(e: FormEvent) => {
//     e.preventDefault();
  
//     // Validate required fields and display errors if any
//     let formIsValid = true;
//     const newErrors:any = {};
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//       formIsValid = false;
//     }
//     if (!formData.photo.trim()) {
//       newErrors.photo = "Photo URL is required";
//       formIsValid = false;
//     }
    
//     if (!formIsValid) {
//       setErrors(newErrors);
//       return;
//     }
  
    
//     try {
//       // Send data with features as an array
//       await mutateAsync({ ...formData});
//       setFormData({
//         name: "",
//         photo: ""
//       });
//       setErrors({
//         name: "",
//         photo: ""
//       })
//       Swal.fire({
//         icon: 'success',
//         title: 'Success!',
//         text: 'One event has been added successfully.',
//       });
//     } catch (error) {
//       console.error("Error adding service:", error);
//      }
//   };
  

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="grid grid-cols-12 bg-stone-100">
//       <Sidebar />
//       <div className="flex justify-center  mt-5 ml-20 col-span-8 p-5">
//         <form onSubmit={handleSubmit} className="bg-sky-900 p-10 rounded border border-gray-300">
//         {errors.name && <span className="text-red-500">{errors.name}</span>} {/* Display name error message */}
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             className="border-2 rounded m-2 p-2 border-sky-500 w-full"
//             placeholder="Event Name"
//             onChange={handleChange}
//           />
//            {errors.photo && <span className="text-red-500">{errors.photo}</span>} {/* Display photo error message */}
        
//           <input
//             type="text"
//             name="photo" // Corrected name attribute
//             value={formData.photo}
//             className="border-2 rounded m-2 p-2 border-sky-500 w-full"
//             placeholder="Photo URL"
//             onChange={handleChange}
//           />
          
//           <div className="text-center"> {/* Center the button horizontally */}
//             <Button type="submit">Submit</Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

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

  const { mutateAsync } = useMutation({ 
    mutationFn: async (data) => {
      return await fetch("http://localhost:3000/addEvent", {
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
    const newErrors = {};
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
      await mutateAsync({ ...formData});
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
