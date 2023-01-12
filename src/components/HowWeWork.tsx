import { Typography } from "antd";
import classes from "./../styles.module.scss";
import docs from "./../assets/images/icons/docs.svg";
import guarantee from "./../assets/images/icons/guarantee.svg";
import smeta from "./../assets/images/icons/smeta.svg";
import worker from "./../assets/images/icons/worker.svg";
import contract from "./../assets/images/icons/contract.svg";
import { FormatPainterOutlined } from "@ant-design/icons";

const { Title } = Typography;

export const HowWeWork = () => {
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
        Как мы работаем{" "}
        <FormatPainterOutlined style={{ fontSize: "32px", color: "#FED036" }} />
      </Title>
      <div className={classes.howWeDoContainer}>
        <div style={{maxWidth: '120px'}} className={classes.card}>
          <img alt="example" src={worker} />
          <p>Бесплатный выезд замерщика</p>
        </div>

        <div style={{maxWidth: '120px'}} className={classes.card}>
          <img alt="example" src={smeta} />
          <p>Смета в день обращения</p>
        </div>

        <div style={{maxWidth: '120px'}} className={classes.card}>
          <img alt="example" src={docs} />
          <p>Договор</p>
        </div>

        <div style={{maxWidth: '120px'}} className={classes.card}>
          <img alt="example" src={contract} />
          <p>Акт выполненных работ</p>
        </div>

        <div style={{maxWidth: '120px'}} className={classes.card}>
          <img alt="example" src={guarantee} />
          <p>Гарантия на выполненные работы</p>
        </div>
      </div>
    </>
  );
};
