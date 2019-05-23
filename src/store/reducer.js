import { actions } from './actions'
import { TOGGLE_SIDEBAR, CHANGE_COLUMN_ORDER } from './types'
const ROOT_STATE = {
    showSidebar: true,
    columnOrder: [
        "Name", "Email", "Phone number",
        "Labels", "Job title & company"
    ],
    contacts: Array(1000).fill({
        "Name": 'Joseph',
        "Email": 'speak2donsimon@gmail.com',
        "Phone number": '08032566213',
        "Labels": "Test",
        "Job title & company": 'Developer',
        "bookmark": false
    }),
    labels: ['Test', 'V'],
    showCreateContact: false
}

const reducer = (state = ROOT_STATE, { type, payload }) => {

    switch (type) {
        case TOGGLE_SIDEBAR:
            return actions[TOGGLE_SIDEBAR](state)
        case CHANGE_COLUMN_ORDER:
            return actions[CHANGE_COLUMN_ORDER](state, payload)
        default:
            return state
    }
}

export default reducer