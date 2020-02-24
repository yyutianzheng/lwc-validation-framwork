//module pattern to create encapsulation
 const Result = (() => {
    let invalidFields = [];// encapsulated with closure

    const addInvalidField = (field) => invalidFields.push(field);
    const clear = () => { invalidFields = [] };

    const hasErrors = () => { return invalidFields.length === 0 ? true : false };

    const fireInlineErrors = () => {
        invalidFields.forEach( e => {
            e.reportValidity();
        });
    }

    return {
        clear,
        addInvalidField,
        hasErrors : hasErrors(),
        fireInlineErrors
    };
})();

export default Result


