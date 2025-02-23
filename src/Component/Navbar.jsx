import React from "react";

function Navbar() {
  return (
    <div>
      <div class="bd-example m-0 border-0 navbarColor">
        <nav class="navbarColor navbar navbar-expand-lg bg-body-tertiary ">
          <div class="container-fluid navbarColor">
            <a class="navbar-brand " href="#top">
              Portfolio
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#About">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Experience">
                    Experience
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Contact">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
