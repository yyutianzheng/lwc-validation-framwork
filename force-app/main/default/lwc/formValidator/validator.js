export default class Validator{
    constructor(){
        this.valid = true;
    }

    validate(value) { 
        /*
            1.validate required
            2.validate pattern
            3. validate min length 
        */
        let rules = Object.keys(this.rulesMap)  || false;
        if (!rules)  return; //skip if no rules specified
        rules.forEach( e=> {
            let ruleValue = this.rulesMap[e];               
            if(!this.REGEXP.test(value))
            this.valid= false
        })

        //return this.validateInput(input);
        // ;

    } 
}