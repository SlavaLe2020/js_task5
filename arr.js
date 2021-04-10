let passportArr = [
{
    name:"Ivan",
    lastname:"Ivanov",
    fatherName:"Ivanovich",
    birdhdate:"01.01.1970",
    registrationCountry:"Belarus",
    registrationCity:"Minsk",
    registrationAddress:"Lenina st.,21",
    issuedByDepartment:"Leninsky district police department",
    dateOfIssue:"",
    validBefore:""
},

{
    name:"Slava",
    lastname:"Sidorov",
    fatherName:"Petrovich",
    birdhdate:"01.02.1980",
    registrationCountry:"Belarus",
    registrationCity:"Postavy",
    registrationAddress:"Sovetskaya st.,7",
    issuedByDepartment:"Leninsky district police department",
    dateOfIssue:"",
    validBefore:""
}
];

function sortByParam(passportList, paramName){
    let sortParam = function(a, b){
        if (a[paramName] > b[paramName]) {
            return 1;
        }
        if (a[paramName] < b[paramName]) {
            return -1;
        }
        return 0;
    }
    return passportList.sort(sortParam);
}
sortByParam(passportArr, "name");
console.log(passportArr); 