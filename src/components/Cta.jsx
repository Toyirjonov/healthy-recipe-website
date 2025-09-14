import React from "react";
import { Link } from "react-router-dom";

function Cta() {
  return (
    <>
      <section class="home__cta">
        <div class="home__cta-content">
          <h2 class="home__cta-title">Ready to cook smarter?</h2>
          <p class="home__cta-subtitle">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <Link to={"/recipes"} class="btn">
            Browse recipes
          </Link>
        </div>
      </section>
    </>
  );
}

export default Cta;
