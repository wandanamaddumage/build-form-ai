import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaCloud } from "react-icons/fa";
import { HiMiniStopCircle } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { MdDelete, MdOutlineMenu } from "react-icons/md";
import CreateWelcomeScreen from "./components/WelcomScreen";
import CreateEndScreen from "./components/EndScreen";
import { RiCloseFill } from "react-icons/ri";
import { AddField } from "./components/AddField";

const Content = () => {
  const [isOpenWelcomScreen, setIsOpenWelcomScreen] = useState(false);
  const [isOpenEndScreen, setIsOpenEndScreen] = useState(false);

  return (
    <div className="mt-10">
      <div>
        <div>
          <h1 className="flex items-center gap-2 font-semibold text-sm border-none">
            <MdOutlineMenu /> Steps
          </h1>
          <div className="my-1 text-xs">
            The steps users will take to complete the form
          </div>
        </div>
        <div>
          <div>
            <Button
              variant="ghost"
              className="my-5 w-60 bg-zinc-50 hover:bg-zinc-100 flex font-normal text-xs"
              onClick={() => setIsOpenWelcomScreen(true)}
            >
              <HiMiniStopCircle className="w-1/6 text-zinc-400" />
              <div className="w-5/6 justify-center">Welcome screen</div>
            </Button>
            <div
              className={`fixed inset-y-0 left-0 w-80 bg-white p-5 transform transition-transform duration-300 ease-in-out ${
                isOpenWelcomScreen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 border"
                  onClick={() => setIsOpenWelcomScreen(false)}
                >
                  <RiCloseFill className="text-base font-bold" />
                </Button>
                <div className="flex items-center gap-2 text-sm font-medium mb-2">
                  <IoMdSettings />
                  Settings
                </div>
              </div>
              <CreateWelcomeScreen />
              <div className="mt-5 flex gap-2 justify-center">
                <Button
                  variant="ghost"
                  className="w-full lg:w-1/2 bg-black hover:bg-zinc-900 flex font-medium text-xs text-white hover:text-white gap-2 h-auto"
                  onClick={() => setIsOpenWelcomScreen(false)}
                >
                  <div className="justify-center">Save</div>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full lg:w-1/2 bg-white hover:bg-red-50 flex font-medium text-xs text-red-500 hover:text-red-500 gap-2 h-auto"
                  onClick={() => setIsOpenWelcomScreen(false)}
                >
                  <div className="justify-center">Discard</div>
                </Button>
              </div>
            </div>
          </div>

          <AddField />

          <hr className="my-8 border-t-2 border-zinc-100" />

          <div>
            <Button
              variant="ghost"
              className="w-60 bg-zinc-50 hover:bg-zinc-100 flex font-normal text-xs"
              onClick={() => setIsOpenEndScreen(true)}
            >
              <HiMiniStopCircle className="w-1/6 text-zinc-400" />
              <div className="w-5/6 justify-center">End screen</div>
            </Button>
            <div
              className={`fixed inset-y-0 left-0 w-80 bg-white p-5 transform transition-transform duration-300 ease-in-out ${
                isOpenEndScreen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 border"
                  onClick={() => setIsOpenEndScreen(false)}
                >
                  <RiCloseFill className="text-base font-bold" />
                </Button>
                <div className="flex items-center gap-2 text-sm font-medium mb-2">
                  <IoMdSettings />
                  Settings
                </div>
              </div>
              <CreateEndScreen />
              <div className="mt-5 flex gap-2 justify-center">
                <Button
                  variant="ghost"
                  className="w-full lg:w-1/2 bg-black hover:bg-zinc-900 flex font-medium text-xs text-white hover:text-white gap-2 h-auto"
                  onClick={() => setIsOpenEndScreen(false)}
                >
                  <div className="justify-center">Save</div>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full lg:w-1/2 bg-white hover:bg-red-50 flex font-medium text-xs text-red-500 hover:text-red-500 gap-2 h-auto"
                  onClick={() => setIsOpenEndScreen(false)}
                >
                  <div className="justify-center">Discard</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-60 flex gap-2 justify-center">
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
