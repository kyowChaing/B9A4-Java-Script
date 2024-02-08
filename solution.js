function calculateMoney(ticketSale){
    if(ticketSale<0){
        const warning ="Invalid Number";
        return warning;
    }
    else{
        let remainMony=(ticketSale*120)-(500+(8*50));
        return remainMony;
    }
}
// let result1 = calculateMoney(-130);
// console.log(result1);



function checkName(name){
    const string='';
    const goodChar='ayieouwAYIEOUW';

    if(typeof name !== typeof string){
        const warning = 'invalid';
        return warning;
    }else{
        let nameLength=name.length;
        let lastCharOfName = name[nameLength-1];
        
        if (goodChar.includes(lastCharOfName)) {
            return 'Good Name';
        } else {
            return 'Bad Name';
        } 
    }    
}


// let result = checkName(123);
// console.log(result);


function deleteInvalids(array){

    if (Array.isArray(array)) {
        let newArray=array.filter((arrayValue)=> typeof arrayValue ==='number' && !isNaN(arrayValue));
        return newArray;
    } else {
        return 'Invalid Array';
    }
}

// console.log(deleteInvalids({k:'4',N:'aN',p:'u',t:"-8", h:5, o:-6}));


function password(obj){
   let birthYearLength=obj.birthYear.toString().length;
    if (obj.name !== undefined && obj.siteName !== undefined && birthYearLength===4) {
        let convertToUpper= obj.siteName.charAt(0).toUpperCase()
        obj.siteName=convertToUpper+obj.siteName.slice(1);
        let result =  obj.siteName+'#'+obj.name+'@'+obj.birthYear;
        return result;
    } else {
        let message="invalid";
        return message;
    }
    
}

// console.log(password({name:"killo",birthYear:1999,siteName:"google"}))
// console.log(password({name:"killo",birthYear:200,siteName:"google"}))
// console.log(password({name:"",birthYear:1999,siteName:"google"}))
// console.log(password({birthYear:1999,siteName:"google"}))


function monthlySavings(arr,livingCost){
    
    if (Array.isArray(arr) && typeof livingCost ==="number") {
        let remainAmount=0;
        for (const paymentAmount of arr) {
            if (paymentAmount >= 3000) {
               remainAfterTaxt = paymentAmount - (paymentAmount*(20/100));
               remainAmount+=remainAfterTaxt;
            } else {
                remainAmount+=paymentAmount;
            }
        }

        let savings = remainAmount-livingCost;
        if (savings>=0) {
            return savings;
        } else {
            let advice="earn more";
            return advice;
        }
    } else {
        return 'invalid input';
    }
}

// console.log(monthlySavings([1000,2000,3000],5400));
// console.log(monthlySavings([1000,2000,2500],5000));
// console.log(monthlySavings([900,2700,3400],10000));
// console.log(monthlySavings(100,[9000,20000,3000],5400));
// console.log(monthlySavings([900,20,300],'l'));
// console.log(monthlySavings({n:[900,20,300]},'l'));