function convert() {
    let dollar = 429;
    let euro = 507;
    let x = document.getElementById("number").value;
    let s = document.getElementById("type").value;
    let resultDollar;
    let resultEuro;
    let resultTenge;

    if (s === "KZT") {
        resultDollar = x/429;
        resultEuro = x/507;

        document.getElementById("kzt").value = "-";
        document.getElementById("usd").value = resultDollar.toFixed(2);
        document.getElementById("eur").value = resultEuro.toFixed(2);
    }

    if (s === "USD") {
        resultTenge = x*429;
        resultEuro = x/1.18648;

        document.getElementById("kzt").value = resultTenge.toFixed(2);
        document.getElementById("usd").value = "-";
        document.getElementById("eur").value = resultEuro.toFixed(2);
    }

    if (s === "EUR") {
        resultTenge = x*507;
        resultDollar = x*1.176335;
        
        document.getElementById("kzt").value = resultTenge.toFixed(2);
        document.getElementById("usd").value = resultDollar.toFixed(2);
        document.getElementById("eur").value = "-"
    }

    type.onchange = function() {
        convert();
    };
}