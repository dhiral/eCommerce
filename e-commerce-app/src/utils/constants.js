// import moment from "moment";

export const FIELD_REQUIRED = "This field is required.";
export const VALUE_TOO_SHORT = "Given value is too short";
export const VALUE_TOO_LONG = "Given value is too long";
export const EMAIL_NOT_VALID = "Email is not valid";
export const INVALID_VALUE = "Invalid value";
export const INVALID_QUANTITY = "Invalid Quantity";
export const INVALID_QUANTITY_MAX = "Quantity should be less than < 100000";
export const SUCCESS_OK         = 200;
export const NOT_AUTHORIZED     = 403;
export const NO_STATUS_CODE     =  0;
export const UNAUTHORIZED_ACTION_TYPES = ["SET_LOGIN_INFORMATION", "FORGOT_PASSWORD","RESET_PASSWORD","VALIDATE_RESET_TOKEN"];
export const ROLE_ID_DEVELOPMET=[
   { "Admin": "612e2f50d21e33001689bd91"},
{"Trader": "612e2f50d21e33001689bd92"},
{"PA": "612e2f50d21e33001689bd93"},
{"PAS": "612e2f50d21e33001689bd94"}
];
export const ROLE_ID_PRODUCTION=[
    { "Admin": "612de7c55403e8001648d113"},
{"Trader": "612de7c55403e8001648d114"},
{"PA": "612de7c55403e8001648d115"},
{"PAS": "612de7c55403e8001648d116"}
]
export const ACCESS_DENIED_MSGS = [ 
    'Access Denied', 
    'Access denied',
    'Unauthorized access. Access token is expired.'
]

export const DATE_FORMAT = "DD/MM/YYYY"

export const ALLOWED_LINK_IN_TEAM_LEADER = [
    { title: "Member", link: "/member" }
]

export const MONTHS = [
    { title: "JAN", value: 1 },
    { title: "FEB", value: 2 },
    { title: "MAR", value: 3 },
    { title: "APR", value: 4 },
    { title: "MAY", value: 5 },
    { title: "JUN", value: 6 },
    { title: "JUL", value: 7 },
    { title: "AUG", value: 8 },
    { title: "SEPT", value: 9 },
    { title: "OCT", value: 10 },
    { title: "NOV", value: 11 },
    { title: "DEC", value: 12 }
]

// Get years from now
// export const GET_YEARS = () => {
//     const currentYear = parseInt(moment().format("YYYY"));
//     const years       = [];
//     for (let i = 0; i < 50; i++) {
//         years.push(currentYear + i);
//     }
//     return years
// };

export const PENDING = "yellow"
export const APPROVE = "green"
export const DECLIENED = "red"