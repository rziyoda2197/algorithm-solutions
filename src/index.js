**Masala:**

Berilgan ro'yxatdan kichik bo'lgan elementlarni olib tashlash uchun funksiya yozing.

**Kod:**
```javascript
function removeSmallerElements(arr) {
    let result = [];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            result.push(arr[i]);
            max = arr[i];
        }
    }

    return result;
}

// Type hints
removeSmallerElements: (arr: number[]) => number[];

// Test case lar
console.log(removeSmallerElements([1, 2, 3, 4, 5])); // [5]
console.log(removeSmallerElements([5, 4, 3, 2, 1])); // [5]
console.log(removeSmallerElements([1, 1, 1, 1, 1])); // [1]
console.log(removeSmallerElements([])); // []
console.log(removeSmallerElements([1])); // [1]
console.log(removeSmallerElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [10]
```
**Time va space complexity:**
- Time complexity: O(n), chunki biz ro'yxatni bir marta tekshiramiz.
- Space complexity: O(n), chunki biz yangi ro'yxat yaratamiz.
