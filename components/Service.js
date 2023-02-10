import React from "react";

const Service = () => {
  return (
    <div className="relative">
      <div className=" container mx-auto flex justify-between flex-col lg:flex-col md:flex-nowrap items-center flex-wrap md:container md:mx-auto">
        <div className="flex flex-col gap-5 flex flex-row gap-5 px-6 rounded-xl py-4 -mt-200 mb-10">

          <p className="text-5xl font-bold text-black place-self-center ">Nos Services</p>
          <p className="text-lg text-black ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.
          </p>
        </div>
        <div className="flex flex-row gap-10 md:flex-nowrap">
            <div className="flex gap-10 basis-1/2">
              <div className="flex flex-col gap-15 items-start bg-[#81818B]/10 px-6 rounded-xl py-4 mt-50 h-96 hover:shadow-indigo-500/40 basis-1/2">
                <img className="h-17 place-self-center" src="/assets/5-.png" alt="" />
                <p className="text-xl font-semibold text-black place-self-center mb-4">Opération et maintenance </p>
                <p className="text-base text-black ">Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna  adipiscing praesent velit.</p>
              </div>
              <div className="flex flex-col gap-15 items-start bg-[#81818B]/10 px-6 rounded-xl py-4 -mt-50 h-96 hover:shadow-indigo-500/40 basis-1/2">
                <img className="h-15 place-self-center" src="/assets/3-.png" alt="" />
                <p className="text-xl font-semibold text-black text-black place-self-center mb-4">Ingénierie </p>
                <p className="text-base text-black ">Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna  adipiscing praesent velit.</p>
              </div>
            </div>
            <div className="flex gap-10 basis-1/2">
              <div className="flex flex-col gap-5 items-start bg-[#81818B]/10 px-6 rounded-xl py-4 -mt-50 h-96 hover:shadow-indigo-500/40 basis-1/2">
                <img className="h-17 place-self-center" src="/assets/4-.png" alt="" />
                <p className="text-xl font-semibold text-black place-self-center">Conseil</p>
                <p className="text-base text-black ">Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.</p>
              </div>
              <div className="flex flex-col gap-5 items-start bg-[#81818B]/10 px-6 rounded-xl py-4 -mt-50 h-96 hover:shadow-indigo-500/40 basis-1/2">
                <img className="h-15 place-self-center" src="/assets/2-.png" alt="" />
                <p className="text-xl font-semibold text-black place-self-center">Exécution et pilotage</p>
                <p className="text-base text-black ">Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.</p>
              </div>
            </div>
        </div>
        <button className="btn btn-primary w-32 bg-[#FAAE12] rounded-full border border-gray-500 hover:bg-transparent place-self-center w-1/4 mt-10">
            All Services
          </button>
      </div>
    </div>
  );
};

export default Service;
