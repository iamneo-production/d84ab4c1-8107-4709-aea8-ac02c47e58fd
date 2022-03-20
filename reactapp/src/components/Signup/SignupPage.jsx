import {
  Title,
  Body,
  LeftContent,
  LeftSection,
  Wrapper,
  RightSection
} from "../styled";
import Signup from "./index";
export default function SignupPage() {
  return (
    <Body>
      <Wrapper>
        <LeftSection>
          <LeftContent>
            <Title>All you need is icecream</Title>
          </LeftContent>
        </LeftSection>
        <RightSection>
          <Signup />
        </RightSection>
      </Wrapper>
    </Body>
  );
}
