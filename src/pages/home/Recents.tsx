import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

const Recents = () => {
  const getRecentEvents = async () => {
    return await fetch("https://assignment5-server-roan.vercel.app/recentEvents").then((res) =>
      res.json()
    );
  };
  const { data } = useQuery({
    queryKey: ["recentEvents"],
    queryFn: getRecentEvents,
  });

  console.log(data);
  return (
    <Container className="my-12 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2">
      {data && data.length > 0 && (
        <div className="grid grid-cols-3 mx-16 ">
       
         <div className="rounded-md mx-2 my-2">
         <img
                src={data[0]?.photo}
                alt="Image 1"
                className="w-full h-full object-cover"
              />
              </div>
         <div className="rounded-md mx-2 my-2">
         <img
                src={data[1]?.photo}
                alt="Image 1"
                className="w-full h-full object-cover"
              />
         </div>
         <div className="rounded-full mx-2 my-2">
         <img
                src={data[2]?.photo}
                alt="Image 1"
                className="w-full h-full object-cover"
              />
         </div>
         <div className="rounded-full mx-2 my-2">
         <img
                src={data[2]?.photo}
                alt="Image 1"
                className="w-full h-full object-cover"
              />
         </div>
         <div className=" rounded-md mx-2 my-2">
         <img
                src={data[0]?.photo}
                alt="Image 1"
                className="w-full h-full object-cover"
              />
         
         </div>
         <div className=" rounded-md mx-2 my-2">
         <img
                src={data[1]?.photo}
                alt="Image 1"
                className="w-full h-full object-cover"
              />
         </div>
       
        </div>
         )}
        <div className="mx-8 mt-12">
          <h1 className="text-6xl font-extrabold mb-6">Recent Events</h1>
          <p className="mb-12">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
          {/* <button className="text-white">Learn more</button> */}
          <Button className="px-5 py-2 bg-sky-600 rounded-none">Learn more</Button>
        </div>
      </div>
    </Container>
  );
};

export default Recents;
