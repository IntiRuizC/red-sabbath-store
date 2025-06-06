import React from "react";

import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import CartLength from "../common/CartLength";
import CategoryList2 from "./CategoryList2";
export default function Header17() {
  return (
    <header id="header" className="header-default header-style-6 mb-0">
      <div className="container-full2">
        <div className="row wrapper-header align-items-center mt-0 p-xl-0">
          <div className="col-md-4 col-3 d-xl-none">
            <a
              href="#mobileMenu"
              className="mobile-menu"
              data-bs-toggle="offcanvas"
              aria-controls="mobileMenu"
            >
              <i className="icon icon-categories" />
            </a>
          </div>
          <div className="col-xl-9 col-md-4 col-6">
            <div className="header-left justify-content-xl-start justify-content-center">
              <Link href={`/`} className="logo-header">
                <Image
                  alt="logo"
                  className="logo w-auto"
                  src="/images/logo/logo-2.svg"
                  width={131}
                  height={25}
                />
              </Link>
              <div className="tf-list-categories style-2 d-none d-xl-block">
                <a href="#" className="categories-title text-title">
                  <svg
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0078 3.75H5.50781C5.10999 3.75 4.72846 3.90804 4.44715 4.18934C4.16585 4.47064 4.00781 4.85218 4.00781 5.25V9.75C4.00781 10.1478 4.16585 10.5294 4.44715 10.8107C4.72846 11.092 5.10999 11.25 5.50781 11.25H10.0078C10.4056 11.25 10.7872 11.092 11.0685 10.8107C11.3498 10.5294 11.5078 10.1478 11.5078 9.75V5.25C11.5078 4.85218 11.3498 4.47064 11.0685 4.18934C10.7872 3.90804 10.4056 3.75 10.0078 3.75ZM10.0078 9.75H5.50781V5.25H10.0078V9.75ZM19.0078 3.75H14.5078C14.11 3.75 13.7285 3.90804 13.4472 4.18934C13.1658 4.47064 13.0078 4.85218 13.0078 5.25V9.75C13.0078 10.1478 13.1658 10.5294 13.4472 10.8107C13.7285 11.092 14.11 11.25 14.5078 11.25H19.0078C19.4056 11.25 19.7872 11.092 20.0685 10.8107C20.3498 10.5294 20.5078 10.1478 20.5078 9.75V5.25C20.5078 4.85218 20.3498 4.47064 20.0685 4.18934C19.7872 3.90804 19.4056 3.75 19.0078 3.75ZM19.0078 9.75H14.5078V5.25H19.0078V9.75ZM10.0078 12.75H5.50781C5.10999 12.75 4.72846 12.908 4.44715 13.1893C4.16585 13.4706 4.00781 13.8522 4.00781 14.25V18.75C4.00781 19.1478 4.16585 19.5294 4.44715 19.8107C4.72846 20.092 5.10999 20.25 5.50781 20.25H10.0078C10.4056 20.25 10.7872 20.092 11.0685 19.8107C11.3498 19.5294 11.5078 19.1478 11.5078 18.75V14.25C11.5078 13.8522 11.3498 13.4706 11.0685 13.1893C10.7872 12.908 10.4056 12.75 10.0078 12.75ZM10.0078 18.75H5.50781V14.25H10.0078V18.75ZM19.0078 12.75H14.5078C14.11 12.75 13.7285 12.908 13.4472 13.1893C13.1658 13.4706 13.0078 13.8522 13.0078 14.25V18.75C13.0078 19.1478 13.1658 19.5294 13.4472 19.8107C13.7285 20.092 14.11 20.25 14.5078 20.25H19.0078C19.4056 20.25 19.7872 20.092 20.0685 19.8107C20.3498 19.5294 20.5078 19.1478 20.5078 18.75V14.25C20.5078 13.8522 20.3498 13.4706 20.0685 13.1893C19.7872 12.908 19.4056 12.75 19.0078 12.75ZM19.0078 18.75H14.5078V14.25H19.0078V18.75Z"
                      fill="#181818"
                    />
                  </svg>
                  <span className="d-none d-xxl-block">Browse by Category</span>
                  <span className="icon icon-arrow-down" />
                </a>
                <CategoryList2 />
              </div>
              <nav className="box-navigation text-center d-none d-xl-block">
                <ul className="box-nav-ul d-flex align-items-center justify-content-center">
                  <Nav />
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-3">
            <div className="header-right">
              <form className="form-search d-xl-flex d-none position-relative">
                <fieldset className="text w-100">
                  <input
                    type="text"
                    placeholder="Search Products"
                    className="style-line-bottom"
                    name="text"
                    tabIndex={0}
                    defaultValue=""
                    aria-required="true"
                    required=""
                  />
                </fieldset>
                <button className="" type="submit">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_19494_2214)">
                      <path
                        d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                        stroke="#181818"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.8047 15.8037L21.0012 21.0003"
                        stroke="#181818"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_19494_2214">
                        <rect width={24} height={24} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </form>
              <ul className="nav-icon d-flex justify-content-end align-items-center">
                <li className="nav-search d-xl-none d-flex">
                  <a
                    href="#search"
                    data-bs-toggle="modal"
                    className="nav-icon-item"
                  >
                    <svg
                      className="icon"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                        stroke="#181818"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.35 21.0004L17 16.6504"
                        stroke="#181818"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li className="nav-account">
                  <a href="#" className="nav-icon-item">
                    <svg
                      className="icon"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                        stroke="#181818"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                        stroke="#181818"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <div className="dropdown-account dropdown-login">
                    <div className="sub-top">
                      <Link href={`/login`} className="tf-btn btn-reset">
                        Login
                      </Link>
                      <p className="text-center text-secondary-2">
                        Don’t have an account?
                        <Link href={`/register`}>Register</Link>
                      </p>
                    </div>
                    <div className="sub-bot">
                      <span className="body-text-">Support</span>
                    </div>
                  </div>
                </li>
                <li className="nav-wishlist">
                  <Link href={`/wish-list`} className="nav-icon-item">
                    <svg
                      className="icon"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                        stroke="#181818"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="nav-cart">
                  <a
                    href="#shoppingCart"
                    data-bs-toggle="modal"
                    className="nav-icon-item"
                  >
                    <svg
                      className="icon"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5078 10.8734V6.36686C16.5078 5.17166 16.033 4.02541 15.1879 3.18028C14.3428 2.33514 13.1965 1.86035 12.0013 1.86035C10.8061 1.86035 9.65985 2.33514 8.81472 3.18028C7.96958 4.02541 7.49479 5.17166 7.49479 6.36686V10.8734M4.11491 8.62012H19.8877L21.0143 22.1396H2.98828L4.11491 8.62012Z"
                        stroke="#181818"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="count-box bg-dark">
                      {" "}
                      <CartLength />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
