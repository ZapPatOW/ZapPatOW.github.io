import React from "react";
import { Link } from "react-router-dom";

const MyFooter = () => {
    return (
        <div className = "footer">
            <h1 className = "title">About me</h1>
            <p>
                Name: Patrick Meinen<br />
                Email: patricklmeinen@gmail.com<br />
                Programming languages: Python, Java, C, HTML, JavaScript, CSS, SQLite<br />
                Certifications: Back-End Developer - Mimo.org
            </p>
        </div>
    )
}

export default MyFooter;