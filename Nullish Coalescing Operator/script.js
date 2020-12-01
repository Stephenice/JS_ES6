/**  ?? operator works almost the same way as the OR operator, really almost the same, but it will fix or error 0 falsy value */

let guest = 0; //work for both 0 and empty string
const guestResult = guest ?? 10;
console.log(guestResult);

/**
 * So why does this work?
it is because the nullish coalescing operator works with the idea or with the concept of nullish values instead of falsy values. And nullish values are null and undefined.

That's it. It does not include a zero or the empty string.

So basically, for the nullish coalescing operator, it is as if the zero and the empty string were not falsy values and were instead truthy values as well.
But again, this operator does work with the principle of nullish values. And so all the nullish values will short circuit the evaluation here. Okay, so only if this was null or undefined, only then the second operand here would be executed and returned.
 */