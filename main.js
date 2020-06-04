/*function primesBelow(n) {
    var primes = []
    for (let i = 2; i < n; i++) {
        var prime = true
        for (let o = 2; o < (i / 2); o++) {
            const element = [o];
            if (i % o == 0) {
                prime = false
                break
            }
        }
        if (prime) {
            primes.push(i)
        }

    }
    return primes
}*/

function primesBelow(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}
function factorize(n) {
    var output = []
    var primesWeUse = primesBelow(n)
    var textOutput = ""

    var newnumber = n
    while (newnumber != 1) {
        for (let i = 0; i < primesWeUse.length; i++) {
            const el = primesWeUse[i];
            if (newnumber % el == 0) {
                output.push(el)
                newnumber = newnumber / el
            }
        }
    }
    for (let i = 0; i < output.length; i++) {
        textOutput += "*" + output[i]  
    }
    
    document.getElementById("output").textContent = textOutput.replace("*", "")
}
