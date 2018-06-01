const counterReducer = (state = [], {type}) => {
    switch(type) {
        case 'INCREMENT_COUNT':
            return {count: state.count + 1};
        break;
        case 'DECREMENT_COUNT':
            return {count: state.count - 1};
        case 'RESET_COUNT':
            return {count: 0};
        default:
            return state;
    }
};

export default counterReducer;