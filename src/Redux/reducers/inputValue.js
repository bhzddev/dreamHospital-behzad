export function inputValue (state='', action){
    switch (action.type){
        case 'INPUT_VALUE' : return action.payload;
        case 'CLEAR_FIELD' : return '';
        default : return state
    }
}