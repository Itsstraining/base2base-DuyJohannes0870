(function () {

  let ConvertBase = function (num) {
    return {
      from: function (baseFrom) {
        return {
          to: function (baseTo) {
            return parseInt(num, baseFrom).toString(baseTo);
          }
        };
      }
    };
  };

  // nhị phân sang thập phân
  ConvertBase.bin2dec = function (num) {
    return ConvertBase(num).from(2).to(10);
  };

  // nhị phân sang thập lục phân
  ConvertBase.bin2hex = function (num) {
    return ConvertBase(num).from(2).to(16);
  };

  // thập phân sang nhị phân
  ConvertBase.dec2bin = function (num) {
    return ConvertBase(num).from(10).to(2);
  };

  // thập phân sang thập lục phân
  ConvertBase.dec2hex = function (num) {
    return ConvertBase(num).from(10).to(16);
  };

  // thập lục phân sang nhị phân
  ConvertBase.hex2bin = function (num) {
    return ConvertBase(num).from(16).to(2);
  };

  // thập lục phân sang thập phân
  ConvertBase.hex2dec = function (num) {
    return ConvertBase(num).from(16).to(10);
  };
  // thập lục phân sang bát phân
  ConvertBase.hex2oct = function (num) {
    return ConvertBase(num).from(16).to(8);
  };
  //Từ bát phân sang thập phân
  ConvertBase.oct2dec = function (num) {
    return ConvertBase(num).from(8).to(10);
  };
  //Từ bát phân sang nhị phân
  ConvertBase.oct2bin = function (num){
    return ConvertBase(num).from(8).to(2);
  };
  //Từ bát phân sang thập lục phân
  ConvertBase.oct2hex = function (num){
    return ConvertBase(num).from(8).to(16);
  };

  //Thập phân đến bát phân
  ConvertBase.dec2oct = function (num) {
    return ConvertBase(num).from(10).to(8);
  };

  this.ConvertBase = ConvertBase;

})(this);

function main(input) {
  let res = input.split(" ");
  let n = res[0];
  let x = res[1];
  let y = res[2];
  if(x==2 && y==10){   // nhị phân sang thập phân
    console.log(ConvertBase.bin2dec(n));
  }
  else if(x==2 && y==16){ //nhị phân sang thập lục phân
    console.log(ConvertBase.bin2hex(n));
  }
  else if(x==10 && y==16){ //thập phân sang thập lục phân
    console.log(ConvertBase.dec2hex(n));
  }
  else if(x==16 && y==2){ //thập lục phân sang nhị phân
    console.log(ConvertBase.hex2bin(n));
  }
  else if(x==10 && y==2){ //thập phân sang nhị phân
    console.log(ConvertBase.dec2bin(n));
  }
  else if(x==16 && y==10){ //thập lục phân sang thập phân
    console.log(ConvertBase.hex2dec(n));
  }
  else if(x==16 && y==8){ //thập lục phân sang bát phân
    console.log(ConvertBase.hex2oct(n));
  }
  else if(x==8 && y==10){ //bát phân sang thập phân
    console.log(ConvertBase.oct2dec(n));
  }
  else if(x==8 && y==2){ //bát phân sang nhị phân
    console.log(ConvertBase.oct2bin(n));
  }
  else if(x==8 && y==16){ //bát phân sang thập lục phân
    console.log(ConvertBase.oct2hex(n));
  }
  else if(x==10 && y==8){ //thập phân sang bát phân
    console.log(ConvertBase.dec2oct(n));
  }
 // '1111' '15'
 // '82''52'
 // 'e2''11100010'
 // '153''10011001'
 //'1FE4ED63D55FA51E''2298222722903156000'
 //'777''511'
 //'551''1047'

}
  module.exports = main;
