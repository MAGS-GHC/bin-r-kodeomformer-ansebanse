let ipadresse1 = document.getElementById("ip1").value;
let ipadresse2 = document.getElementById("ip2").value;
let ipadresse3 = document.getElementById("ip3").value;
let ipadresse4 = document.getElementById("ip4").value;
let binært = "";
let rep = "";

function update() {
  ipadresse1 = document.getElementById("ip1").value;
  console.log(ipadresse1);
  if (ipadresse1 >= 128) {
    ipadresse1 -= 128;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 64) {
    ipadresse1 -= 64;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 32) {
    ipadresse1 -= 32;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 16) {
    ipadresse1 -= 16;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 8) {
    ipadresse1 -= 8;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 4) {
    ipadresse1 -= 4;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 2) {
    ipadresse1 -= 2;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 1) {
    ipadresse1 -= 1;
    binært += "1";
  } else {
    binært += "0";
  }
  console.log(binært);
  rep += binært + ".";
  binært = "";
}

function update1() {
  ipadresse2 = document.getElementById("ip2").value;
  console.log(ipadresse2);
  if (ipadresse2 >= 128) {
    ipadresse2 -= 128;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 64) {
    ipadresse2 -= 64;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 32) {
    ipadresse2 -= 32;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 16) {
    ipadresse2 -= 16;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 8) {
    ipadresse2 -= 8;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 4) {
    ipadresse2 -= 4;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 2) {
    ipadresse2 -= 2;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 1) {
    ipadresse2 -= 1;
    binært += "1";
  } else {
    binært += "0";
  }
  console.log(binært);
  rep += binært + ".";
  binært = "";
}

function update2() {
  ipadresse3 = document.getElementById("ip3").value;
  console.log(ipadresse3);
  if (ipadresse3 >= 128) {
    ipadresse3 -= 128;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 64) {
    ipadresse3 -= 64;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 32) {
    ipadresse3 -= 32;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 16) {
    ipadresse3 -= 16;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 8) {
    ipadresse3 -= 8;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 4) {
    ipadresse3 -= 4;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 2) {
    ipadresse3 -= 2;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 1) {
    ipadresse3 -= 1;
    binært += "1";
  } else {
    binært += "0";
  }
  console.log(binært);
  rep += binært + ".";
  binært = "";
}

function update3() {
  ipadresse4 = document.getElementById("ip4").value;
  console.log(ipadresse4);
  if (ipadresse4 >= 128) {
    ipadresse4 -= 128;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 64) {
    ipadresse4 -= 64;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 32) {
    ipadresse4 -= 32;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 16) {
    ipadresse4 -= 16;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 8) {
    ipadresse4 -= 8;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 4) {
    ipadresse4 -= 4;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 2) {
    ipadresse4 -= 2;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 1) {
    ipadresse4 -= 1;
    binært += "1";
  } else {
    binært += "0";
  }
  console.log(binært);
  rep += binært;
  binært = "";
}


function svar() {
  document.getElementById("svar").innerHTML = "Binary representation: " + rep; //
  console.log(rep);
}

//moving over to the other converter 

let Binary = document.getElementById("binær1").value;

function downdate() {

}

//for (let i = 0; i < 8; i++) {
//console.log(2 ** i);
//}