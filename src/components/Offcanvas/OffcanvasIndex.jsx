import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Hamburger from "../icons/Hamburger";
import style from "./OffcanvasIndex.module.css";
const OffcanvasIndex = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Hamburger onClick={handleShow} className={style.hamburger} />

      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>BCR</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className={style.listMenu}>
            <li>
              <a href="#ourService">Our Services</a>
            </li>
            <li>
              <a href="#whyUs">Why Us</a>
            </li>
            <li>
              <a href="#testimony">Testimony</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasIndex;
