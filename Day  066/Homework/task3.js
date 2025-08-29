function filterNumbers(numbers) {
    return numbers
        .map(num => num * 3)  
        .filter(num => num > 20);  
}
