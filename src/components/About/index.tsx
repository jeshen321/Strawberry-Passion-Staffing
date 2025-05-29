import { Button } from "antd";
import s from "./index.module.scss";
import { ArrowRightOutlined } from "@ant-design/icons";
const AboutSection: React.FC = () => {
  return (
    <div className={s.abtwrapper}>
      <div className={s.imgcontainer}>
        <img src="src/assets/aboutus.png" className={s.image} />
      </div>
      <div className={s.abtcontainer}>
        <h2 style={{ color: "#e0653b" }}>ABOUT US</h2>
        <h1 className={s.AboutUs}>Strawberry Passion Staffing</h1>
        <h3 className={s.definition}>
          Our company is named Strawberry because it embodies the sweetness and
          care we bring to every client interaction. Just as strawberries are
          fresh, vibrant, and universally loved, our team is dedicated to
          delivering innovative and delightful customer support solutions. We
          aim to cultivate lasting relationships, grow alongside our clients,
          and create a positive impact in every task we undertake.
        </h3>
        <div className={s.btnwrapper}>
          <Button className={s.btn}>
            Learn More <ArrowRightOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
