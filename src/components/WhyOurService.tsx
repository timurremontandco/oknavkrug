import { Typography } from "antd";
import classes from "./../styles.module.scss";
import guarantee from "./../assets/images/icons/guarantee.svg";
import gdpr from "./../assets/images/icons/gdpr.svg";
import bestPrice from "./../assets/images/icons/best-price.svg";
import { SafetyCertificateOutlined } from "@ant-design/icons";

const { Title } = Typography;

export const WhyOurService = () => {
  return (
    <>
      <Title
        level={2}
        style={{
          textAlign: "center",
          border: "3px solid #FED036",
          borderRadius: "14px",
          padding: "8px",
        }}
      >
        Наши преимущества{" "}
        <SafetyCertificateOutlined
          style={{ fontSize: "32px", color: "#FED036" }}
        />
      </Title>
      <div className={classes.whyOurService}>
        <div style={{ maxWidth: "220px" }} className={classes.card}>
          <img alt="example" src={bestPrice} />
          <p>Индивидуальный подход к каждому клиенту</p>
        </div>
        <div style={{ maxWidth: "220px" }} className={classes.card}>
          <img alt="example" src={gdpr} />
          <p>Стоимость ремонта не меняется</p>
        </div>
        <div style={{ maxWidth: "220px" }} className={classes.card}>
          <img alt="example" src={guarantee} />
          <p>За нами не переделывают</p>
        </div>
      </div>
    </>
  );
};
