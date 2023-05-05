console.clear();
function mainLet() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
}

function mainVar() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x);
  }
  console.log(x);
}

mainLet();
console.log("*****************************");
mainVar();
