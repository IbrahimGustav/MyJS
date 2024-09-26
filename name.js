let fullName = (fn,mn,ln) => {
    return `${fn} ${mn} ${ln}, ${getTitle()}`
}

let getTitle = () =>{
    return "B.5c"
}
console.log(fullName("Ibrahim", "Gustav", "Amany"));
