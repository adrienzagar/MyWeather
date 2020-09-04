import { connect } from 'react-redux';

import Home from '../../components/Home';
import { setInputValue } from '../../actions/home';

// Reading State
const mapStateToProps = (state) => ({
    inputValue: state.inputValue,
});

// Writing State
const mapDispatchToProps = (dispatch) => ({
    setInputValue: (inputValue) => {
        dispatch(setInputValue(inputValue))

        // Other way to write :
        // const action = setInputValue(inputValue);
        // dispatch(action)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);  