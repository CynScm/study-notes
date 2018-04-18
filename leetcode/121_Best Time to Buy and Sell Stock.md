## 121(买卖股票的最佳时机).假设你有一个数组，其中第 i 个元素是一支给定股票第 i 天的价格。如果您只能完成最多一笔交易（即买入和卖出一股股票），则设计一个算法来找到最大的利润。

[点此前往现场](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

### js实现方式
```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
         if (prices == null || prices.length < 1) {
            return 0;
        }

        let min = prices[0];
        let profit = 0;

        // 第i天的价格可以看作是买入价也可以看作是卖出价
        for (let i = 1; i < prices.length; i++) {
            // 找到更低的买入价
            if (min > prices[i]) {
                // 更新买入价
                min = prices[i];
            } 
            // 当天的价格不低于买入价
            else {
                // 如果当天买出的价格比之前卖出的价格高
                if (profit < prices[i] - min) {
                    // 更新卖出价
                    profit = prices[i] - min;
                } 
            }
        }

        return profit;  
};
```


