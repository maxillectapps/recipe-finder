import styled from "styled-components";

export const Header = styled.div`
color: white;
background-color: black;
display: flex;
flex-direction: row;
padding: 20px;
justify-content: space-between;
align-items:center;
font-size: 15px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555; 
`;

export const AppNameComponent = styled.div`
display: flex;
align-items: center;
`;

export const AppIcon = styled.img`
 width: 20px;
 height: 20px;
 padding-right: 15px;
`;

export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;

export const SearchInput = styled.input`
 border: none;
 outline: none;
 margin-left: 15px;
 font-size: 12px;
`;

export const SearchIcon = styled.img`
height: 20px;
width: 20px;
`;

