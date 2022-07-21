import React from "react";
import Navbar from "../components/header/Navbar.jsx";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import "../pages/Faq.css";
import Footer from "../components/footer/Footer";
import FaqLast from "../components/lastComp/FaqLast.jsx";

const faqData = [
  {
    ques: "What is Salaah?",
    ans: `Salaah is a mentor community that aims to connect present students
    with the alumni so they can recieve guidance about the career they wish to pursue. The students would benefit a lot from recieving advice regarding their future career paths.`,
  },
  {
    ques: "Why do we need Salaah?",
    ans: `Looking into the current scenario, we can see that there is a huge gap
    between our alumni and the students. This is the major reason why we
    all thought of making a community that aims to fill this gap between
    the alumni and students. As college students we
    all need guidance and mentoring for further opportunities.`,
  },
  {
    ques: "Is Salaah a club or a chapter?",
    ans: `Salaah is a Mentor Community of ABESEC which was created to provide mentorship to the students. 
    It focuses on getting the students and the alumni in the same room so that they can discuss and connect one to one.`,
  },
  {
    ques: "Is there any hierarchy in the community?",
    ans: `Unlike any other society or club, here, no individual will have a monopoly or authoritative power regarding any major decisions.`,
  },
  {
    ques: "What is the aim of salaah?",
    ans: `We aim to bridge the gap between alumni and students. This can be
    done by making students personally interact with the alumni, who are
    much ahead in their favorable and respective fields, by conducting
    various mentorship sessions related to different professional paths
    that exist.`,
  },
];

const Faq = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <h1 className="Ultrabold help-text">FAQ's</h1>
      </div>
      {/* <div>
        <h1 className='Ultrabold faq-text'>Frequently Asked Questions!</h1>
      </div> */}
      {faqData.map((item, index) => (
        <div key={index} className="container faq-accordion">
          <Accordion>
            <AccordionSummary
              expandIcon={<AddSharpIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.ques}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.ans}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
      <FaqLast />
      <Footer />
    </div>
  );
};

export default Faq;
