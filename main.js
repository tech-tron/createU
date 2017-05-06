//input variables
var genderMale = document.getElementById('male');
var genderFemale  = document.getElementById(
'female');

var fName  = document.getElementById('firstName');
var lName  = document.getElementById('lastName');

var bDay = document.getElementById('birthdate');

var hBlonde = document.getElementById('blonde');
var hBurnette = document.getElementById('burnette');
var hGinger = document.getElementById('ginger');
var hblack = document.getElementById('black');
var hGrey = document.getElementById('grey');

var iBlue = document.getElementById('blue');
var iGreen = document.getElementById('green');
var iHazel = document.getElementById('hazel');
var iBrown = document.getElementById('brown');

var subBut = document.getElementById('submit_people');

var gender = '';
var firstName = '';
var lastName = '';

genderMale.onclick = getGender;
genderFemale.onclick = getGender;

/*
  active class drops down the button
  takes up whole space
  the others come together
  others on hover upsize slightly
  //buttonEngaged(){};
*/
if(gender != ""){

}

//methods
function getGender() {
  gender = this.id
  this.style.height = '50px';
  document.getElementById('gender').style.margin = '0';
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


 console.log('JS is included');
