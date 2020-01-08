import { CONSTANTS_RETRIEVED, LANDING_PAGE_RETRIEVED, USER_PROFILE_LOADED } from '../actions';

const initialState = {
    constants: {
        logo: "",
        prideName: ""
    },
    landingPageContent: {
        title: "",
        mainImage: "",
        mainText: [],
        workItems: [],
        belowTheFold: []
    },
    user: undefined
};

export default function applicationState(state = initialState, action: any) {
    switch (action.type) {
        case CONSTANTS_RETRIEVED:
            return {
                ...state,
                constants: action.payload
            };
        case LANDING_PAGE_RETRIEVED:
            return {
                ...state,
                landingPageContent: action.payload
            };
        case USER_PROFILE_LOADED:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}