function bubbleSort() {
    const input = document.getElementById('number-input').value;
    const array = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    
    if (array.length === 0) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
        return;
    }

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap the elements
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    // Display the sorted result
    document.getElementById('result').innerText = `Sorted Numbers: ${array.join(',')}`;
}
