function hasContiguousSubarrayWithSum(arr, target) {
    const prefixSumMap = new Map();
    let currentSum = 0;

    // Initialize with 0 to handle the case where the subarray starts from index 0
    prefixSumMap.set(0, true);

    for (const num of arr) {
        currentSum += num;

        // Check if there is a prefix sum such that currentSum - prefixSum = target
        if (prefixSumMap.has(currentSum - target)) {
            return true;
        }

        // Store the current cumulative sum in the map
        prefixSumMap.set(currentSum, true);
    }

    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasContiguousSubarrayWithSum(arr, target));  // Output: true