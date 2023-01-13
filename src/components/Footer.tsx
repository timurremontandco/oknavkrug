import classes from "./../styles.module.scss";
import { Image } from "antd";
import tg from "./../assets/images/icons/telegram.svg";
import wa from "./../assets/images/icons/messages.svg";
import logo from "./../assets/images/icons/logo.png";

export const Footer = () => {

  const handleTGOpen = () => {
    window.open("https://t.me/MikaOkna", "_blank");
  };
  const handleWAOpen = () => {
    window.open("https://wa.me/79950944694", "_blank");
  };

  const imageStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    cursor: "pointer",
  };

  return (
    <div id="contacts" className={classes.footer}>
      <div className={classes.footerContactsBoxWrapper}>
        <div className={classes.footerContactsBox}
        >
          <a href="#home">
            <Image
              preview={false}
              width={150}
              src={logo}
            />
          </a>
          <div className={classes.contactsBox}>
            <a href="tel:+79950944694">+7 995 094 46 94</a>
            <a href="mailto:">timurandco@inbox.ru</a>
            <div>
              <span onClick={handleTGOpen}>
                <Image style={imageStyle} preview={false} src={tg} />
              </span>
              <span onClick={handleWAOpen}>
                <Image style={imageStyle} preview={false} src={wa} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
