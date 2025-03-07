import * as Patterns from './patterns'
import * as Constants from './constants'

const isEmailValid = (val, minVal, maxVal, isRequired) => {
    if (isRequired && (val === "" || !val)) {
        return Constants.FIELD_REQUIRED
    }

    if (val !== "" && val!==null ){
        if(val.match(Patterns.EMAIL_PATTERN) === null) {
        return Constants.EMAIL_NOT_VALID
    }
    }

    if (minVal && val.length < minVal) {
        return Constants.VALUE_TOO_SHORT
    }

    if (maxVal && val.length > maxVal) {
        return Constants.VALUE_TOO_LONG
    }

    return ""
}

const isPasswordValid = (val, minVal, maxVal, isRequired) => {
    if (isRequired && (val === "" || !val)) {
        return Constants.FIELD_REQUIRED;
    }

    if (minVal && val.length < minVal) {
        return Constants.VALUE_TOO_SHORT;
    }

    if (maxVal && val.length > maxVal) {
        return Constants.VALUE_TOO_LONG;
    }

    return "";
}


const isNameValid = (val, min, max, isRequired) => {
    if (isRequired && (val === "" || !val)) {
        return Constants.FIELD_REQUIRED;
    }

    if (min && val.length < min) {
        return Constants.VALUE_TOO_SHORT;
    }

    if (max && val.length > max) {
        return Constants.VALUE_TOO_LONG;
    }

    if (val !== "" && val.match(Patterns.NAME_PATTERN) === null) {
        return Constants.INVALID_VALUE;
    }

    return "";
}

const isPhoneNumberValid = (val, min, max, isRequired) => {
    if (isRequired && (val === "" || !val)) {
        return Constants.FIELD_REQUIRED;
    }

    if (min && val.length < min) {
        return Constants.VALUE_TOO_SHORT;
    }

    if (max && val.length > max) {
        return Constants.VALUE_TOO_LONG;
    }

    if (val !== "" && val.match(Patterns.PHONENO_PATTERN) === null) {
        return Constants.INVALID_VALUE;
    }

    return "";
}

const isCountryNameValid = (val, min, max, isRequired) => {
    if (isRequired && (val === "" || !val)) {
        return Constants.FIELD_REQUIRED;
    }

    if (min && val.length < min) {
        return Constants.VALUE_TOO_SHORT;
    }

    if (max && val.length > max) {
        return Constants.VALUE_TOO_LONG;
    }

    if (val !== "" && val.match(Patterns.COUNTRY_PATTERN) === null) {
        return Constants.INVALID_VALUE;
    }

    return "";
}
const isUserIdValid = (val, min, max, isRequired) => {
    if (isRequired && (val === "" || !val)) {
        return Constants.FIELD_REQUIRED;
    }

    if (min && val.length < min) {
        return Constants.VALUE_TOO_SHORT;
    }

    if (max && val.length > max) {
        return Constants.VALUE_TOO_LONG;
    }

    if (val !== "" && val.match(Patterns.USERID_PATTERN) === null) {
        return Constants.INVALID_VALUE;
    }

    return "";
}

const isAlphaCodeValid = (val, min, max, isRequired) => {
    // console.log(val.match(Patterns.ALPHA_CODE));
    if (isRequired && (val === "" || !val)) {
        return Constants.FIELD_REQUIRED;
    }

    if (min && val.length < min) {
        return Constants.VALUE_TOO_SHORT;
    }

    if (max && val.length > max) {
        return Constants.VALUE_TOO_LONG;
    }

    if (val !== "" && val.match(Patterns.ALPHA_CODE) === null) {
        return Constants.INVALID_VALUE;
    }

    return "";
}

const isCallingValid = (val, min, max, isRequired) => {
    if (isRequired && (val === "" || !val)) {
        return Constants.FIELD_REQUIRED;
    }

    if (min && val.length < min) {
        return Constants.VALUE_TOO_SHORT;
    }

    if (max && val.length > max) {
        return Constants.VALUE_TOO_LONG;
    }

    if (val !== "" && val.match(Patterns.CALLING_CODE) === null) {
        return Constants.INVALID_VALUE;
    }

    return "";
}



const isTitleValid = (val, min, max, isRequired) => {
    if (isRequired && (val === "" || !val)) {
        return Constants.FIELD_REQUIRED;
    }
    if (min && val.length < min) {
        return Constants.VALUE_TOO_SHORT;
    }

    if (max && val.length > max) {
        return Constants.VALUE_TOO_LONG;
    }
    
    if (min && val.length < min) {
        return Constants.VALUE_TOO_SHORT;
    }

    if (max && val.length > max) {
        return Constants.VALUE_TOO_LONG;
    }
    
    return "";
}

const isTeamNameValid = (val, min, max, isRequired) => {
    if (isRequired && (val === "" || !val)) {
        return Constants.FIELD_REQUIRED
    }

    if (min && val.length < min) {
        return Constants.VALUE_TOO_SHORT;
    }

    if (max && val.length > max) {
        return Constants.VALUE_TOO_LONG;
    }

    if (val && val !== "" && val.match(Patterns.TEAM_NAME_PATTERN) === null) {
        return Constants.INVALID_VALUE;  
    }

    return "";
}

const isPincodeValid = (val, min, max, isRequired) => {
    if (isRequired && (val === "" || !val)) {
        return Constants.FIELD_REQUIRED;
    }

    if (min && val.length < min) {
        return Constants.VALUE_TOO_SHORT;
    }

    if (max && val.length > max) {
        return Constants.VALUE_TOO_LONG;
    }

    if (val !== "" && val.match(Patterns.PINCODE_PATTERN) === null) {
        return Constants.INVALID_VALUE;
    }

    return "";
}


export const Validator = {
    validate: (fieldType, fieldValue, minVal = null, maxVal = null, isRequired = true) => {
        switch (fieldType) {
            case 'email':
                return isEmailValid(fieldValue, minVal, maxVal, isRequired);
            case 'password':
                return isPasswordValid(fieldValue, minVal, maxVal, isRequired);   
            case 'name':
                return isNameValid(fieldValue, minVal, maxVal, isRequired);
            case 'title':
                return isTitleValid(fieldValue, minVal, maxVal, isRequired);
            case 'phoneNo':
                return isPhoneNumberValid(fieldValue, minVal, maxVal, isRequired);
                
            case 'country':
                return isCountryNameValid(fieldValue, minVal, maxVal, isRequired);
            case 'userId':
                    return isUserIdValid(fieldValue, minVal, maxVal, isRequired);
            case 'alphaCode':
                  return isAlphaCodeValid(fieldValue, minVal, maxVal, isRequired);
            case 'callingCode':
                  return isCallingValid(fieldValue, minVal, maxVal, isRequired);
            case 'teamName':
                return isTeamNameValid(fieldValue, minVal, maxVal, isRequired);
            case 'pincode':
                return isPincodeValid(fieldValue, minVal, maxVal, isRequired);
            default:
                return ""
        }
    }
}