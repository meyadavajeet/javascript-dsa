const arr = [12, 9, 141, 837, 18, 4, 1, 14, 514, 41];

for (var i = 0; i < (arr.length); i++) {
    for (var j = 1; j < (arr.length - i); j++) {
        if (arr[j - 1] > arr[j]) {
            arr[j - 1] = arr[j - 1] + arr[j];
            arr[j] = arr[j - 1] - arr[j];
            arr[j - 1] = arr[j - 1] - arr[j]


            // let temp = arr[j];
            // arr[j] = arr[j + 1];
            // arr[j + 1] = temp;
        }
    }

}
for (val in arr) {
    console.log(`${arr[val]} `)
}