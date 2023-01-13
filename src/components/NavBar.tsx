import {
  CameraOutlined,
  FormOutlined,
  MessageOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import classes from "./../styles.module.scss";
import { BurgerMenu } from "./BurgerMenu";
import logo from "./../assets/images/icons/logo.png";

export const NavBar = () => {
  const [opened, setOpened] = useState(false);

  const info = () => {
    return Modal.success({
      title: "Мы готовы ответить на все интересующие Вас вопросы по телефону:",
      content: (
        <div>
          <h4>+7 995 094 46 94</h4>
        </div>
      ),
      okText: "Позвонить",
      onOk: () => setOpened(false),
      visible: opened,
      okButtonProps: { href: "tel:+79950944694" },
    });
  };
  return (
    <div id="home" className={classes.navbar}>
      <Image preview={false} width={150} src={logo} />
      <BurgerMenu />
      <div className={classes.navContainer}>
        <a href="#example" className={classes.link} style={{ marginRight: 24 }}>
          <CameraOutlined /> Примеры работ
        </a>
        <a
          href="#feedback"
          className={classes.link}
          style={{ marginRight: 24 }}
        >
          <MessageOutlined /> Отзывы
        </a>
        <a
          href="#contacts"
          className={classes.link}
          style={{ marginRight: 24 }}
        >
          <FormOutlined /> Контакты
        </a>
        <Button
          style={{ backgroundColor: "#FED036", color: "#3E3E3E" }}
          onClick={info}
          type="primary"
        >
          <PhoneOutlined />
          <span style={{fontWeight: 'bold'}}>+7 995 094 46 94</span>
        </Button>
      </div>
    </div>
  );
};
