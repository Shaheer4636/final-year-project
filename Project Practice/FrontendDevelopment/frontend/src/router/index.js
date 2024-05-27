import { createRouter, createWebHistory } from "vue-router";
import Body from "./../components/Body.vue";
import UserLogin from "./../components/UserLogin.vue";
import UserDashboard from "./../components/UserDashboard.vue";
import Login from "./../components/Login.vue";
import UserResourceRequest from "./../components/UserDashboardComponents/UserResourceRequest.vue";
import UserMLPipeLines from "./../components/UserDashboardComponents/UserMLPipeLines.vue";
import UserAccessKubeflow from "./../components/UserDashboardComponents/UserAccessKubeflow.vue";
import UserAccessKatib from "./../components/UserDashboardComponents/UserAccessKatib.vue";
import UserMLNoteBooks from "./../components/UserDashboardComponents/UserMLNoteBooks.vue";
import UserResourceUtilization from "./../components/UserDashboardComponents/UserResourceUtilization.vue";
// import UserRegistration from "./../components/UserRegistration.vue"
import HomePage from "./../components/HomePage.vue";
// -----------------------------------------------------------
import UserRegistration from "./../components/UserRegistration.vue"
import AdminRegistration from "./../components/AdminRegistration.vue"

import RegistrationSuccess from "./../components/RegistrationSuccess.vue"
import PendingUserRequest from "./../components/PendingUserRequest.vue"
import OtpVerification from "./../components/OtpVerification.vue"

// ----------------- Admin --------------------------
import AdminLogin from "./../components/AdminLogin.vue"
import AdminOtpVerification from "./../components/AdminOtpVerification.vue"
import AdminDashboard from "./../components/AdminDashboardComponents/AdminDashboard.vue"
import AdminResouceConsuption from "./../components/AdminDashboardComponents/Admin-Consuption.vue"
import AdminClusterInfo from "@/components/AdminDashboardComponents/AdminClusterInfo.vue"
import AdminListPods from "@/components/AdminDashboardComponents/AdminListPods.vue"
import AdminDashboardResourcesList from "@/components/AdminDashboardComponents/AdminDashboardResourcesList.vue";
import AdminStackInformation from "@/components/AdminDashboardComponents/AdminStackInfo.vue";







// navbar components: HomePage, About and Contactus
import Contactus from "./../components/Contactus.vue";
import Aboutus from "./../components/Aboutus.vue";



//New components imported 18-04-2024
import UserRegistrationTesting2 from "./../components/UserRegistrationTesting2.vue";
import OtpVerificationWithAdditionalInformation from "./../components/OtpVerificationWithAdditionalInformation.vue";
import Userprofile from "@/components/UserDashboardComponents/Userprofile.vue";
import Admintasklist from "@/components/UserDashboardComponents/Admintasklist.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // navbar components
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/Contactus",
      name: "Contactus",
      component: Contactus,
    },
    {
      path: "/Aboutus",
      name: "Aboutus",
      component: Aboutus,
    },

    // user related things
    {
      path: "/userlogin",
      name: "Login",
      component: UserLogin,
    },

    {
      path: "/user-dashboard",
      name: "userdashboard",
      component: UserDashboard,
    },
    {
      path: "/resource-request",
      name: "resource-request", // Corrected case
      component: UserResourceRequest,
    },
    {
      path: "/ml-pipelines",
      name: "ml-pipelines",
      component: UserMLPipeLines,
    },
    {
        path: "/katib",
        name: "katib",
        component: UserAccessKatib,
      },
      {
        path: "/notebooks",
        name: "notebooks",
        component: UserMLNoteBooks,
      },
      {
        path: "/kubeflow",
        name: "kubeflow",
        component: UserAccessKubeflow,
      },
      {
        path: "/resource-utilization",
        name: "resource-utilization",
        component: UserResourceUtilization,
      },
      {
        path: "/UserRegistration",
        name: "UserRegistration",
        component: UserRegistration
    },

    // admin related stuff
    {
        path: "/AdminRegistration",
        name: "AdminRegistration",
        component: AdminRegistration
    },
    {
      path:"/registration-success",
      name:"RegistrationSuccess",
      component:RegistrationSuccess
  },
  {
      path:"/PendingUserRequest",
      name:"PendingUserRequest",
      component:PendingUserRequest
  },
  {
    path: "/OtpVerification",
    name: "OtpVerification",
    component: OtpVerification
},
{
  path: "/AdminOtpVerification",
  name: "AdminOtpVerification",
  component: AdminOtpVerification
},
{
  path:"/admindashboard",
  name:"AdminDashboard",
  component: AdminDashboard
},
{
  path:"/adminlogin",
  name:"AdminLogin",
  component: AdminLogin
},
{
  path:"/userprofile",
  name:"userprofile",
  component: Userprofile
},

{
  path:"/getPodsInformation",
  name:"adminresouceslist",
  component: AdminDashboardResourcesList
},

// New components
{
  path:"/UserRegistrationTesting2",
  name:"UserRegistrationTesting2",
  component: UserRegistrationTesting2
},
{
  path:"/admintasklist",
  name:"admintasklist",
  component: Admintasklist
},
{
  path: "/OtpVerificationWithAdditionalInformation",
  name: "OtpVerificationWithAdditionalInformation",
  component: OtpVerificationWithAdditionalInformation
},



///----------------Admin Dashboard Componnets
{
  path: "/AdminClusterInfo",
  name: "AdminClusterInfo",
  component: AdminClusterInfo
},
{
  path: "/AdminListPods",
  name: "AdminListPods",
  component: AdminListPods
},
{
  path: "/Admin-resource-consumption",
  name: "adminresourceconsuption",
  component: AdminResouceConsuption
},
{
  path: "/Admin-stack-information",
  name: "adminstackinformation",
  component: AdminStackInformation
}




      

  ],
});





export default router;
