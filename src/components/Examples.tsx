import React from "react";
import { Typography } from "antd";
import classes from "./../styles.module.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { galeryImages } from "../state/state";
import { DownCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

export const Examples = () => {
  return (
    <div id="example">
      <Title
      level={2}
        style={{
          textAlign: "center",
          border: "3px solid #FED036",
          borderRadius: "14px",
          padding: "8px",
        }}
      >
        Примеры работ{" "}
        <DownCircleOutlined style={{ fontSize: "32px", color: "#FED036" }} />
      </Title>
      <div className={classes.sliderContainerBox}>
        <div className={classes.beforeSliderContaner}>
          <ImageGallery items={galeryImages.images_1} />
        </div>

        <div className={classes.beforeSliderContaner}>
          <ImageGallery items={galeryImages.images_4} />
        </div>

        <div className={classes.beforeSliderContaner}>
          <ImageGallery items={galeryImages.images_7} />
        </div>

        <div className={classes.beforeSliderContaner}>
          <ImageGallery items={galeryImages.images_2} />
        </div>

        <div className={classes.beforeSliderContaner}>
          <ImageGallery items={galeryImages.images_8} />
        </div>
        
        <div className={classes.beforeSliderContaner}>
          <ImageGallery items={galeryImages.images_3} />
        </div>
      </div>
    </div>
  );
};
