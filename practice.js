// function alarm(hour,minuet) {
//    const timec =setInterval(() => {
//         const date= new Date()
//         console.log(date.getHours()+":"+date.getMinutes());
//         if (date.getHours()==hour&&date.getMinutes()==minuet) {
//             console.log("alrm rimgimg");
            
//         } if (date.getHours()==hour&&date.getMinutes()>minuet) {
//             clearInterval(timec)
//             console.log("stopp alarm");
            
//         }
//     }, 1000);
// }
// alarm(12,25)

// function login(email,password) {
//     if (!email) {console.log("please enter your email");
//     }
//     if (!password) {console.log("please nter your password");
//     }
//     if (email=="sk12@gmail.com") {
//     if (password=="12345678") {
//         return ("succesful login");
//     }else{
//         return ("password is incoorect");}
//     } else{
// return ("email is not register");
//     }
//     }
//    console.log( login("sk12@gmail.com","123456678"))


// function timer(time) {
//     let minuet=0
//     let second=0
//    const timec =setInterval(() => {
//         second=second +1
//         console.log(parseInt(second/60)+":"+second%60);
//         // if(parseInt(second/60)==time)
//             // clearInterval(timec)
        
//     }, 1000);
//     setTimeout(() => {
//         console.log("time is  over");
//         clearInterval(timec)
//     }, time*1000);
// }
// timer(5)


// function swapvalue(a,b) {
//     a=a+b;
//     b=a-b;
//     a=a-b;
//     console.log("value a",a);
//     console.log("value b",b);
// }
// console.log(swapvalue(10,5));


// function namec(first,last) {
//     console.log(first+" "+last);
    
// }
// console.log(namec("sumit","kumar"));


// function factorial(b) {
//     let result=1;
//     for (let index =1; index <=b ; index++) {
//       result=result*index
        
//     }
//     return result;
// }
// console.log(factorial(5));

// function factorial(b) {
//     let result=1;
//     for (let index = 1; index <=b; index++) { 
//    result=result*index
//     }
//     return result
// }
// console.log(factorial(5));


// let a= 5;
// let b=10;
// let c=8;
// if (a&&b) {console.log("truthy value");
// } else {
//     console.log("false value");
    
// }


// let user={
//     Name: "ravi",
// class: "bca",
// age:"20",education:{
//     address: "agra",
//     rollno: "45"
// }

// }
// // let newuser=user
// let newuser=Object.assign({},user)
// // user.education.name="aarav"
// // newuser.Name="aarav"
// // let newuser={...user}
// console.log("user",user);
// console.log("newuser",newuser);



// let a=30;
// let b=60;
// let c=40;
// let d=true;
// let e="sunny";
// // console.log(a==b);

// if (a==b) {console.log("value is equal");
    
// }else {console.log("value is not equal");

// }

// console.log(typeof a,typeof b,typeof d);


// let a=20;
// let b=30;
// let c=50;
// d=a+b;
// if (d=c) {console.log("value is equal");
// }else{
//     console.log("value is not equal");
    
// }

// let a=15;
// let b=20;

// a=a+b
// b=a-b;
// a=a-b;
// console.log("value a",a);
// console.log("value b",b);


// function chek(a,b) {
//     console.log(typeof a,typeof b);
// }
// console.log(chek(5,6));

// function even(a) {
//     if (a%2==0) {console.log("even number");
        
//     } else{
//         console.log("odd number");
        
//     }
    
// }
// console.log(even(6));

// function task(a,b,c) {
//     let d= a*b
//     console.log(a*b/c);
    
// }
// console.log(task(6,4,6));



// function loginotp(sendotp,varifyotp) {
//    if (!sendotp) {return "please enter your mobile no."
//    }
//    if (!varifyotp) {return "please enter your otp "
    
//    }
//    if (sendotp=="987654321") {
//     if (varifyotp=="5678") {
//         return "succesful login"
//     } else {
//         return "otp is incorect"
//     } 
//    }else {
//     return "mobile no. is not register"
//    }
// }
// console.log(loginotp("9876546321","5678"));



// function call1() {
//     return 10
// }
// function call2(a,callback) {
//     console.log(callback() +a);
//     return callback() +a
// }
// console.log(call2(10,call1));


// function call() {
//     return 10
// }
// function call1(a,callback) {
//     console.log("please wait");
    
//     setTimeout(() => {
//         console.log(callback() *a);
//         return callback() *a
//     }, 5000);
// }
// console.log(call1(10,call));


// function clock() {
//     let minuet=0
//     let second=0
//   setInterval(() => {
//      second=second +1
//         const date= new Date()
//         console.log(parseInt(second/60 +":"+ second%60));
        
        // console.log(parseInt(date.getMinutes()+":"+date.getSeconds()));
        // if (date.getHours()==hour&&date.getMinutes()==minuet) {
            // console.log("alarm ringing");
        // }
// if (parseInt(date.getHours())&&date.getMinutes()>minuet) {
//     clearInterval(time)
// console.log("stop alarm");

// }

//     }, 1000);
// }
// clock()




// work  

let a= [8,3,5,4,2]
let b= [1,2,3,4,5,]
// console.log(a.findIndex((ele)=>ele==3 ));    //question 1

// console.log(a.findLast((ele)=>ele<5 ));
// console.log(a.find((ele)=>ele<5));     //question 3

// console.log(a.find((ele)=>ele==3));      //question 4

// console.log(a.filter((ele)=>ele%2==0));
// console.log(a.filter((ele)=>ele%2!==0)); //question 5

// console.log(a.filter(ele=>ele >3&&ele<5));    // question 7
console.log(a.map(num=>num <<=a));


// console.log(a.concat(b));      // question 8

