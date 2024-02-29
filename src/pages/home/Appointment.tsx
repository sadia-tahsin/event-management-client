import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import Swal from "sweetalert2";

const Appointment = () => {
    

    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault()
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Appointment has been added successfully. Looking forward to meet you!',
          });
          e.target.reset();
    }
    return (

        <Container className="mb-12 py-16">
      
 
  <div className="text-center">
    {/* Appointment Form */}
  
    <form onSubmit={handleSubmit}
    className="bg-transparent shadow-md rounded-md p-6 mx-10 lg:mx-60 shadow-2xl max-w-30">
  <h2 className="text-5xl font-semibold mb-4">Plan Your Visit</h2>
  <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
    <input type="text" id="name" name="name" className="w-full border rounded-md py-2 px-3" required />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
    <input type="email" id="email" name="email" className="w-full border rounded-md py-2 px-3" required />
  </div>
<div className="flex space-between ">
<div className="mb-4 w-1/2 ">
    <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Preferred Date:</label>
    <input type="date" id="date" name="date" className="w-full border rounded-md py-2 px-3" required />
  </div>
  <div className="mb-4 w-1/2 ">
    <label htmlFor="time" className="block text-gray-700 font-bold mb-2">Preferred Time:</label>
    <input type="time" id="time" name="time" className="w-full border rounded-md py-2 px-3" required />
  </div>
</div>
  <div className="mb-4">
    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Additional Message:</label>
    <textarea id="message" name="message" rows="4" className="w-full border rounded-md py-2 px-3"></textarea>
  </div>
  {/* <button type="submit" className="bg--500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Book Appointment</button> */}
  <Button variant={'default'} type="submit" className="animate-bounce " >Book Appointment</Button>
</form>

</div>

</Container>
    );
};

export default Appointment;