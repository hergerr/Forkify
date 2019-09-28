import axios from 'axios'

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults(query){
        const key = '0fafe81882e0ba37430d2714db933d38';
        try{
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.recipes = res.data.recipes
        }
        catch(error){
            console.log(error);
        }
    }
    
}


