import React, { Component } from 'react';
import logo from "../../../public/images/logo.svg";
import '../styles/style.scss';

class Header extends Component {
    listInputs = ["About", "Careers", "Events", "Products", "Support"];
    render() {
        return (
            <>
                <div className='header'style={{backgroundImage:"url(../images/image-heroPC.jpg)"}}>
                    <nav>
                        <img src={logo} alt="" />
                        <ul>
                            {
                                this.listInputs.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }

                        </ul>
                    </nav>
                    <aside>
                        <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
                    </aside>
                </div>
            </>
        )
    }
}
export default Header;







