import { connect } from 'react-redux';

import Home from '../../components/Home';
import { setInputValue, getRepositories } from '../../actions/home';

// Reading State
const mapStateToProps = (state) => ({
    inputValue: state.inputValue,
    repositories: state.home.repositories
});

// Writing State
const mapDispatchToProps = (dispatch) => ({
    setInputValue: (inputValue) => dispatch(setInputValue(inputValue)),
    getRepositories: () => dispatch(getRepositories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);  