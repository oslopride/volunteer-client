export const CONSTANTS_RETRIEVED = 'CONSTANTS_RETRIEVED';
export const LANDING_PAGE_RETRIEVED = 'LANDING_PAGE_RETRIEVED';

export const RETRIEVE_CONSTANTS = "RETRIEVE_CONSTANTS";
export const RETRIEVE_LANDING_PAGE = "RETRIEVE_LANDING_PAGE";

export const USER_PROFILE_LOADED = 'USER_PROFILE_LOADED';
export const HANDLE_AUTHENTICATION_CALLBACK = 'HANDLE_AUTHENTICATION_CALLBACK';

export function retrieveConstants(){
    return {
        type: RETRIEVE_CONSTANTS
    }
}

export function retrieveLandingPage(){
    return {
        type: RETRIEVE_LANDING_PAGE
    }
}

export function onConstantsRetrieved(logo: string, prideName: string) {
    return {
        type: CONSTANTS_RETRIEVED,
        payload: {
            logo: logo,
            prideName: prideName
        }
    };
}

export function onLandingPageRetrieved(
    title: string,
    mainImage: string,
    mainText: Array<any>,
    workItems: Array<any>,
    belowTheFold: Array<any>) {
    return {
        type: LANDING_PAGE_RETRIEVED,
        payload: {
            title: title,
            mainImage: mainImage,
            mainText: mainText,
            workItems: workItems,
            belowTheFold: belowTheFold
        }
    };
}

export function handleAuthenticationCallback() {
    return {
        type: HANDLE_AUTHENTICATION_CALLBACK
    };
}
