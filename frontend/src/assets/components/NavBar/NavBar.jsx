import React, { useState } from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import {navItems} from './navItems'
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="shadow-md w-full h-20 select-none	">
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <p className="font-bold text-inherit text-3xl py-1 bg-gradient-to-r   from-purple-500 to-pink-500 rounded-md pl-16 px-2 mr-2">BIKE</p>
        {/* <span className="font-medium text-xl  font-['Licorice'] ">Your next BIKE...</span> */}
      </NavbarBrand>
    </NavbarContent>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
    {navItems.map((item, index) => (
        <NavbarItem key={`${item}-${index}`}>
        <Link  to={item.href}>
          {item.slug}
        </Link>
      </NavbarItem>
      ))}
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link to="/login">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Link  to="/signup" >
          Sign Up
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarMenu className="bg-slate-100">
      {navItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            to={item.href}
            
          >
            {item.slug}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
  )
}
