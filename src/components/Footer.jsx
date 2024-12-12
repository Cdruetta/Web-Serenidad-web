import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { CiLocationOn } from 'react-icons/ci';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BgHeader from "./Header.module.css";
import bgFooter from './Footer.module.css';

const iconsStyles = { color: 'white', fontSize: '50px', padding: '8px' };

function Footer() {
    return (
        <>
            <div className={bgFooter.bgFooter}>
                <div>
                    {/* Sección de redes sociales */}
                    <div className={bgFooter.followConteiner}>
                        <h1 className={bgFooter.bgTitle}>Seguinos en nuestras redes sociales</h1>
                        <a
                            href="https://www.instagram.com/serenidadriocuarto"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram style={iconsStyles} />
                        </a>
                        <a
                            href="https://www.facebook.com/people/Serenidad/61559223890617"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook style={iconsStyles} />
                        </a>
                    </div>

                    {/* Contenedor principal */}
                    <Container className={bgFooter.containerWithLines}>
                        {/* Información de contacto */}
                        <div className={bgFooter.followContact}>
                            <CgMail style={iconsStyles} />
                            <p className={bgFooter.bgSubtitle}>giseponzio@gmail.com</p>
                            <CiLocationOn style={iconsStyles} />
                            <p className={bgFooter.bgSubtitle}>Rio Cuarto, Cordoba - Venta exclusiva online</p>
                        </div>
                    </Container>
                    {/* Copyright */}
                    <div className={bgFooter.finally}>
                        <Row>
                            <Col>
                                Copyright By GCsoft-2024 - Todos los derechos reservados
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
