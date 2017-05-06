//input variables
var people = [];
var genderMale = document.getElementById('male');
var genderFemale  = document.getElementById(
'female');

var bDay = document.getElementById('birthdate');

document.getElementById('blonde').onclick = setHairColor;
document.getElementById('burnette').onclick = setHairColor;
document.getElementById('ginger').onclick = setHairColor;
document.getElementById('black').onclick = setHairColor;
document.getElementById('grey').onclick = setHairColor;

document.getElementById('blue').onclick = setEyeColor;
document.getElementById('green').onclick = setEyeColor;
document.getElementById('hazel').onclick = setEyeColor;
document.getElementById('brown').onclick = setEyeColor;

var subBut = document.getElementById('submit_people');

var gender = '';
var iColor = '';
var hColor = '';
var age = '';


genderMale.onclick = getGender;
genderFemale.onclick = getGender;
//bDay.onclick = getAge;

/*
  active class drops down the button
  takes up whole space
  the others come together
  others on hover upsize slightly
  //buttonEngaged(){};
*/

subBut.onclick = function(){
  char5 = gender;
  char4 = iColor;
  char3 = hColor;
  char2 = age;
  char1 = document.getElementById('firstName').value;
  char0 = document.getElementById('lastName').value;

  people.push(new Person(char0, char1, char2, char3, char4, char5));
}
count = 0;
//methods
function Person(fName, lName, age, hColor, iColor, sex){
  this.firstName =fName;
  this.lastName = lName;
  this.age = age;
  this.hair = hColor;
  this.eyes = iColor;
  this.gender = sex;

}


function getGender() {
  gender = this.id
  this.style.height = '50px';
  document.getElementById('gender').style.margin = '0';
  console.log(gender);
  if(this.id == genderMale.id){
    this.style.margin = '0';
    this.style.width = '59%';
    this.style.backgroundColor = "#99ffff";
    this.style.left = '0';
  }else{
    this.style.margin = '0';
    this.style.width = '59%';
    this.style.backgroundColor = "#ffb6c1";
    this.style.left = '0';
  }

}

function getAge() {
  age = 'young';
}

function setEyeColor () {
  iColor = this.id;
  console.log(iColor);
}

function setHairColor () {
  hColor = this.id;
  console.log(hColor);
}

 console.log('JS is included');
