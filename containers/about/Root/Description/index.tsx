import Section from "components/Section"
import SectionContent from "components/SectionContent"
import SectionLabel from "components/SectionLabel"
import styled from "styled-components"

const Wrapper = styled(Section)``

const Label = styled(SectionLabel)`
  margin: 10%;
`

const Content = styled(SectionContent)`
  margin: 10%;
`

interface DescriptionProps {
  className?: string
}

const Description = ({ className }: DescriptionProps) => {
  return (
    <Wrapper className={className} label="Search">
      <Label>About us</Label>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim blandit
        volutpat maecenas volutpat blandit aliquam etiam. Mi tempus imperdiet
        nulla malesuada. Parturient montes nascetur ridiculus mus mauris.
        Scelerisque purus semper eget duis at tellus at urna condimentum.
        Malesuada nunc vel risus commodo viverra maecenas. Sit amet facilisis
        magna etiam tempor orci eu. Orci phasellus egestas tellus rutrum tellus
        pellentesque eu. Lectus quam id leo in vitae turpis massa sed. Libero
        volutpat sed cras ornare arcu. Sit amet nisl suscipit adipiscing
        bibendum. Netus et malesuada fames ac turpis egestas integer eget
        aliquet. Scelerisque in dictum non consectetur a erat. Felis donec et
        odio pellentesque. Amet venenatis urna cursus eget nunc scelerisque
        viverra. Vel eros donec ac odio tempor orci dapibus. Egestas erat
        imperdiet sed euismod nisi. At risus viverra adipiscing at in tellus.
        Faucibus scelerisque eleifend donec pretium. Tincidunt vitae semper quis
        lectus nulla at volutpat diam. Feugiat sed lectus vestibulum mattis
        ullamcorper velit sed ullamcorper morbi. Quam id leo in vitae.
        Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
        tristique senectus. Aliquam ut porttitor leo a diam sollicitudin tempor
        id eu. Elementum tempus egestas sed sed risus pretium quam. Feugiat
        scelerisque varius morbi enim nunc faucibus a pellentesque. Sed arcu non
        odio euismod lacinia. Tempor nec feugiat nisl pretium fusce id. Dolor
        morbi non arcu risus quis varius quam quisque. Tristique sollicitudin
        nibh sit amet commodo nulla facilisi nullam. Nunc sed id semper risus in
        hendrerit gravida rutrum. Auctor augue mauris augue neque gravida in
        fermentum et sollicitudin.
      </Content>
    </Wrapper>
  )
}

export default Description
