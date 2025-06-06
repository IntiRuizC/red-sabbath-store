"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";

export default function Topbar7() {
  return (
    <div className="tf-topbar style-2 type-space-lg topbar-fullwidth-2 bg-blue-4">
      <div className="row align-items-center">
        <div className="col-xl-3 d-none d-xl-block">
          <div className="tf-cur">
            <div className="tf-currencies">
              <CurrencySelect light topStart />
            </div>
            <div className="tf-languages">
              <LanguageSelect
                topStart
                parentClassName="image-select center style-default type-languages color-white"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-12 text-center">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
            }}
            speed={2000}
            dir="ltr"
            className="swiper tf-sw-top_bar"
          >
            <SwiperSlide className="swiper-slide">
              <p className="top-bar-text text-line-clamp-1 text-btn-uppercase fw-semibold letter-1 text-white">
                Free shipping on all orders over
                <span className="text-primary">$20.00</span>
              </p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <p className="top-bar-text text-line-clamp-1 text-btn-uppercase fw-semibold letter-1 text-white">
                Midseason Sale: 20% Off - Auto Applied at Checkout - Limited
                Time Only.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-xl-3 d-none d-xl-block">
          <ul className="tf-social-icon style-fill style-fill-2 justify-content-end">
            <li>
              <a href="#" className="social-facebook">
                <i className="icon icon-fb" />
              </a>
            </li>
            <li>
              <a href="#" className="social-twiter">
                <i className="icon icon-x" />
              </a>
            </li>
            <li>
              <a href="#" className="social-instagram">
                <i className="icon icon-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="social-tiktok">
                <i className="icon icon-tiktok" />
              </a>
            </li>
            <li>
              <a href="#" className="social-amazon">
                <i className="icon icon-amazon" />
              </a>
            </li>
            <li>
              <a href="#" className="social-pinterest">
                <i className="icon icon-pinterest" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
