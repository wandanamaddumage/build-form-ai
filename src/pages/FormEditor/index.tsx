import Menu from "./components/Menu";
import TasksSection from "./components/TaskSection";

const FormEditor = () => {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <div className="w-full lg:w-1/5">
        <Menu />
      </div>
      <div className="w-full lg:w-4/5">
        <TasksSection />
      </div>
    </div>
  );
};

export default FormEditor;
