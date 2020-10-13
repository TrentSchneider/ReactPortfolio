import React from "react";

function Nav() {
  return (
    <nav
      id="navBar"
      class="d-flex flex-column flex-md-row align-items-center px-md-4 mb-3 bg-white"
    >
      <h2 class="my-0 mr-md-auto font-weight-normal py-3 px-4 col-12 col-md-auto styleFont navh2 text-center">
        Trent Schneider
      </h2>
      <nav class="my-2 my-md-0 mr-md-3">
        <a
          class="px-2 text-black-50 border-right"
          href="index.html"
          title="Go to About page."
        >
          Home
        </a>
        <a
          class="px-2 text-black-50 border-right"
          href="about.html"
          title="Go to About page."
        >
          About
        </a>
        <a
          class="px-2 text-black-50 border-right"
          href="portfolio.html"
          title="Go to Portfolio page."
        >
          Portfolio
        </a>
        <a
          class="px-2 text-black-50"
          href="contact.html"
          title="Go to Contact page."
        >
          Contact
        </a>
      </nav>
    </nav>
  );
}

export default Nav;
