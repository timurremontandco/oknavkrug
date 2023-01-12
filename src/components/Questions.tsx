import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import classes from "./../styles.module.scss";

import { Typography } from "antd";
import { PhoneOutlined, PlusOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { faq } from "../state/state";

const { Title } = Typography;

export const Questions = () => {
  return (
    <>
      {" "}
      <Title
        level={2}
        style={{
          textAlign: "center",
          border: "3px solid #FED036",
          borderRadius: "14px",
          padding: "8px",
        }}
      >
        Часто задаваемые вопросы{" "}
        <QuestionCircleOutlined
          style={{ fontSize: "32px", color: "#FED036" }}
        />
      </Title>
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        {faq.map((x, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton className={classes.accordionButtonCustom}>
              <PlusOutlined style={{ fontSize: "32px", color: "#FED036", marginRight: 14 }}/> {x.question}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>{x.answer}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <Title
        level={2}
        style={{
          textAlign: "center",
          border: "3px solid #FED036",
          borderRadius: "14px",
          padding: "8px",
        }}
      >
        Мы всегда на связи{" "}
        <PhoneOutlined style={{ fontSize: "32px", color: "#FED036" }} />
      </Title>
    </>
  );
};
