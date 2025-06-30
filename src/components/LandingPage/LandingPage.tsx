import React from 'react'

interface LandingPageProps {
  onNavigateToAuth: () => void
}

export function LandingPage({ onNavigateToAuth }: LandingPageProps) {
  return (
    <div style={{ fontFamily: "Roboto, sans-serif", backgroundColor: "#121212", color: "#f0f0f0" }}>
      <header style={{ backgroundColor: "#4b5320", padding: "2rem", textAlign: "center", backgroundImage: "url('https://www.transparenttextures.com/patterns/camo.png')", backgroundSize: "cover" }}>
        <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: "3rem", margin: 0 }}>PriceSniper</h1>
        <p style={{ fontSize: "1.25rem", marginTop: "1rem" }}>
          Lock In the Lowest Prices. Snipe the Deals Before Anyone Else.
        </p>
        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#video" style={{ backgroundColor: "#ff6600", color: "#fff", padding: "1rem 2rem", display: "inline-block", fontWeight: "bold", textTransform: "uppercase", fontSize: "1rem", textDecoration: "none" }}>
            Watch How It Works
          </a>
          <button 
            onClick={onNavigateToAuth}
            style={{ backgroundColor: "#4b5320", color: "#fff", padding: "1rem 2rem", border: "none", fontWeight: "bold", textTransform: "uppercase", fontSize: "1rem", cursor: "pointer" }}
          >
            Get Started
          </button>
        </div>
      </header>

      <section style={{ padding: "3rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "2rem", color: "#ff6600", borderBottom: "2px solid #666", marginBottom: "1rem" }}>
          How It Works
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {["Scan the Battlefield", "Set Your Sights", "Pull the Trigger", "Stay Mission-Ready"].map((title, i) => (
            <div key={i} style={{ backgroundColor: "#1e1e1e", padding: "1rem", borderLeft: "5px solid #4b5320" }}>
              <strong>{title}</strong>
              <p>
                {title === "Scan the Battlefield"
                  ? "Our AI scans Home Depot, eBay, and more."
                  : title === "Set Your Sights"
                  ? "Pick the products you want alerts for."
                  : title === "Pull the Trigger"
                  ? "Get notified the second prices drop."
                  : "Access curated daily feeds with precision-picked deals."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="video" style={{ backgroundColor: "#000", textAlign: "center", margin: "3rem auto", maxWidth: "800px", padding: "1rem", border: "2px solid #ff6600" }}>
        <h3 style={{ marginBottom: "1rem", fontFamily: "'Anton', sans-serif", color: "#ffffff" }}>Mission Briefing: Explainer Video</h3>
        <iframe
          src="https://www.youtube.com/embed/your-video-id"
          title="PriceSniper Explainer"
          style={{ width: "100%", height: "450px", border: "none" }}
          allowFullScreen
        ></iframe>
      </section>

      <footer style={{ backgroundColor: "#000", color: "#888", textAlign: "center", padding: "2rem", fontSize: "0.9rem" }}>
        &copy; 2025 PriceSniper. All Rights Reserved.
        <br />
        Terms of Engagement | Mission Brief | Base Camp
      </footer>
    </div>
  )
}