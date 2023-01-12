import { Typography } from "antd";
import classes from "./../styles.module.scss";
import cosmetic from "./../assets/images/icons/cosmetic.svg";
import key from "./../assets/images/icons/key.svg";
import capital from "./../assets/images/icons/capital.svg";
import design from "./../assets/images/icons/design.svg";
import { PoweroffOutlined } from "@ant-design/icons";

const { Title } = Typography;

export const WhatWeCan = () => {
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
        Мы выполняем все виды ремонта{" "}
        <PoweroffOutlined style={{ fontSize: "32px", color: "#FED036" }} />
      </Title>
      <div className={classes.whatWeCan}>
        <div className={classes.card}>
          <img alt="example" src={cosmetic} />
          <p>Косметичекий</p>
        </div>
        <div className={classes.card}>
          <img alt="example" src={key} />
          <p>Под ключ</p>
        </div>
        <div className={classes.card}>
          <img alt="example" src={capital} />
          <p>Капитальный</p>
        </div>
        <div className={classes.card}>
          <img alt="example" src={design} />
          <p>Дизайнерский</p>
        </div>
      </div>
    </>
  );
};
