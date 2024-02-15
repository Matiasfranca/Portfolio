import { Outlet } from "react-router-dom";
import Header from "./Header";
import Options from "./Options";
import Switch from "./Switch";
import { useState } from "react";

function get() {
    const thema = localStorage.getItem("thema")
    if (thema)
        switch (thema) {
            case "true":
                return true

            case "false":
                return false
        }
    else
        return true
}

export default function Box() {
    const [thema, UseThema] = useState(get());

    return (
        <div className={`body ${thema ? 'light' : 'black'}`}>
            <div className={`container ${thema ? 'container-bgl' : 'container-bgb'}`}>
                <Header />
                <Options />
                <Outlet />
                <Switch thema={[thema, UseThema]} />
            </div>
        </div>
    )
}