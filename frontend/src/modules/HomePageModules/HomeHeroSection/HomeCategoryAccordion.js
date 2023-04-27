import React, { Component } from "react";
import LogoImg from "../../../assets/img/HomePage/logo.png";
import newLogoImg from '../../../assets/img/HomePage/newLogoCropped.png';

export class HomeCategoryAccordion extends Component {
  render() {
    return (
      <div >
        <div className="text-center">
          <img
            src={newLogoImg}
            alt="logo"
            style={{ width: "250px", height: "250px" }}
          />
        </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                BABY CARE
              </button>
            </h2>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                SKIN CARE
              </button>
            </h2>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                MIND & BODY
              </button>
            </h2>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                FRAGRANCES
              </button>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCategoryAccordion;
