const stringToNumber = dataString =>{
    const changeString = Number(dataString)//+(unary operator)
        if(isNaN(changeString)){
            return 'ERROR: The params is not valid'
        }
    return changeString
}

console.log(stringToNumber('123'))
console.log(stringToNumber('986'))
console.log(stringToNumber('12gsdgfd3'))