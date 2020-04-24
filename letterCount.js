const letterCount=(char,string)=>{
    let lettersMap=string.split('').reduce((acc,currentLetter) => {
        if(acc[currentLetter]){
            acc[currentLetter]+=1
        }
        else{
            acc[currentLetter]=1
        }
        return acc
    },{})
    return lettersMap[char]
}

module.exports = letterCount
