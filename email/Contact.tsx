import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactEmail = ({ name, email, message }: ContactEmailProps) => {
  const previewText = `New contact request from ${name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[600px]">
            <Section className="text-center mt-[32px]">
              <Img
                src="/static/company-logo.png"
                width="100"
                height="100"
                alt="Company Logo"
                className="my-0 mx-auto"
              />
              <Heading className="text-black text-[24px] font-semibold my-[20px]">
                Lager Digital Marketing
              </Heading>
            </Section>
            <Section className="text-center mb-[32px]">
              <Text className="text-black text-[16px] leading-[24px]">
                Hello Lager team,
              </Text>
              <Text className="text-black text-left text-[16px] leading-[24px]">
                There has been a new contact request submitted through the
                website. Below are the details.
              </Text>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Section className="text-left">
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Name:</strong> {name}
              </Text>
              <Text className="text-black text-[14px] leading-[24px] mb-[10px]">
                <strong>Email:</strong>{" "}
                <Link
                  href={`mailto:${email}`}
                  className="text-blue-600 no-underline"
                >
                  {email}
                </Link>
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Message:</strong>
              </Text>
              <Text className="text-black text-[14px] leading-[24px] mb-[20px]">
                {message}
              </Text>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Section>
              <Text className="text-black text-[14px] leading-[24px]">
                If you would like to ask for more information, feel free to
                reply to this email.
              </Text>
            </Section>
            <Section className="mt-[32px] text-center">
              <Text className="text-[#666666] text-[12px] leading-[24px]">
                Lager Digital Marketing
              </Text>
              <Text className="text-[#666666] text-[12px] leading-[24px]">
                Woodbridge, VA United States
              </Text>
              <Text className="text-[#666666] text-[12px] leading-[24px]">
                +1 (571) 353-8818 | lagerdrop@gmail.com
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
