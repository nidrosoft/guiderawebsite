/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ToastContainer } from "react-toastify";

const Wrapper = ({ children }: any) => {

    return <>
        {children}
        <ToastContainer position="top-center" />
    </>;
}

export default Wrapper
