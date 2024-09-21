import { Button } from "@/components/ui/button";
import { FaCloud } from "react-icons/fa";
import { HiMiniStopCircle } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { MdDelete, MdOutlineMenu } from "react-icons/md";

const Content = () => {
  return (
    <div className="mt-10">
      <div>
        <div>
          <h1 className="flex items-center gap-2 font-semibold text-sm">
            <MdOutlineMenu /> Steps
          </h1>
          <div className="my-1 text-xs">
            The steps users will take to complete the form
          </div>
        </div>
        <div>
          <Button
            variant="ghost"
            className="my-5 w-60 bg-zinc-50 hover:bg-zinc-100 flex font-normal text-xs"
          >
            <HiMiniStopCircle className="w-1/6 text-zinc-400" />
            <div className="w-5/6 justify-center">Welcome screen</div>
          </Button>
          <Button
            variant="outline"
            className="my-5 hover:bg-zinc-100 flex font-medium text-xs gap-2 h-auto"
          >
            <IoMdAdd />
            Add Field
          </Button>
          <hr className="my-8 border-t-2 border-zinc-100" />
          <Button
            variant="ghost"
            className="w-60 bg-zinc-50 hover:bg-zinc-100 flex font-normal text-xs"
          >
            <HiMiniStopCircle className="w-1/6 text-zinc-400" />
            <div className="w-5/6 justify-center">End screen</div>
          </Button>
        </div>
      </div>
      <div className="mt-64 flex gap-2 justify-center">
        <Button
          variant="ghost"
          className="w-full lg:w-1/2 bg-black hover:bg-zinc-900 flex font-medium text-xs text-white hover:text-white gap-2 h-auto"
        >
          <FaCloud className="text-white" />
          <div className="justify-center">Save & Publish</div>
        </Button>
        <Button
          variant="ghost"
          className="w-full lg:w-1/2 bg-white hover:bg-red-50 flex font-medium text-xs text-red-500 hover:text-red-500 gap-2 h-auto"
        >
          <MdDelete className="text-red-500" />
          <div className="justify-center">Delete</div>
        </Button>
      </div>
    </div>
  );
};

export default Content;
