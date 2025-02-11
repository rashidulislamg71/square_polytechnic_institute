import React from 'react';
import spi_logo from "../../assets/Images/SPI_Logo.png"
import styles from "./SPILogo.module.css";

const SPILogo = () => {
    return (
        <div className="flex items-center gap-1">
            <img className={`${styles.logo}`} src={spi_logo} alt="Square Polytechnic institute Logo" />
            <b className={`${styles.logo_text}`} >Square Polytechnic <br /> Institute</b>
        </div>
    );
};

export default SPILogo;