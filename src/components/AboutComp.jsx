function AboutComp() {
  return (
    <>
      <section className="about__mission">
        <div className="about__mission-info">
          <h2 className="about__mission-orange-title">Our mission</h2>
          <h1 className="about__mission-title">
            Help more people cook nourishing meals, more often.
          </h1>
          <p className="about__mission-subtitle">
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious.
          </p>
          <p className="about__mission-subtitle">
            We showcase quick, whole-food dishes that anyone can master—no fancy
            equipment, no ultra-processed shortcuts—just honest ingredients and
            straightforward steps.
          </p>
        </div>
        <div className="about__mission-img">
          <picture>
            <source
              srcSet="/images/image-about-our-mission-large.webp"
              media="(min-width: 1024px)"
              width={618}
              height={600}
            />
            <source
              srcSet="/images/image-about-our-mission-large.webp"
              media="(min-width: 450px)"
            />
            <img
              src="/images/image-about-our-mission-small.webp"
              alt="Cooking"
              className="hero-img"
            />
          </picture>
        </div>
      </section>
      <div className="about__mission-border"></div>

      <section className="about__why-exist container">
        <h2 className="about__why-exist-title">Why we exist</h2>

        <div className="about__why-exist-list ">
          <div className="about__why-exist-item">
            <div className="about__why-exist-content">
              <div className="about__why-exist-content-img">
                <img
                  src="/images/icon-bullet-point.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div className="about__why-exist-content-text">
                <h3 className="about__why-exist-content-title">
                  Cut through the noise.
                </h3>
                <p className="about__why-exist-content-subtitle">
                  The internet is bursting with recipes, yet most busy cooks
                  still default to take-away or packaged foods. We curate a
                  tight collection of fool-proof dishes so you can skip the
                  scrolling and start cooking.
                </p>
              </div>
            </div>
            <div className="about__why-exist-content">
              <div className="about__why-exist-content-img">
                <img
                  src="/images/icon-bullet-point.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div className="about__why-exist-content-text">
                <h3 className="about__why-exist-content-title">
                  Empower home kitchens.
                </h3>
                <p className="about__why-exist-content-subtitle">
                  When you control what goes into your meals, you control how
                  you feel. Every recipe is built around unrefined ingredients
                  and ready in about half an hour of active prep.
                </p>
              </div>
            </div>
            <div className="about__why-exist-content">
              <div className="about__why-exist-content-img">
                <img
                  src="/images/icon-bullet-point.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div className="about__why-exist-content-text">
                <h3 className="about__why-exist-content-title">
                  Make healthy look good.
                </h3>
                <p className="about__why-exist-content-subtitle">
                  High-resolution imagery shows you exactly what success looks
                  like—because we eat with our eyes first, and confidence
                  matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="about__mission-border"></div>

      {/* philosophy */}
      <section className="about__why-exist container">
        <h2 className="about__why-exist-title">Our food philosophy</h2>

        <div className="about__why-exist-list">
          <div className="about__why-exist-item">
            <div className="about__why-exist-content">
              <div className="about__why-exist-content-img">
                <img
                  src="/images/icon-bullet-point.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div className="about__why-exist-content-text">
                <h3 className="about__why-exist-content-title">
                  Whole ingredients first.
                </h3>
                <p className="about__why-exist-content-subtitle">
                  Fresh produce, grains, legumes, herbs, and quality fats form
                  the backbone of every recipe.
                </p>
              </div>
            </div>
            <div className="about__why-exist-content">
              <div className="about__why-exist-content-img">
                <img
                  src="/images/icon-bullet-point.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div className="about__why-exist-content-text">
                <h3 className="about__why-exist-content-title">
                  Flavor without compromise.
                </h3>
                <p className="about__why-exist-content-subtitle">
                  Spices, citrus, and natural sweetness replace excess salt,
                  sugar, and additives.
                </p>
              </div>
            </div>
            <div className="about__why-exist-content">
              <div className="about__why-exist-content-img">
                <img
                  src="/images/icon-bullet-point.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div className="about__why-exist-content-text">
                <h3 className="about__why-exist-content-title">
                  Respect for time.
                </h3>
                <p className="about__why-exist-content-subtitle">
                  Weeknight meals should slot into real schedules; weekend
                  cooking can be leisurely but never wasteful.
                </p>
              </div>
            </div>
            <div className="about__why-exist-content">
              <div className="about__why-exist-content-img">
                <img
                  src="/images/icon-bullet-point.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <div className="about__why-exist-content-text">
                <h3 className="about__why-exist-content-title">
                  Sustainable choices.
                </h3>
                <p className="about__why-exist-content-subtitle">
                  Short ingredient lists cut down on food waste and carbon
                  footprint, while plant-forward dishes keep things
                  planet-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="about__mission-border"></div>

      <section className="about__beyond container">
        <div className="about__beyond-text">
          <h2 className="about__beyond-text-title">Beyond the plate</h2>
          <p className="about__beyond-text-subtitle">
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>
          <ul className="about__beyond-text-list">
            <li className="about__beyond-text-item">
              Encourage family dinners and social cooking.
            </li>
            <li className="about__beyond-text-item">
              Reduce reliance on single-use packaging and delivery waste.
            </li>
            <li className="about__beyond-text-item">
              Spark curiosity about seasonal produce and local agriculture.
            </li>
          </ul>
        </div>
        <div className="about__beyond-img">
          <picture>
            <source
              srcSet="/images/image-about-beyond-the-plate-large.webp"
              media="(min-width: 1024px)"
              width={714}
              height={400}
            />
            <source
              srcSet="/images/image-about-beyond-the-plate-large.webp"
              media="(min-width: 450px)"
            />
            <img
              src="/images/image-about-beyond-the-plate-small.webp"
              alt="Cooking"
              className="hero-img"
            />
          </picture>
        </div>
      </section>
    </>
  );
}

export default AboutComp;
