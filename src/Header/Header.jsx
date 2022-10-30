import { AiOutlineQrcode } from "react-icons/ai";
import { Logo, StyledHeader } from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        {" "}
        <AiOutlineQrcode size={40} />
        4U
      </Logo>
    </StyledHeader>
  );
};
