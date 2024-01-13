/** Icons are imported separatly to reduce build time */
import AcademicCapIcon from "@heroicons/react/24/outline/AcademicCapIcon";
import ArrowRightOnRectangleIcon from "@heroicons/react/24/outline/ArrowRightOnRectangleIcon";
import BarsArrowDownIcon from "@heroicons/react/24/outline/BarsArrowDownIcon";
import BellAlertIcon from "@heroicons/react/24/outline/BellAlertIcon";
import DocumentCheckIcon from "@heroicons/react/24/outline/DocumentCheckIcon";
import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";
import NewspaperIcon from "@heroicons/react/24/outline/NewspaperIcon";
import PlusCircleIcon from "@heroicons/react/24/outline/PlusCircleIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "/app/notice", // url
    icon: <BellAlertIcon className={iconClasses} />, // icon component
    name: "Notice", // name that appear in Sidebar
  },
  {
    path: "/app/l&d-dashbord", // url
    icon: <AcademicCapIcon className={iconClasses} />, // icon component
    name: "L&D Dashbord", // name that appear in Sidebar
  },
  {
    path: "/app/certificate",
    icon: <NewspaperIcon className={iconClasses} />,
    name: "Certificate",
  },

  {
    path: "/app/banch-resources",
    icon: <BarsArrowDownIcon className={iconClasses} />,
    name: "Banch-Resources",
  },
  {
    path: "/app/daily-activities", // url
    icon: <InboxArrowDownIcon className={iconClasses} />, // icon component
    name: "Daily Activity", // name that appear in Sidebar
  },
  {
    path: "/app/student-details", // url
    icon: <DocumentCheckIcon className={iconClasses} />, // icon component
    name: "Submit Your Info", // name that appear in Sidebar
  },

  {
    path: "/app/add-institute", // url
    icon: <AcademicCapIcon className={iconClasses} />, // icon component
    name: "Add Institute", // name that appear in Sidebar
  },

  {
    path: "/app/add-technology", // url
    icon: <PlusCircleIcon className={iconClasses} />, // icon component
    name: "Add Technology", // name that appear in Sidebar
  },

  {
    path: "/app/register-user", // url
    icon: <UsersIcon className={iconClasses} />, // icon component
    name: "Register User", // name that appear in Sidebar
  },
  {
    path: "/app/profile", // url
    icon: <UsersIcon className={iconClasses} />, // icon component
    name: "Profile", // name that appear in Sidebar
  },
];

export default routes;
