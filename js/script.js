const users = [{
        name: "Ivan",
        surname: "Ivanov",
        gender: "male",
        age: 30
},
    {
        name: "Anna",
        surname: "Ivanova",
        gender: "female",
        age: 25
   }]


const checkArr = [{
        name: "Anna",
        sername: "Ivanova",
        gender: "female",
        age: 25
     },
    {
        name: "Ivana ",
        surname: "Ivanova",
        gender: "female",
        age: 25
     }]

function excludeBy(users, checkArr, prop) {
    let result = []
    for (let user of users) {
        let isExclude = false;
        for (let exclude of checkArr) {
            if (user[prop] == exclude[prop]) {
                isExclude = true;
            }
        }
        if (!isExclude) {
            result.push(user);
        }

    }
    return result;
}

let result = excludeBy(users, checkArr, 'name')
           console.log(result)



















