import { Input } from "@/components/ui/input";

const CreateEndScreen = () => {
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
      </div>
    </div>
  );
};

export default CreateEndScreen;
