//2485. Find the Pivot Integer

//runtime : 56ms

var pivotInteger = function(n) {
    var total = (n * (n + 1)) / 2;
    var sum_i = 0;
    while (n > 0) {
        if (sum_i === total - sum_i - n) {
            return n;
        }
        sum_i += n;
        n--;
    }
    return -1;
}
