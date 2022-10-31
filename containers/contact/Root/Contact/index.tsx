import Box from "components/Box"
import ButtonNavigation from "components/ButtonNavigation"
import Card from "components/Card"
import Link from "components/Link"
import Section from "components/Section"
import SectionContent from "components/SectionContent"
import SectionLabel from "components/SectionLabel"
import { FaEnvelope, FaPhone } from "react-icons/fa"
import styled from "styled-components"

const Wrapper = styled(Section)``

const Label = styled(SectionLabel)`
  text-align: center;
  margin-top: 80px;
`

const Content = styled(SectionContent)`
  margin: 80px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const Disclaimer = styled(Box)`
  text-align: center;
`

const ContactOptions = styled(Box)`
  display: flex;
  gap: 80px;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
  } ;
`

const ContactOption = styled(Card)`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`

const ContactOptionLabel = styled(Box)``

const ContactOptionValue = styled(Box)``

const ContactOptionButton = styled(ButtonNavigation)`
  background: #2d9cd5;
  padding: 20px;
  color: white;
  :hover {
    background: #9b268c;
  }
`

interface ContactProps {
  className?: string
}

const contact = {
  phone: { number: "+353-12-345-6789" },

  email: {
    to: "info@hirenova.com",
    subject: "Website Query",
    body: "Hi HireNova,\n\n... Please write your message here ...",
  },
}

const Contact = ({ className }: ContactProps) => {
  return (
    <Wrapper className={className} label="Search">
      <Label>Drop us a line</Label>
      <Content>
        <Disclaimer>
          Please call during working hours (Irish Standard Time).
        </Disclaimer>
        <ContactOptions>
          <ContactOption>
            <FaPhone />
            <ContactOptionLabel>Phone</ContactOptionLabel>
            <ContactOptionValue>+353-12-345-6789</ContactOptionValue>
            <ContactOptionButton
              redirect={{ pathname: `tel:${contact.phone.number}` }}
            >
              Call now
            </ContactOptionButton>
          </ContactOption>
          <ContactOption>
            <FaEnvelope />
            <ContactOptionLabel>Email</ContactOptionLabel>
            <ContactOptionValue>{contact.email.to}</ContactOptionValue>
            <ContactOptionButton
              redirect={{
                pathname: `mailto:${
                  contact.email.to
                }?subject=${encodeURIComponent(
                  contact.email.subject
                )}&body=${encodeURIComponent(contact.email.body)}`,
                target: "_blank",
              }}
            >
              Send an email
            </ContactOptionButton>
          </ContactOption>
        </ContactOptions>
      </Content>
    </Wrapper>
  )
}

export default Contact
