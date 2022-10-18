import React from "react";
import img from "../src/img/amazon-logo-pack/amazon-logo-white.png";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <HeaderLogo>
        <img src={`${img}`} />
      </HeaderLogo>

      <HeaderOptionAddress>
        <i class="fa-regular fa-location-dot"></i>
        <HeaderOption>
          <OptionLineOne className="Header-optionLineOne">Hello</OptionLineOne>
          <OptionLineTwo className="Header-optionLineTwo">
            Select your address
          </OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type="text" alt="search" />
        <HeaderSearchIconConatainer>
        <i class="fa-sharp fa-solid fa-cart-shopping"></i>
        </HeaderSearchIconConatainer>
      </HeaderSearch>

      <HeaderNavItems>
        <HeaderOption>
          <OptionLineOne>Hello ,Ambuj</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Return </OptionLineOne>
          <OptionLineTwo>& Deliveries</OptionLineTwo>
        </HeaderOption>

        <HeaderOptionCart>
          <i class="fa-sharp fa-solid fa-cart-shopping"></i>
          <CartCount>5</CartCount>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
  );
};

export default Header;
const Container = styled.div`
height:60px;
background-color:#171212;
display:flex;
flex-direction:'row'
align-items:center;
color:white;
justify-content:space-between;

`;
const HeaderLogo = styled.div`
  img {
    margin: 10px;
    width: 100px;
  }
`;
const HeaderOptionAddress = styled.div`
  padding-left: 9px;
  padding-top: 10px;
  paddin-bottom: 10px;
  padding-right: 9px;
  display:flex;
`;
const OptionLineOne = styled.div``;
const OptionLineTwo = styled.div`
  font-weight: 700;
`;
const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  margin-top: 10px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
`;
const HeaderSearchInput = styled.input`
  flex-grow: 1;
  :focus {
    outline: none;
  }
`;

const HeaderSearchIconConatainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderNavItems = styled.div`
  display: flex;
`;
const HeaderOption = styled.div`
  padding-left: 9px;
  padding-top: 10px;
  paddin-bottom: 10px;
  padding-right: 9px;
`;
const HeaderOptionCart = styled.div``;

const CartCount = styled.div``;
