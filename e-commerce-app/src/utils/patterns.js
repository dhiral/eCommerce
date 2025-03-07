export const EMAIL_PATTERN = /^[a-zA-Z0-9]+[\\._]?[a-zA-Z0-9]+[@]\w+[.]\w{2,3}$/g;

export const NAME_PATTERN  = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
// export const PHONENO_PATTERN = /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
export const COUNTRY_PATTERN = /^[a-zA-Z\s&]*$/
export const PHONENO_PATTERN = /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{2,3}\)?[\s.-]?\d{2,3}[\s.-]?\d{4,9}$/;
export const CALLING_CODE=/\+[\d]{1,3}$/;
export const ALPHA_CODE=/[A-Z]{1,8}$/;

export const USERID_PATTERN =/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/

export const TEAM_NAME_PATTERN = "^([ A-Za-z0-9-_@&']+ ?)*$";
export const PINCODE_PATTERN = /^(\d{3}|\d{4}|\d{5}|\d{6})$/;