
console.log('Alhamdullilah we are here');  

let signin=document.getElementById('signin');
signin.addEventListener('click',fun1);


function fun1(e){

    e.preventDefault();

    
 console.log('user have clicked to signin');


 let naam=document.getElementById('name');

if(naam.value!=undefined)
{
// console.log(naam.value); 
}
else{
    console.log('Nothing to show');
} 

// naam.value='';




let email=document.getElementById('inputEmail4');

if(email.value!=undefined)
{
// console.log(email.value);

}
else{
    console.log('Nothing to show');
} 

// email.value='';




let language=document.getElementById('inputlanguage');

if(language.value!=undefined)
{
// console.log(language.value); 


}
else{
    console.log('Nothing to show');
} 

// language.value='';




let city=document.getElementById('inputCity');

if(city.value!=undefined)
{
// console.log(city.value); 

}
else{
    console.log('Nothing to show');
} 

// city.value='';



let state=document.getElementById('inputState');

if(state.value!=undefined)
{
// console.log(state.value); 

}
else{
    console.log('Nothing to show');
} 

// state.value='';

 
     nameobj=naam.value;
     emailobj=email.value;
     languageobj=language.value;
     cityobj=city.value;
     stateobj=state.value;


     naam.value='';
     email.value='';
     language.value='';
     city.value='';
     state.value='';


 let myobj={ name: nameobj, 
            email: emailobj,
            language: languageobj,
            city: cityobj,
            state: stateobj
           }

 
  console.log(myobj);   

   
 let storage=localStorage.getItem('mylist');

 if(storage == null)
    {
     myarray=[];   
    }
    else{
    myarray=JSON.parse(storage);
    }
     if(myarray.length<3){
     myarray.push(myobj);
     localStorage.setItem('mylist',JSON.stringify(myarray));
     }
     else{
         console.log('sorry you cant add more than 3 CV');
     }
     console.log('length is : ',myarray.length);
}




 let display=document.getElementById('display');

 display.addEventListener('click',fun2);

  function fun2(e){

    e.preventDefault();
  }

  display.onclick=function(){
      location.href='practice5.html';



      let list=mylist;

      list.forEach(element => {
        console.log(element.name);
     });



  }
 


  

  

 