/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import menu_data from "@/data/MenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const NavMenu = () => {
    const pathname = usePathname();
    const [navTitle, setNavTitle] = useState("");

    // const isMenuItemActive = (menuLink: string) => pathname === menuLink;

    const openMobileMenu = (menu: string) => {
        setNavTitle((prev) => (prev === menu ? "" : menu));
    };

    return (
        <>
            {menu_data.map((menu: any) => (
                <li key={menu.id} className={`nav-item dropdown ${menu.class_name}`}>
                    <Link href={menu.link} className={`nav-link dropdown-toggle ${pathname === menu.link ? 'active' : ''}
                     ${navTitle === menu.title ? "show" : ""}`} onClick={() => openMobileMenu(menu.title)} >{menu.title} </Link>

                    <ul className={`dropdown-menu ${navTitle === menu.title ? "show" : ""}`}>

                        {menu.mega_menus &&
                            <li className="pe-3 ps-3">
                                <div className="row gx-3">
                                    {menu.mega_menus.map((mega_m: any, index: any) => (
                                        <div key={index} className="col-lg-3">
                                            <Link href={mega_m.link} className="home-item w-100">
                                                <div className="img-item"><Image src={mega_m.img} alt="" className="w-100" /></div>
                                                <span>{mega_m.title}</span>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        }

                        {menu.feature_menus &&
                            <li className="row gx-1">
                                {menu.feature_menus.map((f_menu: any) => (
                                    <div key={f_menu.id} className="col-lg-4">
                                        <div className="menu-column">
                                            <h6 className="mega-menu-title">{f_menu.sub_title}</h6>
                                            <ul className="style-none mega-dropdown-list">
                                                {f_menu.menus.map((f_sub_menu: any, i: any) => (
                                                    <li key={i}><Link href={f_sub_menu.link} className="dropdown-item"><span>{f_sub_menu.title}</span></Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </li>
                        }

                        {menu.sub_menus &&
                            menu.sub_menus.map((sub_m: any, i: any) => (
                                <li key={i}><a href={sub_m.link} className="dropdown-item"><span>{sub_m.title}</span></a></li>
                            ))}
                    </ul>
                </li>
            ))}
        </>
    );
};

export default NavMenu;
