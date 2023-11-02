import { createBrowserRouter } from "react-router-dom";
import ContactDashboard from "../../features/contacts/dashboard/ContactDashboard";
import ContactDetailPage from "../../features/contacts/details/ContactDetailedPage";
import App from "../App";
import ContactForm from "../../features/contacts/form/ContactForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/contacts", element: <ContactDashboard /> },
      { path: "/contacts/:id", element: <ContactDetailPage /> },
      { path: "/manage/:id", element: <ContactForm /> },
      { path: "/create-contact", element: <ContactForm /> },
    ],
  },
]);
