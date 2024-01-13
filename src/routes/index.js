// All components mapping with path for internal routes

import { lazy } from "react";
const Welcome = lazy(() => import("../pages/protected/Welcome"));
const Page404 = lazy(() => import("../pages/protected/404"));
const GettingStarted = lazy(() => import("../pages/GettingStarted"));
const AddInstitute = lazy(() => import("../pages/protected/AddInstitute"));
const MainDashboard = lazy(() => import("../pages/protected/MainDashbord"));
const AddTechnology = lazy(() => import("../pages/protected/AddTechnology"));
const DailyActivities = lazy(() =>
  import("../pages/protected/DailyActivities")
);
const SubmitInfo = lazy(() => import("../pages/protected/SubmitInfo"));
const BanchResources = lazy(() =>
  import("../features/banchresourcemenu/Banchresourcesmenu")
);
const Notice = lazy(() => import("../pages/protected/Notice"));
const UserNotice = lazy(() => import("../features/Notice/Notice"));
const Certificate = lazy(() => import("../pages/protected/Certificate"));
const RegisterUser = lazy(() => import("../pages/protected/Register"));
const ALLCertificate = lazy(() =>
  import("../features/certificate/Certificate")
);
const SingleUserDetails = lazy(() =>
  import("../features/user/SingleUserDetails.js")
);
const UserInfoProfile = lazy(() =>
  import("../features/user/UserInfoProfile.js")
);

const routes = [
  {
    path: "/welcome", // the url
    component: Welcome, // view rendered
  },

  {
    path: "/getting-started",
    component: GettingStarted,
  },

  {
    path: "/404",
    component: Page404,
  },

  {
    path: "/add-institute",
    component: AddInstitute,
  },
  {
    path: "/l&d-dashbord",
    component: MainDashboard,
  },
  {
    path: "/add-technology",
    component: AddTechnology,
  },
  {
    path: "/daily-activities",
    component: DailyActivities,
  },
  {
    path: "/student-details",
    component: SubmitInfo,
  },

  {
    path: "/banch-resources",
    component: BanchResources,
  },
  {
    path: "/banch-resources/notice",
    component: Notice,
  },
  {
    path: "/banch-resources/certificate",
    component: Certificate,
  },
  {
    path: "/notice",
    component: UserNotice,
  },
  {
    path: "/certificate",
    component: ALLCertificate,
  },
  {
    path: "/register-user",
    component: RegisterUser,
  },
  {
    path: "/register-user/userallDetails/:id",
    component: SingleUserDetails,
  },
  {
    path: "/profile",
    component: UserInfoProfile,
  },
];
export default routes;
