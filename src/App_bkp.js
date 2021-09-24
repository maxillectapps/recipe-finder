import React, { useState } from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Header from "./components/headerComponent";
import RecipeContainer from "./components/recipeComponent";


const APP_ID = "888b7708";
const APP_KEY = "93c0f498a2485ce52e8c0a16a938b64b";

const Container = styled.div`
display: flex;
flex-direction: column ;
`;

const RecipeListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px
padding: 30px;
gap: 20px;
justify-content: space-evenly;
`;


const RecipeComponent = (props) => {
  const { recipeObject } = props;
  return
  <RecipeContainer.RecipeContainer>
    <RecipeContainer.CoverImage src={recipeObject.image}></RecipeContainer.CoverImage>
    <RecipeContainer.RecipeName>{recipeObject.label}</RecipeContainer.RecipeName>
    <RecipeContainer.IngredientsText>Ingredients</RecipeContainer.IngredientsText>
    <RecipeContainer.SeeMoreText onClick={() => {window.open(recipeObject.url) }}>See Complete RecipeContainer</RecipeContainer.SeeMoreText>
  </RecipeContainer.RecipeContainer>

}


function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([] );

  const fetchRecipe = (searchString) => {
    axios.get('https://api.edamam.com/search?q=${searchString}app_id=${APP_ID}&app_key=${APP_KEY}&type=public').then(function (response) {
      console.log(response);
      updateRecipeList(response.data.hits);
    });

  }

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
      const timeout =
      setTimeout(() => {
        console.log("TextChanged");
        updateTimeoutId(timeout);
     },500);
  }

  return (
    <Container>
      <Header>
        <Header.AppNameComponent>
          <Header.AppIcon src="hamburger.svg"></Header.AppIcon>
          recipe Search
        </Header.AppNameComponent>
        <Header.SearchComponent>
          <Header.SearchIcon src="/search.svg"/>
          <Header.SearchInput placeholder="Search recipe" onChange={ onTextChange} value={searchQuery}/>
        </Header.SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length && recipeList.map((recipeObj) => {
          <RecipeComponent recipeObj={recipeObj.recipe}/>
        })}
      
      </RecipeListContainer>
   </Container>
  );
}

export default App;
