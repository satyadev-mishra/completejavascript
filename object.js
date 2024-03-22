// const key1="objkey1"
// const key2="objkey2"
// const value1="value1"
// const value2="value2"
// const obj={}

// obj[key1]=value1
// obj[key2]=value2
// console.log(obj)



// const about={
//     myFirstName:"Satyadev",
//     myLastName:"Mishra",
//     myAge:24,
// }

// const {myFirstName,myLastName}=about;
// // else if we want to change variable name so follow bellow syntax
// const {myFirstName:var1,myLastName:var2}=about;
// // console.log(myFirstName,myLastName)
// console.log(var1,var2)



const users=[
    {userId:1,firstName:"Satadev",lastName:"Mishra",gender:"male"},
    {userId:2,firstName:"Vishal",lastName:"kumar",gender:"male"},
    {userId:3,firstName:"Sakshi",lastName:"Chaurasiya",gender:"female"},
    {userId:4,firstName:"Shivam",lastName:"tiwari",gender:"male"},
];
// console.log(users)
// console.log(users[0],users[1],users[2],users[3])
//Destructuring

// const [user1Details,user1Details2,user1Detail3]=users;
const [{userId:id},,userDetail3]=users;
console.log(id,userDetail3)


