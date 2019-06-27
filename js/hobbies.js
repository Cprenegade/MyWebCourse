const hobbiesArray = [
    { name: 'beer', lengthInYearsAtHobby: 40 },
    { name: 'football', lengthInYearsAtHobby: 45},
    { name: 'betting', lengthInYearsAtHobby: 33}
];

function printHobbyInfo(hobby) {
    console.log(` ${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby + ' years'} `)
}

for (let hobby of hobbiesArray) {
    printHobbyInfo(hobby);
}