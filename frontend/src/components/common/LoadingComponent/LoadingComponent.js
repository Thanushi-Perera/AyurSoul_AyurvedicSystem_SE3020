import React, { Component } from "react";
import ReactLoading from "react-loading";
import LogoImg from "../../../assets/img/HomePage/logo.png";
import newLogoImg from "../../../assets/img/HomePage/newLogoCropped.png";
import "./LoadingComponent.css";

export class LoadingComponent extends Component {
  render() {
    return (
      <div className="">
        <div className="container LoadingDiv text-center">
          <img
            src={newLogoImg}
            alt="loadingImg"
            className="img-fluid LoadingImg"
          />
          <ReactLoading
            type="bars"
            color="#cf8a29"
            height={100}
            width={150}
            className="container text-center"
          />
        </div>
      </div>
    );
  }
}

export default LoadingComponent;
