import axios from 'axios'
import {key} from '../config'

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults(query) {
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.recipes = res.data.recipes;
        } catch (error) {
            console.log(error);
        }
    }

}


