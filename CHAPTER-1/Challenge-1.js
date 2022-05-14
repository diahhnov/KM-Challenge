
const teks1 = 'Andini sangat mencintai kamu selamanya';
const teks2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

    function changeWord(selectedText, changeText, text){  
        return text.replace(selectedText,changeText)
    }

console.log (changeWord('mencintai','membenci',teks1))
console.log (changeWord('bromo','semeru',teks2))
