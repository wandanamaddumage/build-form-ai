import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Content from "./content";

const tabs = [
  { value: "content", label: "Content", content: <Content /> },
  { value: "design", label: "Design", content: "Design tab" },
  { value: "share", label: "Share", content: "Share tab" },
  { value: "replies", label: "Replies", content: "Replies tab" },
];

export default function TabList() {
  return (
    <Tabs defaultValue="content" className=" max-w-3xl m-5">
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 rounded-lg bg-background p-1 shadow-sm gap-2 bg-zinc-100">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="rounded-md px-3 py-1.5 text-sm font-normal transition-all data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-md"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="mt-4 rounded-lg bg-white p-4 h-full"
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
