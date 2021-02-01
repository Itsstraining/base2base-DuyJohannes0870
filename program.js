function decToBin(num) {
  let bin = 0;
  let rem, i = 1;
  while (num != 0) {
    rem = num % 2;
    num = Math.floor(num / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  console.log(bin);
}

function binToDec(num) {
  let arr = [];
  arr = num.toString().split("");
  arr = arr.reverse();
  let kq = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      kq += 1 * Math.pow(2, i);
    }
  }
  // return kq;
  console.log(kq);
}

function decToHex(n) {
  let so = "0123456789ABCDEF";
  let kq = "";
  while (n > 0) {
    let temp = Math.floor(n % 16);
    kq = so.charAt(temp) + kq;
    n = Math.floor(n / 16);
  }
  console.log(kq);
}

function octToDec(n) {
  let kq = 0;
  let i = 0;
  while (n != 0) {
    kq = kq + Math.floor(n % 10) * Math.pow(8, i);
    i++;
    n /= 10;
  }
  console.log(kq);
}

function binToHex(n) {
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    if ((n.length) % 4 != 0) {
      n = "0" + n;
    }
  }
  let temp = [];
  for (let i = 0; i < n.length; i += 4) {
    temp.push(n.substring(i, i + 4))
  }
  let kq = "";
  for (let i = 0; i < temp.length; i++) { 
    kq = kq + hex(temp[i]);
  }
  console.log(kq);
}

function hex(n){
  switch(n){
    case '0000':return '0';
    case '0001':return '1';
    case '0010':return '2';
    case '0011':return '3';
    case '0100':return '4';
    case '0101':return '5';
    case '0110':return '6';
    case '0111':return '7';
    case '1000':return '8';
    case '1001':return '9';
    case '1010':return 'A';
    case '1011':return 'B';
    case '1100':return 'C';
    case '1101':return 'D';
    case '1110':return 'E';
    case '1111':return 'F';
    default:
      break;
  }
}


function main(input) {
  let inp = input.split(' ');
  let num = inp[0];
  let a = inp[1];
  let b = inp[2];
  if (a == 10 && b == 2) {
    decToBin(num);
  }
  if (a == 2 && b == 10) {
    binToDec(num);
  }
  if (a == 10 && b == 16) {
    decToHex(num);
  }
  if (a == 8 && b == 10) {
    octToDec(num);
  }
  if (a == 2 && b == 16) {
    binToHex(num);
  }
}
module.exports = main;

