//Problem 1
for (var i = 0; i < 11; i+=1) {
  console.log(i * 100);
}


//Problem2
for (var i = 1; i < 129; i+=i) {
  console.log(i);
}


//Problem3
for (var i = 0; i < 5; i++){
  console.log(i * 2);
}


//Problem4
for (var i = 3; i < 16; i+=3){
  console.log(i);
}

//Problem5
for (var i = 9; i >= 0; i-=1){
  console.log(i);
}

//Problem6
for(var i = 1; i < 5; i+=1){
  for( var j = 0; j < 3; j+=1 ){
  console.log(i);
  }
}

//Problem7
for(var i = 0; i < 4; i+=1){
  for( var j = 0; j < 5; j+=1 ){
  console.log(j);
  }
}

//count to 25 and tell if even or odd

for(i =1; i < 26; i+=1){
  if (i%2 === 0 ) {
    console.log(i + ' is even');
  }
  else {
    console.log(i +' is odd');
  }
}

// that prints the numbers from 1 to 50, however, for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

for (var i = 1; i < 51; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else console.log(i);
}

//to sum the multiples of 3 and 5 under 1000.
var sum = 0;
for(i = 1; i < 1000; i+=1){
  if( i % 3 === 0 || i % 5 === 0){
    sum += i;
  }
}
console.log(sum);

//that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

var hash = '';
for (var i = 1; i < 8; i++) {
  hash += '#'
  console.log(hash);
}
