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

function downdate() {
  let binært1;
  binært1 = document.getElementById("binær1").value

  let IPValue = 0;
  if (binært1[0] == 1) {
    IPValue += 128;
  }
  if (binært1[1] == 1) {
    IPValue += 64;
  }
  if (binært1[2] == 1) {
    IPValue += 32;
  }
  if (binært1[3] == 1) {
    IPValue += 16;
  }
  if (binært1[4] == 1) {
    IPValue += 8;
  }
  if (binært1[5] == 1) {
    IPValue += 4;
  }
  if (binært1[6] == 1) {
    IPValue += 2;
  }
  if (binært1[7] == 1) {
    IPValue += 1;
  }
  if (binært1[8] === ".") {
    IPValue += "."
  }
  let IPValue2 = 0;
  if (binært1[9] == 1) {
    IPValue2 += 128
  }
  if (binært1[10] == 1) {
    IPValue2 += 64
  }
  if (binært1[11] == 1) {
    IPValue2 += 32
  }
  if (binært1[12] == 1) {
    IPValue2 += 16
  }
  if (binært1[13] == 1) {
    IPValue2 += 8
  }
  if (binært1[14] == 1) {
    IPValue2 += 4
  }
  if (binært1[15] == 1) {
    IPValue2 += 2
  }
  if (binært1[16] == 1) {
    IPValue2 += 1
  }
  if (binært1[17] === ".") {
    IPValue2 += "."
  }
  let IPValue3 = 0;
  if (binært1[18] == 1) {
    IPValue3 += 128
  }
  if (binært1[19] == 1) {
    IPValue3 += 64
  }
  if (binært1[20] == 1) {
    IPValue3 += 32
  }
  if (binært1[21] == 1) {
    IPValue3 += 16
  }
  if (binært1[22] == 1) {
    IPValue3 += 8
  }
  if (binært1[23] == 1) {
    IPValue3 += 4
  }
  if (binært1[24] == 1) {
    IPValue3 += 2
  }
  if (binært1[25] == 1) {
    IPValue3 += 1
  }
  if (binært1[26] === ".") {
    IPValue3 += "."
  }
  let IPValue4 = 0;
  if (binært1[27] == 1) {
    IPValue4 += 128
  }
  if (binært1[28] == 1) {
    IPValue4 += 64
  }
  if (binært1[29] == 1) {
    IPValue4 += 32
  }
  if (binært1[30] == 1) {
    IPValue4 += 16
  }
  if (binært1[31] == 1) {
    IPValue4 += 8
  }
  if (binært1[32] == 1) {
    IPValue4 += 4
  }
  if (binært1[33] == 1) {
    IPValue4 += 2
  }
  if (binært1[34] == 1) {
    IPValue4 += 1
  }
  console.log(IPValue + IPValue2 + IPValue3 + IPValue4)
  document.getElementById("svar1").innerHTML = "Ip Adresse:" + IPValue + IPValue2 + IPValue3 + IPValue4;
}