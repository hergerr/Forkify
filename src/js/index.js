import Search from './models/Search'
import { elements } from './views/base'
import * as searchView from './views/searchView'

const state = {};

const controlSearch = async() => {
    const query = searchView.getInput();
    console.log(query);

    if(query){
        state.search = new Search(query);
        await state.search.getResults();
        searchView.clearInput();
        searchView.clearResults();
        searchView.renderResults(state.search.recipes);
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});