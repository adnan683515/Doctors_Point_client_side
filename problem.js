

function arrow(fn) {

    for (let i = 0; i < fn.length; i++) {
        const singlefn = fn[i]
        const fnexp = singlefn.split('=>')[1]
        const operator = fnexp[2]
        console.log(fnexp, operator)
    }

}
arrow(["x => x+1", "x => x*x", "x => 2*x"])