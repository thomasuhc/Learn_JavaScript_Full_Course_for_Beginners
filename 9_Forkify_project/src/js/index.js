// Global app controller
 
import Search from "./models/Search";
import * as SearchView from "./views/searchView"
import {elements} from "./views/base";


const state = {}

const controlSearch = async () => {

    const query = SearchView.getInput();

    if(query) {
        
        state.search = new Search(query);

        SearchView.clearInput();
        SearchView.clearResults();

        await state.search.getResults();

        SearchView.renderResults(state.search.result);
    }

}

elements.searchForm.addEventListener("submit", e => {

    e.preventDefault();
    controlSearch();
});


search.getResults();