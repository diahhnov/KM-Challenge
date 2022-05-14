const checkEmail = (email) => {
        const result =  /^[a-zA-z0-9._-]+@[a-zA-z0-9]+\.[a-zA-]/;
        if (typeof(email) !== 'string'){
            return 'Error: ini bukan email'
        }else{
            if (result.test(email)){
                return 'VALID';
             } else{
                return 'INVALID'; 
             }
    }
}
    
console.log(checkEmail('diahnovi@anti.co.id'));
console.log(checkEmail('diahnovi@anti.com'));
console.log(checkEmail('diahnovi@anti'));
console.log(checkEmail('diahnovi'));
// console.log(checkTypeNumber(checkEmail(123)));//ERROR: karena pada program ini tidak terdapat nama function checkTypeNumber
console.log(checkEmail());