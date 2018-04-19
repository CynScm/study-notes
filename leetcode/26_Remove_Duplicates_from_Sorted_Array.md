## 26(删除排序数组中的重复项).给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

[点此前往现场](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

注意:
1. 只能在原数组上改，2.你不需要考虑数组中超出新长度后面的元素

### js实现方式
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums||nums.length === 0){
        return 0;
    }
    let size = 0;//用于最终返回去重后的新的长度，过程中起的作用就是记录‘新’数组（其实是在原数组上改的）的末尾
    for(let i = 0;i<nums.length;i++){
        //起初i和size的起始位置一致(其实如果i开始赋值为1也没问题)，并且i会一次次往后走，属于fast-runner,size属于slow-runner。
        //只要nums[i]和nums[size]不一样了就记录下来（因为要重新生成不重复的数组），一样就略过
        if(nums[i]!==nums[size]){
            nums[++size]=nums[i];
        }
    }
    return size+1
};
let nums = [1,1,2,2,3,4,5];
removeDuplicates(nums)
```
1. Time complexity : O(n). Assume that nn is the length of array. Each of `i` and `size` traverses at most nn steps.

2. Space complexity : O(1).

### java实现方式 (核心原理同js方式)
```java
public int removeDuplicates(int[] nums) {
    if (nums.length == 0) return 0;
    int i = 0;
    for (int j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
```

### python3实现方式

```python
class Solution:
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        for i in reversed(range(1, len(nums))):
            if nums[i] == nums[i - 1]:
                nums.pop(i)
        return len(nums)
```


    感想：实现方式特别多，甚至同一种语言都有很多方式可以实现，而且这些方式的简略程度不一