import { UpOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import AboutSection from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";
import bgImage from "./assets/testimonial.png";
import { Outlet } from "react-router-dom";

const { Content, Footer } = Layout;

const App: React.FC = () => {
  const [isButtonFixed, setIsButtonFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition >= scrollHeight - 50) {
        setIsButtonFixed(true);
      } else {
        setIsButtonFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <NavBar />
      <Content>
        <section
          id="hero"
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Home />
        </section>
        <section
          id="about"
          style={{
            position: "relative",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff",
            // overflow: "hidden",
          }}
        >
          {/* Top Overlay */}
          <img
            src="src/assets/overlay-bottom.png"
            alt="Overlay Top"
            style={{
              position: "absolute",
              top: "-60px",
              left: 0,
              width: "100%",
              height: "auto",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          {/* AboutSection content */}
          {/* <div style={{ position: "relative", zIndex: 2 }}> */}
          <AboutSection />
          {/* </div> */}

          {/* Bottom Overlay */}
          <img
            src="src/assets/overlay-top.png"
            alt="Overlay Bottom"
            style={{
              position: "absolute",
              bottom: "-60px",
              left: 0,
              width: "100%",
              height: "auto",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
        </section>
        {/* <section
          id="projects"
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            background: "#9E339F",
          }}
        >
          <Pricing />
        </section>

        <hr /> */}

        <section
          id="testimonials"
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <Testimonials />
        </section>
        <Outlet />
      </Content>

      <div style={{ position: "relative" }}>
        <Link to="hero" smooth={true} duration={500}>
          <Button
            icon={<UpOutlined />}
            size="large"
            style={{
              position: isButtonFixed ? "fixed" : "absolute",
              bottom: isButtonFixed ? "20px" : "20px",
              right: "20px",
              color: "#9E339F",
              backgroundColor: "#f5f5f5",
              borderRadius: "50%",
              boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.5)",
              zIndex: 9999,
            }}
          />
        </Link>
      </div>

      <Footer style={{ textAlign: "center", backgroundColor: "#E0653B" }}>
        <p>
          Copyright &copy; <b>STRAWBERRY PASSION STAFFING</b>. All Rights
          Reserved {new Date().getFullYear()}
        </p>
      </Footer>
    </Layout>
  );
};

export default App;
