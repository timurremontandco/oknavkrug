import { CaretRightOutlined, MenuOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import classes from "./../styles.module.scss";

export const BurgerMenu = () => {

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          href="#example"
          className={classes.link}
        >
          <CaretRightOutlined />Примеры работ
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          href="#feedback"
          className={classes.link}
        >
          <CaretRightOutlined />Отзывы
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          href="#contacts"
          className={classes.link}
        >
          <CaretRightOutlined />Контакты
        </a>
      ),
    },
  ];

  return (
    <div className={classes.burgerMenu}>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <MenuOutlined
          style={{ fontSize: "36px", padding: "14px" }}
        />
      </Dropdown>
    </div>
  );
};
