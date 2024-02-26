import validate from "validate.js"; 

export const validateString = (id, value) => {
    const constraints = {
        [id]: { 
            presence: {
                allowEmpty: false
            }
        }
    };

    if (value !== "") {
        constraints[id].format = { // Corrected format of constraints object
            pattern: ".+",
            flags: "i",
            message: "value can't be blank" // Corrected typo in error message
        };
    }

    const validationResult = validate({ [id]: value }, constraints); 
    return validationResult && validationResult[id];
};

export const validateEmail = (id, value) => {
    const constraints = {
        [id]: { 
            presence: {
                allowEmpty: false
            }
        }
    };

    if (value !== "") {
        constraints[id].email = true; 
    }

    const validationResult = validate({ [id]: value }, constraints); 
    return validationResult && validationResult[id];
};

export const validatePassword = (id, value) => {
    const constraints = {
        [id]: { 
            presence: {
                allowEmpty: false
            }
        }
    };

    if (value !== "") {
        constraints[id].length = { 
            minimum: 6,
            message: "must be at least 6 characters" 
        };
    }

    const validationResult = validate({ [id]: value }, constraints); 
    return validationResult && validationResult[id];
};
