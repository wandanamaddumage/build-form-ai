import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BsBoxFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";

export function BreadcrumbInCreateForm() {
  return (
    <div className="flex items-center justify-between m-6 mb-0">
      <Breadcrumb className="text-xs">
        <BreadcrumbList className="flex items-center text-xs">
          <BreadcrumbItem>
            <BreadcrumbLink className="flex items-center hover:text-indigo-500 font-medium">
              <BsBoxFill className="mr-1 text-xs" />
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-medium text-xs">
              Form m1c9z305
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <IoMdSettings className="text-sm" />
    </div>
  );
}
