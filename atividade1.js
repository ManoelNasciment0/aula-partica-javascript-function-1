var maiorEntre = (par1, par2, par3) => {
    if(par1 > par2) {
        console.log("O primeiro parametro é o maior")
    }else if(par2 > par3) {
        console.log("O segundo parametro é o maior")
    }else 
        console.log("O terceiro parametro é o maior")
    return maiorEntre;
}

var r1 = (maiorEntre(2,4,6))
var r2 = (maiorEntre(2,6,4))
var r3 = (maiorEntre(6,4,2))