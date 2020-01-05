function XO(str) {
    //count the number of Xs and Os
    let xCnt = str.split('x').length + str.split('X').length - 2;
    let oCnt = str.split('o').length + str.split('O').length - 2;
    //conditional
    if(xCnt == oCnt)
      return true;
    else
      return false;
    //console.log(str);
    //console.log(xCnt);
    //console.log(oCnt);
}