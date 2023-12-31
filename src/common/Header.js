import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-4">
        <div class="container">
          <a
            class="navbar-brand d-flex justify-content-between align-items-center order-lg-0"
            href="index.html"
          >
            <i class="fa-solid fa-bag-shopping"></i>
            <span class="text-uppercase fw-lighter ms-2">X-Shopping</span>
          </a>
          <div class="order-lg-2 nav-btns">
            <button type="button" class="btn position-relative">
              <i class="fa-solid fa-cart-shopping"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge bg-primary">
                5
              </span>
            </button>
            <button type="button" class="btn position-relative">
              <i class="fa-solid fa-heart"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge bg-primary">
                2
              </span>
            </button>
            <button type="button" class="btn position-relative">
              <i class="fa-solid fa-search"></i>
            </button>
          </div>
          <button
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse order-lg-1" id="navMenu">
            <ul class="navbar-nav mx-auto text-center">
              <li class="nav-item px-2 py-2">
                <Link class="nav-link text-uppercase text-dark" to={"/"}>
                  Home{" "}
                </Link>
              </li>
              <li class="nav-item px-2 py-2">
                <Link class="nav-link text-uppercase text-dark" to={"/about"}>
                  About US{" "}
                </Link>
              </li>
              <li class="nav-item px-2 py-2">
                <Link class="nav-link text-uppercase text-dark" to={"/service"}>
                  Services{" "}
                </Link>
              </li>
              <li class="nav-item px-2 py-2">
                <Link class="nav-link text-uppercase text-dark" to={"/ourwork"}>
                  our Work{" "}
                </Link>
              </li>
              <li class="nav-item px-2 py-2 border-0">
                <Link class="nav-link text-uppercase text-dark" to={"/contact"} >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
