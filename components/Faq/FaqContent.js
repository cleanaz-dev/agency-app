import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

import faqImg from "../../public/images/faq-img.jpg";

const FaqContent = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-img">
                <Image src={faqImg} alt="Image" width={800} height={534} />
              </div>
            </div>

            <div className="col-lg-6">
  <div className="faq-accordion">
    <Accordion allowZeroExpanded preExpanded={["a"]}>
      <AccordionItem uuid="a">
        <AccordionItemHeading>
          <AccordionItemButton>
            What types of AI solutions does LLM GEM offer?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            LLM GEM specializes in a range of AI solutions, including custom chatbots, voice assistants, and CRM integrations. We tailor our offerings to meet the specific needs of each business, focusing on enhancing customer interactions and streamlining operations through advanced AI technologies.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="b">
        <AccordionItemHeading>
          <AccordionItemButton>
            How can AI benefit my business?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            AI can significantly improve your business operations by automating routine tasks, providing data-driven insights, enhancing customer service, and optimizing decision-making processes. Our solutions can lead to increased efficiency, reduced costs, improved customer satisfaction, and new revenue opportunities.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="c">
        <AccordionItemHeading>
          <AccordionItemButton>
            What is the process for implementing an AI solution with LLM GEM?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Our process begins with a free AI Discovery Session to understand your needs. We then develop a customized proposal, followed by design, development, and implementation phases. Throughout the process, we work closely with your team to ensure the solution integrates seamlessly with your existing systems and meets your specific requirements.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="d">
        <AccordionItemHeading>
          <AccordionItemButton>
            How long does it take to develop and implement an AI solution?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
          Project timelines vary based on complexity. Our AI Starter Package typically takes 2-4 weeks, while the Advanced AI Suite usually requires 2-4 months. Throughout the development process, we provide regular updates and iterative versions for client testing and feedback. This approach ensures the final product aligns perfectly with your needs and expectations. We'll provide a detailed timeline during the proposal phase.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="e">
        <AccordionItemHeading>
          <AccordionItemButton>
            What kind of support and maintenance do you offer post-implementation?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            We provide ongoing support and maintenance for all our AI solutions. Our AI Starter Package includes 1 month of support, while the Advanced AI Suite comes with 3 months of dedicated support and optimization. We also offer extended support plans to ensure your AI solution continues to perform optimally and evolve with your business needs.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  </div>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
