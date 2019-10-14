import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = () => (
  <footer className="footer">
    <Link href="">Términos de uso</Link>
    <Link href="">Declaración de privacidad</Link>
    <Link href="">Centro de ayuda</Link>
  </footer>
);

export default Footer;
