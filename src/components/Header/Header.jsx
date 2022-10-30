import { AiOutlineQrcode } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { Logo, StyledHeader } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        {' '}
        <AiOutlineQrcode size={40} />
        4U
      </Logo>
      <a href="https://github.com/mamamamamaa/Qr-code-generator">
        <BsGithub size={40} color={'white'} />
      </a>
    </StyledHeader>
  );
};
