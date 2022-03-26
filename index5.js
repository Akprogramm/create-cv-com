
let ak=localStorage.getItem('mylist');

console.log('mylist is : ',ak);
let akk=JSON.parse(ak);

console.log(akk);

// akk.forEach(element => {
//     // bio_name.innerText=element.name;
//     // console.log(element.name);
//     // bio_email.innerText=element.email;
//     // bio_language.innerText=element.language;
//     // bio_city.innerText=element.city;
//     // bio_state.innerText=element.state;
// });

 
  let bio_name=document.getElementById('bio_name');
  let bio_email=document.getElementById('bio_email');
  let bio_language=document.getElementById('bio_language');
  let bio_city=document.getElementById('bio_city');
  let bio_state=document.getElementById('bio_state');
  
 
 
  function createiterator(value){
      let nextindex=0;

      return{
          next: function(){
          if(value.length>nextindex){
          return{
              value: value[nextindex++],
              done: false
          }
        }
        else{
            return{
                done: true
            }
        }
      } 
    }
  } 


  let next=document.getElementById('next');

  next.addEventListener('click',fun3);
  let iterat=createiterator(akk);

  function fun3(){

   console.log('clicked to fun 3');
  // console.log(iterat.next());
  let iterator=iterat.next().value;

  // let image=document.getElementById('image');
    // image.innerHTML='<img src="https://source.unsplash.com/200x200/?employee face" alt="">'


  console.log(iterator.name);
  nameid.innerText=iterator.name;
  console.log(iterator.email);
  emailid.innerText=iterator.email;
  console.log(iterator.language);
  languageid.innerText=iterator.language;
  console.log(iterator.city);
  cityid.innerText=iterator.city;
  console.log(iterator.state);
  stateid.innerText=iterator.state;

  if(iterator.language=='javascript and react')
  {
    let image=document.getElementById('image');
    image.innerHTML='<img src="https://source.unsplash.com/200x200/?employee face" alt="">'
  }
  else if(iterator.language=='python')
  {
    let image=document.getElementById('image');
    image.innerHTML='<img src="https://source.unsplash.com/200x200/?male face" alt="">'
  }
  else if(iterator.language=='java')
  {
    let image=document.getElementById('image');
    image.innerHTML='<img src="https://source.unsplash.com/200x200/?female face" alt="">'
  }
  else{
    console.log('cant connect');
  }

  
}
