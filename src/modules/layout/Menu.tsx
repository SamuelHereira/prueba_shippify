import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { resetCompanySelectedId } from "../companies/slices/companiesSlice";
import { resetDriverSelectedId } from "../drivers/slices/DriversSlice";
import { resetvehicleSelectedId } from "../vehicles/slices/VehiclesSlice";
import { StyledMenu, StyledMenuItem } from "./components/StyledMenu";

const menuItems = [
  {
    name: "Companies",
    link: "/companies",
  },
];

const Menu = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(resetCompanySelectedId());
    dispatch(resetvehicleSelectedId());
    dispatch(resetDriverSelectedId());
  };

  return (
    <StyledMenu>
      {menuItems.map((item, index) => (
        <StyledMenuItem key={index} onClick={handleClick}>
          <Link to={item.link}>{item.name}</Link>
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );
};

export default Menu;
