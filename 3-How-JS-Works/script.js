///////////////////////////////////////
// Lecture: Hoisting


/*calculateAge (1965);

function calculateAge (yearOfBirth) {
    console.log(2017 - yearOfBirth);
}
*/
//retirement (1990);

// var retirement = function(yearOfBirth){
//     console.log(65 - (2016 - yearOfBirth));
// }

//variables

// console.log(age);
// var age = 23;

// function foo () {
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example


/*var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}*/

///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

/*calculateAge(1988);

function calculateAge(yearOfBirth) {
    console.log(2017 - yearOfBirth);
    console.log(this);
}
*/
console.log('loaded!');

var john = {
    name: 'John',
    yearOfBirth: 1988,
    calculateAge: function(){
        console.log(this);
        console.log(2017 - (this.yearOfBirth));
        
/*        function innerFunction(){
            console.log(this);
        }
        innerFunction();
        }*/
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
/*    calculateAge: function(){
        console.log(this);
        console.log(2017 - (this.yearOfBirth));
    }*/
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();




