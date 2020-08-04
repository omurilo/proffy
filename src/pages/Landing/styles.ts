import styled from "styled-components";
import logoImg from "../../assets/images/logo.svg";
import heroImg from "../../assets/images/landing.svg";

export const Container = styled.div``;

export const Header = styled.div``;

export const HeaderContent = styled.div``;

export const LogoContainer = styled.div``;

export const Logo = styled.img.attrs({
  src: logoImg,
})``;

export const Title = styled.h1``;

export const Hero = styled.img.attrs({
  src: heroImg,
})``;

export const Footer = styled.div``;

export const Message = styled.p`
  & strong {
    display: block;
  }
`;

export const ButtonsContainer = styled.div``;

export const Button = styled.a``;

export const Totals = styled.span``;
