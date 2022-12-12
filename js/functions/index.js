

function x() {

    let a = 10

    return function y() {
        console.log(a)
    }
}

let z = x()
z()