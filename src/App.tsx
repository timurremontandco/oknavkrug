import { PhoneOutlined, VerticalAlignTopOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { Examples } from "./components/Examples";
import { FeedBacks } from "./components/FeedBacks";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowWeWork } from "./components/HowWeWork";
import { NavBar } from "./components/NavBar";
import { Questions } from "./components/Questions";
import { WhatWeCan } from "./components/WhatWeCan";
import { WhyOurService } from "./components/WhyOurService";
import 'react-accessible-accordion/dist/fancy-example.css';
import classes from "./styles.module.scss";

const App = () => {
  const [opened, setOpened] = useState(false);

  const handleToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
    <>
      <div className={classes.wrapper}>
        <Button onClick={info} color="green" className={classes.callBtn}>
          <PhoneOutlined style={{ fontSize: 18, color: '#FFF' }} />
        </Button>
        <Button onClick={handleToTopClick} color="green" className={classes.toTopBtn}>
          <VerticalAlignTopOutlined style={{ fontSize: 18, left: 35, color: '#FFF' }} />
        </Button>
        {/* <Layout> */}
          <NavBar />
          <Content>
            <Hero />
            <WhatWeCan />
            <HowWeWork />
            <WhyOurService />
            <Examples />
            <FeedBacks />
            <Questions />
          </Content>
        {/* </Layout> */}
      </div>
      <Footer />
    </>
  );
};

export default App;
