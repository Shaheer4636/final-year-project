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

import AdminLogin from "./../components/AdminLogin.vue"
import AdminOtpVerification from "./../components/AdminOtpVerification.vue"
import AdminDashboard from "./../components/AdminDashboard.vue"



// navbar components: HomePage, About and Contactus
import Contactus from "./../components/Contactus.vue";
import Aboutus from "./../components/Aboutus.vue";



//New components imported 18-04-2024
import UserRegistrationTesting2 from "./../components/UserRegistrationTesting2.vue";
import OtpVerificationWithAdditionalInformation from "./../components/OtpVerificationWithAdditionalInformation.vue";


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

// New components
{
  path:"/UserRegistrationTesting2",
  name:"UserRegistrationTesting2",
  component: UserRegistrationTesting2
},
{
  path: "/OtpVerificationWithAdditionalInformation",
  name: "OtpVerificationWithAdditionalInformation",
  component: OtpVerificationWithAdditionalInformation
},
      

  ],
});

export default router;
