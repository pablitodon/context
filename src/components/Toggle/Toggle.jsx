import React, { useState,useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import styles from './toggle.css';

const Toggle = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="labe">
            <div className="switch">
                <label className="labelHello">Hello Context </label>
                <button className={`text-lg font-bold mt-5 px-1  ${darkMode ? 'button' : 'darkButton'}`}
                    onClick={() => toggleTheme()}
                >
                    On/Off
                </button>
            </div>
        </div>
    )
}

export default Toggle;


