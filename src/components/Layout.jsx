import React from "react";
import { Appbar, Footer } from "../components";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
      <div className='w-full h-full flex flex-col items-center bg-inherit min-w-90 min-h-96 p-2 md:py-[2vh] md:px-[10vw]'>
        <Appbar />
          <Outlet />
        <Footer />
      </div>
    );
}
