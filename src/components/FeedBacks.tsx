import {
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Carousel, Rate } from "antd";
import { Typography } from "antd";
import { Progress, Space } from "antd";
import { feedbacks } from "../state/state";
import classes from "./../styles.module.scss";

const { Title } = Typography;

export const FeedBacks = () => {
  return (
    <div id="feedback">
      <Title
        level={2}
        style={{
          textAlign: "center",
          border: "3px solid #FED036",
          borderRadius: "14px",
          padding: "8px",
          marginTop: "24px",
        }}
      >
        Что о нас говорят{" "}
        <NotificationOutlined style={{ fontSize: "32px", color: "#FED036" }} />
      </Title>
      <Title style={{ textAlign: "center" }} level={5}>
        Уровень доверия наших клиентов растет с каждым днем
      </Title>
      <Space
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "24px",
        }}
        wrap
      >
        <div className={classes.rateCox}>
          <Progress strokeColor={"#FED036"} type="circle" percent={98} />
        </div>
      </Space>
      <Carousel
        arrows={false}
        focusOnSelect={false}
        adaptiveHeight
        autoplay
        style={{ margin: "8px" }}
      >
        {feedbacks.map((item, index) => (
          <div key={index} className={classes.feedback}>
            <div className={classes.feedbackName}>
              <Avatar
                style={{ marginRight: 12 }}
                size={34}
                icon={<UserOutlined />}
              />
              <Title level={5}>{item.name}</Title>
            </div>
            <Rate count={item.rate} defaultValue={item.rate} disabled />
            <p>{item.comment}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
