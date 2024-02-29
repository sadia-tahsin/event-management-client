import Sidebar from "@/components/ui/layouts/Sidebar";
import { useQuery } from "@tanstack/react-query";


const DashBoard = () => {
  const getServices = async () => {
    return await fetch("http://localhost:3000/services").then((res) =>
      res.json()
    );
  };
  const { data } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
  
  // const getEvents = async () => {
  //   return await fetch("http://localhost:3000/events").then((res) =>
  //     res.json()
  //   );
  // };
  // const { eventData } = useQuery({
  //   queryKey: ["events"],
  //   queryFn: getEvents,
  // });
  // console.log(data);
  // console.log(eventData);

  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <div className="mt-5 mx-auto col-span-10">
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-center mb-4">
            Our Services
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data &&
              data.map(
                (
                  service: {
                    _id: Key | null | undefined;
                    Photo: string | undefined;
                    name:
                      | string;
                    description:
                      | string;
                    features: (
                      | string
                    )[];
                  },
                  index: number
                ) => (
                  <div
                  key={service._id}
                  className="bg-slate-200 rounded-md overflow-hidden"
                >
                  {service.Photo ? (
                    <div className="h-40 relative">
                      <img
                        src={service.Photo}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="p-2">
                     
                      <p className="text-gray-700">{service.description}</p>
                    </div>
                  )}
                   <h1 className="text-xl font-extrabold m-4">{service.name}</h1>
                </div>
                
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
