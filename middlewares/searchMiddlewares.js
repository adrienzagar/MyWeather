import axios from 'axios';
import { GET_REPOSITORIES, saveRepositories } from '../actions/home';

const searchMiddlewares = (store) => (next) => (action) => {
    switch (action.type) {
        case GET_REPOSITORIES: {
            const state = store.getState();
            console.log(state)
            const inputValue  = state.home.inputValue;
            console.log(inputValue)

            axios.get(`https://api.github.com/search/repositories?q=${inputValue}&sort=stars&order=desc&page=30&per_page=9`)
                .then(({ data }) => {
                    console.log(data.items)
                    store.dispatch(saveRepositories(data.items))
                })
                .then((error) => {
                    console.log(error)
                });
                next(action);
                break;
        };
        default:
            next(action);
    };
}

export default searchMiddlewares;