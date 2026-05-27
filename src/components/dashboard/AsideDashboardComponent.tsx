"use client";

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  HiChartPie,
  HiShoppingBag,
  HiCog,
  HiNewspaper,
} from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AsideDashboardComponent() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: HiChartPie,
    },
    {
      label: "Blogs",
      href: "/dashboard/blogs",
      icon: HiNewspaper,
    },
    {
      label: "Products",
      href: "/dashboard/products",
      icon: HiShoppingBag,
    },
    {
      label: "Setting",
      href: "/dashboard/setting",
      icon: HiCog,
    },
  ];

  return (
    <Sidebar aria-label="Dashboard sidebar navigation">
      <SidebarItems>
        <SidebarItemGroup>
          {navItems.map(({ label, href, icon }) => (
            <SidebarItem
              key={href}
              as={Link}
              href={href}
              icon={icon}
              active={pathname === href || pathname.startsWith(href + "/")}
            >
              {label}
            </SidebarItem>
          ))}
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
