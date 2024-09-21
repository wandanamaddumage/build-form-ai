import { Button } from "@/components/ui/button";
import React from "react";

const TasksSection: React.FC = () => {
  return (
    <div className="flex justify-center m-2 p-2 md:p-2 lg:p-5 items-center min-h-screen rounded-2xl bg-black">
      <div className="m-2 p-6 md:p-10 lg:p-16 rounded-2xl bg-black text-white max-w-xl w-full">
        <h1 className="font-semibold text-4xl md:text-4xl text-left my-5 ml-0">
          Welcome to our form
        </h1>
        <h1 className="text-xl md:text-2xl text-left m-5 ml-0">
          This is a description of the form
        </h1>
        <div className="mt-4">
          <Button className="rounded-2xl bg-white text-black px-6 py-2 hover:bg-white">
            Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TasksSection;
