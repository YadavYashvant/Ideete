import { cn } from "@/lib/utils";
import { Accordion, AccordionItem, colorVariants, colors, commonColors } from "@nextui-org/react";

//import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

function Faqs(){

    const Content_1 = (
        <div>Ideete is an innovative platform empowering users to refine ideas with cutting-edge technology. It offers a seamless experience, enabling users to scrutinize idea uniqueness. Through algorithms, Ideete provides insights and personalized suggestions. Whether you are an entrepreneur, artist, or thinker, Ideete guides you in refining ideas to perfection.</div>
      );
      const Content_2 = (
        <div>Users can effortlessly submit their ideas through the platform, where their uniqueness is meticulously evaluated against existing ones. If an idea lacks originality, Ideete offers tailored suggestions to help differentiate it from the rest, ensuring each concept stands out and thrives in the competitive landscape.</div>
      );
      const Content_3 = (
        <div>Begin your Ideete journey by visiting our website and registering for an account. Once signed up, unleash your creativity by submitting ideas and refining them using our intuitive platform. Join a community of innovators and turn your concepts into reality with Ideete support and guidance.</div>
      );
      const Content_4 = (
        <div>If your idea lacks uniqueness, Ideete provides personalized suggestions and enhancements tailored to differentiate it from existing concepts. Leveraging advanced algorithms, our platform offers invaluable insights and guidance, empowering you to refine and elevate your idea to stand out in the competitive landscape, ensuring its originality and impact.</div>
      );
      const Content_5 = (
        <div>Yes, Ideete is completely free to use for all users. Our platform offers a seamless experience, allowing you to access its full range of features without any cost. Whether you are an aspiring entrepreneur or a creative thinker, you can leverage our resources to refine and enhance your ideas at no expense. Join us today and unleash your creativity!</div>
      );
    return (
    <>

    {/* <Accordion type="single" collapsible className="w-full text-white">
          <AccordionItem value="item1">
            <AccordionTrigger>What is Ideete?</AccordionTrigger>
            <AccordionContent>
              {Content_1}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does Ideete work?</AccordionTrigger>
            <AccordionContent>
              {Content_2}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How can I get started with Ideete?</AccordionTrigger>
            <AccordionContent>
              {Content_3}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What happens if my idea is not unique?</AccordionTrigger>
            <AccordionContent>
              {Content_3}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is Ideete free to use?</AccordionTrigger>
            <AccordionContent>
              {Content_3}
            </AccordionContent>
          </AccordionItem>
      </Accordion> */}

    <Accordion
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 15,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
      variant="splitted"
      className="my-5"
    >
      <AccordionItem className={cn("bg-gray-600 text-white",colors)} key="1" aria-label="Accordion 1" title="What is Ideete?">
        {Content_1}
      </AccordionItem>
      <AccordionItem className={cn("bg-gray-600 text-white",colors)} key="2" aria-label="Accordion 2" title="How does Ideete work?">
        {Content_2}
      </AccordionItem>
      <AccordionItem className={cn("bg-gray-600 text-white",colors)} key="3" aria-label="Accordion 3" title="How can I get started with Ideete?">
        {Content_3}
      </AccordionItem>
      <AccordionItem className={cn("bg-gray-600 text-white",colors)} key="4" aria-label="Accordion 4" title="What happens if my idea is not unique?">
        {Content_4}
      </AccordionItem>
      <AccordionItem className={cn("bg-gray-600 text-white",colors)} key="5" aria-label="Accordion 5" title="Is Ideete free to use?">
        {Content_5}
      </AccordionItem>
    </Accordion>
    </>
    );
}

export default Faqs;