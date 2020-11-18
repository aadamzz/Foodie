import React, { createContext, useState } from 'react';
import Header from './layout/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddRecipe from './layout/AddRecipe'
import RecipeList from './layout/RecipeList'
import Homepage from './layout/Homepage';
import RecipeDetails from './layout/RecipeDetails';
import NotFound from './layout/NotFound';
import EditRecipe from './layout/EditRecipe';

export const recipeDetailsData = createContext();

function App() {

  const [recipeData, setRecipeData] = useState({
    name: "",
    description: "",
    category: "",
    ingredients: "",
    image: "",
    comments: "",
    _id: ""
  });

  return (
    <recipeDetailsData.Provider value={{ recipeData, setRecipeData }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/add" component={AddRecipe} />
          <Route exact path="/edit/:id" component={EditRecipe} />
          <Route exact path="/recipes/:name" component={RecipeList} />
          <Route exact path="/recipes/details/:name" component={RecipeDetails} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </recipeDetailsData.Provider>
  );
}

export default App;
