 ///var 
 //example 1///
// var carName='toyota';//global
// function myFunction() {
//     //var carName = "Volvo";
//      code here CAN use carName
//     console.log(carName) //Volvo
//     function xyz(){
//       console.log(carName) //Volvo
//     }
//   }
//   myFunction()
//   console.log(carName); //toyota 
 
  ///example 2///
 var make=1998;
 function check(){
     var checkmodel=12;
     if(checkmodel==12){ //true
        //var checkmodel='yes';
        let checkmodel='yes';
     }
     console.log(checkmodel) //12

     checkmodel++; // 13
     console.log(checkmodel)

 }
check();
  //// let 
  var messages = ["Cat", "I like mouse!", "Nasty bugs"];
             //   messages[0] messages[1]   messages[2]

  for (let i = 0; i < messages.length; i++) {
   
    setTimeout(function () {
      console.log(messages[i]); //undefined undefined undefined
    }, 1500);
  }
  /// i =0 waites for settimeout print messages[i]
  ///i=1 wait for setitme out
  //i=2 wait for settimeout
  ///i=3
  //go backto settimeout messages[3] is undefined
  
  ////const
  const anyNum=12;
// const anyNum=13; //wrong
// anyNum--; //wrong
