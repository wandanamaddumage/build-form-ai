import Menu from "./components/Menu";
import TasksSection from "./components/TaskSection";

const FormEditor = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/5">
        <Menu />
      </div>
      <div className="w-1/5">
        <TasksSection />
      </div>
    </div>
  );
};

export default FormEditor;
