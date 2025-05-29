import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import s from "./index.module.scss";
import { FaLocationDot } from "react-icons/fa6";

const Contact: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          textAlign: "center",
          width: "40%",
        }}
      >
        <img src="src/assets/contactimg.png" className={s.image} />
      </div>
      <div
        style={{
          width: "60%",
          padding: "30px",
          marginLeft: "40px",
        }}
      >
        <h1 className={s.contact}>I'd love to hear from you.</h1>
        <h4 className={s.definition}>
          Got a project you want me to work on? Or how about just a friendly
          chat?
        </h4>
        <div className={s.socialIcon}>
          <div className={s.iconContainer}>
            <FaPhone className={s.icon} />
            <h4 className={s.text}>+639293704249</h4>
          </div>
          <div className={s.iconContainer}>
            <SiGmail className={s.icon} />
            <h4 className={s.text}>concepcionjessa321@gmail.com</h4>
          </div>
          <div className={s.iconContainer}>
            <FaLocationDot className={s.icon} />
            <h4 className={s.text}>Tondo, Manila, Philippines</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
