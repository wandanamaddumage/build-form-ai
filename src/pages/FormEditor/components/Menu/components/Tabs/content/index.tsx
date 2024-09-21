import { Button } from "@/components/ui/button";
import { HiMiniStopCircle } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";

const Content = () => {
  return (
    <div>
      <div>
        <h1 className="flex items-center gap-2 font-semibold text-sm">
          <MdOutlineMenu /> Steps
        </h1>
        <div className="my-1 text-sm">
          The steps users will take to complete the form
        </div>
      </div>
      <div>
        <Button
          variant="ghost"
          className="my-5 w-72 bg-zinc-50 hover:bg-zinc-100 flex font-normal text-sm"
        >
          <HiMiniStopCircle className="absolute left-12 text-zinc-400" />
          <div className="justify-center">Welcome screen</div>
        </Button>
        <Button
          variant="outline"
          className="my-5 hover:bg-zinc-100 flex font-normal text-sm gap-2 h-auto"
        >
          <IoMdAdd />
          Add Field
        </Button>
        <hr className="my-8 border-t-2 border-zinc-100" />
        <Button
          variant="ghost"
          className="w-72 bg-zinc-50 hover:bg-zinc-100 flex font-normal text-sm"
        >
          <HiMiniStopCircle className="absolute left-12 text-zinc-400" />
          <div className="justify-center">End screen</div>
        </Button>
      </div>
    </div>
  );
};

export default Content;
