import { TOGGLE_SIDEBAR, CHANGE_COLUMN_ORDER } from './types'

// action creator
export default {
    [TOGGLE_SIDEBAR]: () => ({ type: TOGGLE_SIDEBAR }),
    [CHANGE_COLUMN_ORDER]: payload => ({ type: CHANGE_COLUMN_ORDER, payload })
}


// actions
export const actions = {
    [TOGGLE_SIDEBAR]: state => ({
        ...state,
        showSidebar: !state.showSidebar
    }),
    [CHANGE_COLUMN_ORDER]: (state, columnOrder) => ({...state, columnOrder})
}