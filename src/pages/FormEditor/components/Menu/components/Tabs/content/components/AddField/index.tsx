import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AiOutlineEdit, AiOutlinePhone } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { GrCircleInformation } from "react-icons/gr";
import { IoCheckboxOutline, IoDocumentTextOutline } from "react-icons/io5";
import { MdAdd, MdOutlineMailOutline } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";

export function AddField() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="my-5 hover:bg-zinc-100 flex font-medium text-xs gap-2 h-auto"
        >
          <MdAdd className="font-bold" />
          Add Field
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <h1 className="flex items-center gap-2 font-semibold text-sm border-none">
          Add Field
        </h1>
        <div className="grid grid-cols-4 gap-2 text-xs justify-start">
          <Button
            variant="ghost"
            className="hover:bg-white hover:text-black text-zinc-600 hover:text-sm justify-start gap-2"
          >
            <IoCheckboxOutline />
            Multiple Choice
          </Button>
          <Button
            variant="ghost"
            className="gap-2 hover:bg-white hover:text-black text-zinc-600 hover:text-sm justify-start"
          >
            <AiOutlineEdit />
            Short Text
          </Button>
          <Button
            variant="ghost"
            className="gap-2 hover:bg-white hover:text-black text-zinc-600 hover:text-sm justify-start"
          >
            <MdOutlineMailOutline />
            Email
          </Button>
          <Button
            variant="ghost"
            className="gap-2 hover:bg-white hover:text-black text-zinc-600 hover:text-sm justify-start"
          >
            <RiArrowDropDownLine className="w-3 h-3" />
            DropDown
          </Button>
          <Button
            variant="ghost"
            className="gap-2 hover:bg-white hover:text-black text-zinc-600 hover:text-sm justify-start"
          >
            <AiOutlinePhone />
            Phone Number
          </Button>
          <Button
            variant="ghost"
            className="gap-2 hover:bg-white hover:text-black text-zinc-600 hover:text-sm justify-start"
          >
            <FiEdit />
            Section
          </Button>
          <Button
            variant="ghost"
            className="gap-1 hover:bg-white hover:text-black text-zinc-600 hover:text-sm justify-start"
          >
            <GrCircleInformation />
            Contact Info
          </Button>
          <Button
            variant="ghost"
            className="gap-1 hover:bg-white hover:text-black text-zinc-600 hover:text-sm justify-start"
          >
            <IoDocumentTextOutline />
            Legal
          </Button>
          <Button
            variant="ghost"
            className="gap-2 hover:bg-white hover:text-black text-zinc-600 hover:text-sm justify-start"
          >
            <TfiWorld />
            Country
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
