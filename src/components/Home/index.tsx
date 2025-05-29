import s from "./index.module.scss";

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          width: "50%",
          padding: "20px",
        }}
      >
        <h1 className={s.WhoIAm}>
          Helping Your Business Thrive with Virtual Assistance
        </h1>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "50%",
          padding: "20px",
        }}
      >
        <img src="src/assets/va.png" className={s.image} />
      </div>
    </div>
  );
};

export default Home;
