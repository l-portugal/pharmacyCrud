import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import LocalPharmacy from "@mui/icons-material/LocalPharmacy";
import MapIcon from '@mui/icons-material/Map';
import { useNavigate } from "react-router-dom";

const MenuItems = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate("/pharmacies")}>
        <ListItemIcon>
          <LocalPharmacy />
        </ListItemIcon>
        <ListItemText primary="Farmacias" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/map")}>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="Mapa" />
      </ListItemButton>
    </React.Fragment>
  );
};

export default MenuItems;
