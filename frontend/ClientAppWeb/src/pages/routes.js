import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from "./layouts/DashboardLayout";
import NotFound from "./layouts/NotFound";
import Pharmacies from "./pharmacies/Pharmacies";
import PharmacyAdd from "./pharmacies/Create";
import PharmacyEdit from "./pharmacies/Edit";
import PharmaciesMap from "./map/pharmaciesMap";

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Navigate to="/pharmacies" replace/> },
        { path: 'pharmacies', element: <Pharmacies /> },
        { path: 'pharmacies/add', element: <PharmacyAdd /> },
        { path: 'pharmacies/edit/:id', element: <PharmacyEdit /> },
        { path: 'map', element: <PharmaciesMap /> },
      ]
    },
    {path: '/404', element: <NotFound/>},
    {path:'*', element: <Navigate to="/404" replace/>}
  ])
}

export default Routes;