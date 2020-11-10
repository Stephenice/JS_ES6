// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/


function calcuTip(bill){
    let tip;
    if(bill >=50 && bill <= 300){
        tip = 0.15 * bill;
        return tip;
    }else{
        tip = 0.20 * bill;
        return tip;
}
}

const bills = [125,555,44];

const tips = [calcuTip(bills[0]), calcuTip(bills[1]), calcuTip(bills[2])];

const totals =  [tips[0] + bills[0], tips[1]+ bills[1], tips[2] + bills[2]];
console.log(tips);
console.log(totals);

const arr = [3, 5, 7, 2, [4, NaN, null, 4, 8, [3, undefined, 24, null],
null, 5, 1], NaN, 45, 2, 1];

console.log(arr[4][5][2]);