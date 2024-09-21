import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BsBoxFill } from "react-icons/bs";

export function BreadcrumbInCreateForm() {
  return (
    <Breadcrumb className="ml-6 mt-6 text-xs">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="flex items-center hover:text-indigo-500 text-xs font-medium">
            <BsBoxFill className="mr-1" />
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-xs font-medium">
            Form m1c9z305
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
