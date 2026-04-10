<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rousso & Sui | Window Cleaning</title>
  <meta name="description" content="Rousso & Sui window cleaning and exterior cleaning in La Cañada and nearby areas." />
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      scroll-behavior: smooth;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background: linear-gradient(180deg, #f4fbff 0%, #ffffff 30%, #eef8ff 100%);
      color: #12263a;
      line-height: 1.6;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    img {
      max-width: 100%;
      display: block;
    }

    .container {
      width: 90%;
      max-width: 1180px;
      margin: 0 auto;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(10, 28, 46, 0.9);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;
      gap: 20px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 800;
      font-size: 1.15rem;
      color: #fff;
    }

    .brand-badge {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      background: linear-gradient(135deg, #00c2ff, #0066ff);
      display: grid;
      place-items: center;
      color: white;
      font-weight: 900;
      box-shadow: 0 10px 25px rgba(0,102,255,0.35);
    }

    .nav-links {
      display: flex;
      gap: 18px;
      align-items: center;
      flex-wrap: wrap;
      color: #dbe9ff;
      font-weight: 600;
      font-size: 0.95rem;
    }

    .nav-links a:hover {
      color: #7ee7ff;
    }

    .phone-btn {
      background: linear-gradient(135deg, #00d084, #00a86b);
      color: white;
      padding: 10px 16px;
      border-radius: 999px;
      font-weight: 800;
      box-shadow: 0 10px 24px rgba(0,168,107,0.25);
    }

    .hero {
      position: relative;
      overflow: hidden;
      padding: 72px 0 60px;
      background:
        radial-gradient(circle at top left, rgba(0,194,255,0.25), transparent 35%),
        radial-gradient(circle at top right, rgba(0,102,255,0.22), transparent 35%),
        linear-gradient(135deg, #081b33 0%, #0d5cd7 45%, #00c2ff 100%);
      color: white;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 40px;
      align-items: center;
    }

    .eyebrow {
      display: inline-block;
      background: rgba(255,255,255,0.14);
      border: 1px solid rgba(255,255,255,0.22);
      border-radius: 999px;
      padding: 8px 14px;
      font-size: 0.9rem;
      font-weight: 700;
      margin-bottom: 18px;
    }

    .hero h1 {
      font-size: 3rem;
      line-height: 1.05;
      margin-bottom: 18px;
      font-weight: 900;
      max-width: 680px;
    }

    .hero p {
      font-size: 1.08rem;
      color: #e9f5ff;
      max-width: 650px;
      margin-bottom: 24px;
    }

    .hero-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 26px;
    }

    .btn {
      padding: 14px 22px;
      border-radius: 999px;
      font-weight: 800;
      display: inline-block;
      transition: 0.2s ease;
    }

    .btn-primary {
      background: #ffffff;
      color: #0d5cd7;
      box-shadow: 0 12px 30px rgba(0,0,0,0.15);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
    }

    .btn-secondary {
      border: 2px solid rgba(255,255,255,0.55);
      color: white;
      background: rgba(255,255,255,0.08);
    }

    .hero-stats {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 8px;
    }

    .stat {
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 18px;
      padding: 14px 16px;
      min-width: 150px;
    }

    .stat strong {
      display: block;
      font-size: 1.2rem;
      margin-bottom: 4px;
    }

    .hero-card {
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.18);
      border-radius: 28px;
      padding: 18px;
      box-shadow: 0 18px 50px rgba(0,0,0,0.22);
    }

    .hero-card img {
      border-radius: 22px;
      width: 100%;
      height: 440px;
      object-fit: cover;
      border: 4px solid rgba(255,255,255,0.15);
    }

    section {
      padding: 72px 0;
    }

    .section-title {
      text-align: center;
      margin-bottom: 18px;
      font-size: 2.2rem;
      color: #0f2e4f;
      font-weight: 900;
    }

    .section-subtitle {
      text-align: center;
      color: #57738d;
      max-width: 760px;
      margin: 0 auto 42px;
      font-size: 1.05rem;
    }

    .services-grid,
    .pricing-grid,
    .gallery-grid,
    .why-grid,
    .reviews-grid {
      display: grid;
      gap: 22px;
    }

    .services-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .pricing-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .why-grid {
      grid-template-columns: repeat(4, 1fr);
    }

    .reviews-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .card {
      background: white;
      border-radius: 24px;
      padding: 26px;
      box-shadow: 0 14px 35px rgba(16, 55, 92, 0.08);
      border: 1px solid #e5f0fb;
    }

    .card h3 {
      margin-bottom: 12px;
      color: #0d4ea6;
      font-size: 1.25rem;
    }

    .card p {
      color: #536d86;
    }

    .icon-circle {
      width: 54px;
      height: 54px;
      border-radius: 16px;
      display: grid;
      place-items: center;
      margin-bottom: 16px;
      font-size: 1.4rem;
      color: white;
      font-weight: 900;
    }

    .blue { background: linear-gradient(135deg, #008cff, #0051ff); }
    .teal { background: linear-gradient(135deg, #00d5ff, #00a2c7); }
    .green { background: linear-gradient(135deg, #00d084, #00a86b); }
    .orange { background: linear-gradient(135deg, #ff9b26, #ff6a00); }

    .pricing-card {
      position: relative;
      overflow: hidden;
    }

    .pricing-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(0,194,255,0.06), transparent 45%);
      pointer-events: none;
    }

    .price-range {
      font-size: 2rem;
      font-weight: 900;
      color: #0c59c9;
      margin-bottom: 10px;
    }

    .tag {
      display: inline-block;
      background: #e7f3ff;
      color: #0d5cd7;
      font-weight: 800;
      font-size: 0.82rem;
      padding: 6px 10px;
      border-radius: 999px;
      margin-bottom: 12px;
    }

    .pricing-card ul {
      margin-top: 12px;
      padding-left: 18px;
      color: #536d86;
    }

    .pricing-card li {
      margin-bottom: 8px;
    }

    .note-box {
      margin-top: 22px;
      background: linear-gradient(135deg, #e9fbff, #eef4ff);
      border: 1px solid #d7ebff;
      border-radius: 20px;
      padding: 18px;
      text-align: center;
      color: #31536f;
      font-weight: 700;
    }

    .gallery-item {
      overflow: hidden;
      padding: 0;
    }

    .gallery-item img {
      width: 100%;
      height: 340px;
      object-fit: cover;
    }

    .gallery-caption {
      padding: 18px 20px 22px;
    }

    .why-box {
      text-align: center;
      padding: 26px 18px;
    }

    .why-box h4 {
      margin-bottom: 10px;
      color: #0f2e4f;
      font-size: 1.05rem;
    }

    .review {
      background: linear-gradient(180deg, #ffffff, #f5fbff);
    }

    .stars {
      color: #ffb400;
      font-size: 1.1rem;
      margin-bottom: 14px;
      letter-spacing: 2px;
    }

    .cta {
      background: linear-gradient(135deg, #0a1c2e, #0d5cd7);
      color: white;
      border-radius: 34px;
      padding: 46px 34px;
      box-shadow: 0 20px 60px rgba(13,92,215,0.28);
      text-align: center;
    }

    .cta h2 {
      font-size: 2.2rem;
      margin-bottom: 12px;
    }

    .cta p {
      color: #e8f3ff;
      max-width: 700px;
      margin: 0 auto 22px;
    }

    .contact-links {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 18px;
    }

    .contact-links a {
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.2);
      padding: 12px 18px;
      border-radius: 999px;
      font-weight: 800;
    }

    footer {
      padding: 28px 0 50px;
      text-align: center;
      color: #5d7388;
      font-weight: 600;
    }

    @media (max-width: 980px) {
      .hero-grid,
      .services-grid,
      .pricing-grid,
      .gallery-grid,
      .why-grid,
      .reviews-grid {
        grid-template-columns: 1fr;
      }

      .hero h1 {
        font-size: 2.35rem;
      }

      .nav {
        flex-direction: column;
        align-items: flex-start;
      }

      .nav-links {
        width: 100%;
      }

      .hero-card img {
        height: 360px;
      }
    }

    @media (max-width: 640px) {
      .hero {
        padding-top: 48px;
      }

      .hero h1 {
        font-size: 2rem;
      }

      .section-title {
        font-size: 1.8rem;
      }

      .cta h2 {
        font-size: 1.7rem;
      }
    }
  </style>
</head>
<body>

  <header>
    <div class="container nav">
      <div class="brand">
        <div class="brand-badge">RS</div>
        <span>Rousso &amp; Sui</span>
      </div>

      <nav class="nav-links">
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="#gallery">Photos</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact" class="phone-btn">Call: (323) 853-2383</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="container hero-grid">
      <div>
        <div class="eyebrow">La Cañada Area • Fast Quotes • Reliable Service</div>
        <h1>Window cleaning that makes your home look crazy clean.</h1>
        <p>
          Rousso &amp; Sui provides exterior cleaning with a focus on spotless windows,
          clean glass, strong curb appeal, and honest service. Pricing is per window,
          and the final cost depends on window size and condition.
        </p>

        <div class="hero-buttons">
          <a class="btn btn-primary" href="tel:3238532383">Call Now</a>
          <a class="btn btn-secondary" href="sms:3238532383?body=Hey%20Rousso%20%26%20Sui%2C%20I%20want%20a%20quote%20for%20window%20cleaning.">Text For Quote</a>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <strong>Per Window</strong>
            <span>Simple pricing model</span>
          </div>
          <div class="stat">
            <strong>Free Quotes</strong>
            <span>Fast response</span>
          </div>
          <div class="stat">
            <strong>Local Service</strong>
            <span>La Cañada + nearby</span>
          </div>
        </div>
      </div>

      <div class="hero-card">
        <img src="720815C7-F013-4199-A172-E906E7DDC2EB_4_5005_c.jpeg" alt="Rousso and Sui team photo" />
      </div>
    </div>
  </section>

  <section id="services">
    <div class="container">
      <h2 class="section-title">Our Services</h2>
      <p class="section-subtitle">
        Clean windows sell the whole house. We also offer extra exterior cleaning services
        to make the full property look better.
      </p>

      <div class="services-grid">
        <div class="card">
          <div class="icon-circle blue">🪟</div>
          <h3>Exterior Window Cleaning</h3>
          <p>
            Streak-free outside glass cleaning for homes of all sizes. Great for regular upkeep
            or pre-event cleanup.
          </p>
        </div>

        <div class="card">
          <div class="icon-circle teal">✨</div>
          <h3>Interior Window Cleaning</h3>
          <p>
            Clean interior panes, edges, and visible buildup so your windows look clear from
            both sides.
          </p>
        </div>

        <div class="card">
          <div class="icon-circle green">💦</div>
          <h3>Exterior Wash Add-Ons</h3>
          <p>
            Ask about trash bin cleaning, driveway washing, and other exterior touch-up work
            when you request a quote.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="pricing" style="background: linear-gradient(180deg, #f7fcff 0%, #eef7ff 100%);">
    <div class="container">
      <h2 class="section-title">Per-Window Pricing</h2>
      <p class="section-subtitle">
        We charge per window instead of using fixed house packages. Final price varies based on
        window size, shape, height, access, and buildup.
      </p>

      <div class="pricing-grid">
        <div class="card pricing-card">
          <div class="tag">Most common</div>
          <h3>Standard Windows</h3>
          <div class="price-range">$8 – $12</div>
          <p>Best for smaller and average-size residential windows.</p>
          <ul>
            <li>Single standard windows</li>
            <li>Light to normal buildup</li>
            <li>Great for recurring cleanings</li>
          </ul>
        </div>

        <div class="card pricing-card">
          <div class="tag">Bigger glass</div>
          <h3>Large / Double Windows</h3>
          <div class="price-range">$12 – $18</div>
          <p>For larger panes, wider glass, or more time-intensive cleaning.</p>
          <ul>
            <li>Double-width windows</li>
            <li>Taller window panels</li>
            <li>More detailed edge work</li>
          </ul>
        </div>

        <div class="card pricing-card">
          <div class="tag">Custom quote</div>
          <h3>Extra Large / Specialty</h3>
          <div class="price-range">$18+</div>
          <p>For oversized, specialty, hard-to-reach, or unique windows.</p>
          <ul>
            <li>French panes / specialty glass</li>
            <li>Unusual shapes</li>
            <li>Hard access or heavier buildup</li>
          </ul>
        </div>
      </div>

      <div class="note-box">
        Minimum service charge may apply. Text or call us for a fast quote based on your house.
      </div>
    </div>
  </section>

  <section id="gallery">
    <div class="container">
      <h2 class="section-title">Photos</h2>
      <p class="section-subtitle">
        Your site now uses your actual uploaded images. You can swap these later for better
        before-and-after shots once you have them.
      </p>

      <div class="gallery-grid">
        <div class="card gallery-item">
          <img src="720815C7-F013-4199-A172-E906E7DDC2EB_4_5005_c.jpeg" alt="Owner photo for Rousso and Sui" />
          <div class="gallery-caption">
            <h3>Local, hands-on service</h3>
            <p>Real people, real work, direct communication, and fast quotes.</p>
          </div>
        </div>

        <div class="card gallery-item">
          <img src="Screenshot 2026-04-08 at 11.31.09 AM.png" alt="Rousso and Sui flyer and branding" />
          <div class="gallery-caption">
            <h3>Rousso &amp; Sui branding</h3>
            <p>Use this until you upload a cleaner logo or better service photos.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <h2 class="section-title">Why People Book Us</h2>
      <p class="section-subtitle">
        We keep it simple: answer fast, show up, clean the glass right, and leave the house looking better.
      </p>

      <div class="why-grid">
        <div class="card why-box">
          <div class="icon-circle orange" style="margin: 0 auto 14px;">⚡</div>
          <h4>Fast Response</h4>
          <p>Quick quotes by call or text.</p>
        </div>

        <div class="card why-box">
          <div class="icon-circle blue" style="margin: 0 auto 14px;">🧼</div>
          <h4>Clean Results</h4>
          <p>Clear glass and better curb appeal.</p>
        </div>

        <div class="card why-box">
          <div class="icon-circle green" style="margin: 0 auto 14px;">💬</div>
          <h4>Easy Communication</h4>
          <p>Direct local contact with no weird runaround.</p>
        </div>

        <div class="card why-box">
          <div class="icon-circle teal" style="margin: 0 auto 14px;">🏡</div>
          <h4>Neighborhood Service</h4>
          <p>Serving La Cañada and nearby areas.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="reviews" style="background: linear-gradient(180deg, #f8fcff 0%, #eef6ff 100%);">
    <div class="container">
      <h2 class="section-title">What Customers Want</h2>
      <p class="section-subtitle">
        Clear glass, easy booking, fair pricing, and a clean finish that makes the whole property pop.
      </p>

      <div class="reviews-grid">
        <div class="card review">
          <div class="stars">★★★★★</div>
          <p>
            “Super easy to work with and the windows looked way better right after they finished.”
          </p>
        </div>

        <div class="card review">
          <div class="stars">★★★★★</div>
          <p>
            “Quick response, fair quote, and the house looked brighter immediately.”
          </p>
        </div>

        <div class="card review">
          <div class="stars">★★★★★</div>
          <p>
            “Good communication and solid work. Definitely worth it for curb appeal.”
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container">
      <div class="cta">
        <h2>Get a quote today</h2>
        <p>
          Call or text photos of your house and we’ll give you a fast estimate.
          Final pricing depends on window count, size, and condition.
        </p>

        <div class="contact-links">
          <a href="tel:3238532383">📞 (323) 853-2383</a>
          <a href="sms:3238532383?body=Hey%20Rousso%20%26%20Sui%2C%20can%20I%20get%20a%20quote%20for%20window%20cleaning%3F">💬 Text Us</a>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>Rousso &amp; Sui • Window Cleaning • La Cañada Area</p>
    </div>
  </footer>

</body>
</html>
