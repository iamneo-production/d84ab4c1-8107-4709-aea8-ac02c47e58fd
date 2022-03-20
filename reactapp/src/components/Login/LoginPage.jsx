import {
  Title,
  Body,
  LeftContent,
  LeftSection,
  Wrapper,
  RightSection
} from "../styled";
import Login from "./index";
export default function LoginPage() {
  return (
    <Body>
      <Wrapper>
        <LeftSection>
          <LeftContent>
            <Title>All you need is icecream</Title>
          </LeftContent>
        </LeftSection>
        <RightSection>
          <Login />
        </RightSection>
      </Wrapper>
    </Body>
  );
}
