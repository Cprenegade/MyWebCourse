const hobbiesArray = ['beer', 'football', 'betting'];

function printHobbies(jArray){
    console.log('I like 3 things:');
    for (let index = 0; index < jArray.length; index++) {
        let element = jArray[index];
        console.log('I like ' + element);
}
}

printHobbies(hobbiesArray);

function joinHobbies(jArray){
    console.log(jArray.join());
    console.log(jArray.join(' '));
    console.log(jArray.join('+'));
}

joinHobbies(hobbiesArray);

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostFrequent(jArray){

let m1 = 1;
let m2 = 0;
let item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m2++;
                if (m1<m2)
                {
                  m1=m2; 
                  item = arr1[i];
                }
        }
        m2=0;
}
console.log(item +" ( " + m1 +" times ) ") ;
    
}

mostFrequent(arr1);