import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AiOutlineUpload } from "react-icons/ai";

const CreateWelcomeScreen = () => {
  return (
    <div className="py-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Title
          </label>
          <Input id="title" placeholder="Welcome to our form" />
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Description
          </label>
          <Input id="title" placeholder="This is a description of the form" />
        </div>

        <div>
          <label
            htmlFor="buttonText"
            className="block text-sm font-medium mb-2"
          >
            Button Text
          </label>
          <Input id="buttonText" placeholder="Start" />
        </div>

        <Button
          variant="outline"
          className="my-5 hover:border-black flex font-medium text-sm gap-2 h-auto"
        >
          <AiOutlineUpload />
          Upload
        </Button>
      </div>
    </div>
  );
};

export default CreateWelcomeScreen;
