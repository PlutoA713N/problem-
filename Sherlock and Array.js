function balancedSums(numbers) {
    let left = 0, right = numbers.length - 1
    let sumLeft = 0, sumRight = 0
    while (left < right) {
        if (sumLeft < sumRight || numbers[left] == 0)
            sumLeft += numbers[left++]
        else if (sumLeft > sumRight || numbers[right] == 0)
            sumRight += numbers[right--]
        else {
            sumRight += numbers[right--]
            sumLeft += numbers[left++]
        }

    }
    return sumLeft == sumRight ? "YES" : "NO"
}
