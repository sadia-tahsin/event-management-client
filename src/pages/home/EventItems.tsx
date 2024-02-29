import Container from "@/components/Container";
import { useQuery } from "@tanstack/react-query";

const EventItems = () => {
  const getEvents = async () => {
    return await fetch("http://localhost:3000/events").then((res) =>
      res.json()
    );
  };
  const { data } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  console.log(data);
  return (

    <Container className="mt-24 text-center">
      <h1 className="text-6xl font-extrabold text-center mb-4">Event Items</h1>
      <p className="mb-14">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices <br></br>faucibus neque velit risus ac id
        lorem.
      </p>
      {data && data.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-8 mx-auto gap-5">
          <div className="col-span-1 h-[566px]">
            <div className="p-6 bg-gray-50 rounded-md">
              <img
                src={data[0]?.photo}
                alt="Image 1"
                className="w-full h-full object-cover"
              />
              <h2 className="text-left text-2xl font-medium pt-2">Event Item - 1</h2>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-4">
              <div className="p-6 bg-gray-50 rounded-md">
                <img
                  src={data[2]?.photo}
                  alt="Image 2"
                  className="w-full object-contain"
                />
                <h2 className="text-left text-base text-xl font-medium pt-2">Event Item - 2</h2>
              </div>
              <div className="p-6 bg-gray-50 rounded-md">
                <img
                  src={data[3]?.photo}
                  alt="Image 3"
                  className="w-full  object-cover"
                />
                <h2 className="text-left text-base md:text-xl font-medium pt-2">Event Item - 3</h2>
              </div>
            </div>
          </div>

          <div className="col-span-1  h-[566px]">
            <div className="p-6 bg-gray-50 rounded-md">
              <img
                src={data[4]?.photo}
                alt="Image 1"
                className="w-full object-contain"
              />
              <h2 className="text-left text-base md:text-2xl font-medium pt-2">Event Item - 1</h2>
            </div>

            <div className="grid grid-cols-1">
              <div className="p-6 bg-gray-50 rounded-md mt-4">
                <img
                  src={data[5]?.photo}
                  alt="Image 2"
                  className="w-full object-contain"
                />
                <h2 className="text-left text-base md:text-2xl font-medium pt-2">Event Item - 2</h2>
              </div>
              
            </div>
          </div>

          <div className="col-span-1 row-span-2  h-[566px]">
            <div className="p-6 bg-gray-50 rounded-md">
              <img
                src={data[1]?.photo}
                alt="Image 6"
                className="w-full object-contain"
              />
              <h2 className="text-left text-sm md:text-2xl font-medium pt-2">Event Item - 6</h2>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default EventItems;
