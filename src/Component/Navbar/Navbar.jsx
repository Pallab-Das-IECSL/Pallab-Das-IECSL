import React from "react"

import pic from '../../assets/img/logo.png';
const Navbar = () => {
    return (

        <>
            <div id="topbar" class="d-flex align-items-center fixed-top">
                <div class="container d-flex justify-content-between">
                    <div class="contact-info d-flex align-items-center">
                        <a href="#" class="business-btn scrollto"><span class="d-none d-md-inline">Call for Business /</span> Trade Enquiries </a>
                    </div>
                    <div class="d-lg-flex social-links align-items-center">
                        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                        <a href="#" class="linkedin"><i class="bi bi-pinterest"></i></a>
                    </div>
                </div>
            </div>

            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    <a href="index.html" class="logo me-auto">
                        <img src={pic} alt="" class="img-fluid" />
                    </a>

                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                            <li class="dropdown"><a href="#"><span> About </span> <i class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#"> At a Glance </a></li>
                                    <li><a href="#"> Board of Directors </a></li>
                                    <li><a href="#"> Milestones </a></li>
                                    <li><a href="#"> Values &amp; Ethics </a></li>
                                    <li><a href="#"> Quality Policy </a></li>
                                    <li><a href="#"> Values &amp; Ethics </a></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a href="#"><span> Products </span> <i class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#"> Gynaecological </a></li>
                                    <li><a href="#"> Paediatric </a></li>
                                    <li><a href="#"> General </a></li>
                                    <li><a href="#"> Ayurvedic </a></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a href="#"><span> Business </span> <i class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#"> Institutional Business </a></li>
                                    <li><a href="#"> Contract Manufacturing </a></li>
                                </ul>
                            </li>
                            <li><a class="nav-link scrollto" href="#"> Formulation &amp; Development </a></li>
                            <li class="dropdown"><a href="#"><span> Career </span> <i class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li class="dropdown"><a href="#"><span> Life </span> <i class="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">  Why Choose Mendine </a></li>
                                            <li><a href="#"> Recreation </a></li>
                                            <li><a href="#"> Community Caring </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"> People Development </a></li>
                                    <li><a href="#"> Opportunities </a></li>
                                </ul>
                            </li>
                            <li><a class="nav-link scrollto" href="#"> Drug Safety </a></li>
                            <li><a class="nav-link scrollto" href="#"> Contact Us </a></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Navbar;