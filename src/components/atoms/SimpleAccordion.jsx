import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BasicTable from "../atoms/TableComponent";

export default function SimpleAccordion(props) {
  const { digest } = props;

  return (
    <>
      <Accordion>
        {digest &&
          digest.map((item, index) => (
            <>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={item.label + index}
              >
                <Typography>{item.label}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <BasicTable tableRows={item?.sub} />
              </AccordionDetails>
            </>
          ))}
      </Accordion>
    </>
  );
}
