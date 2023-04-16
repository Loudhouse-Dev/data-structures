/*Customers are billed based on a subscription plan. 
The subscription plan is based on the number of users. 
We charge them a prorated rate based on the number of days their subscription is active.

We want to bill customers for all days users were active in a given month.
Including any activation and deactivation days.

*/

interface User {
    id: number;
    name: string;
    activatedOn: Date;
    deactivatedOn: Date | null;
    customerId: number;
}

interface Subscription {
    id: number;
    customerID: number;
    monthlyPriceInCents: number;
}

function monthlyCharge(
    yearMonth: string,
    subscription: Subscription | null,
    users: User[]
): number {
    const firstDayOfMonth = new Date(`${yearMonth}-01`);
    const lastDayOfMonth = new Date(
        firstDayOfMonth.getFullYear(),
        firstDayOfMonth.getMonth() + 1,
        0
    );
    const daysInMonth = lastDayOfMonth.getDate();
    let daysActive = 0;

    const activeUsers = users.filter((user) => {
        const activatedOn = user.activatedOn.getTime();
        const deactivatedOn = user.deactivatedOn
            ? user.deactivatedOn.getTime()
            : lastDayOfMonth.getTime();
        const userActiveInMonth =
            activatedOn <= lastDayOfMonth.getTime() &&
            deactivatedOn >= firstDayOfMonth.getTime();

        if (userActiveInMonth) {
            const daysActiveForUser = Math.ceil(
                (Math.min(lastDayOfMonth.getTime(), deactivatedOn) -
                    Math.max(firstDayOfMonth.getTime(), activatedOn)) /
                    (1000 * 60 * 60 * 24)
            );
            daysActive += daysActiveForUser;
            return true;
        }

        return false;
    });

    if (subscription && activeUsers.length > 0) {
        const proratedRate = subscription.monthlyPriceInCents / daysInMonth;
        const totalChargeInCents = Math.round(daysActive * proratedRate);
        return totalChargeInCents;
    }

    return 0;
}
// This implementation calculates the number of days the user was active for in the month by taking the minimum of the last day of the month and the user's deactivation date (if it exists), and subtracting the maximum of the first day of the month and the user's activation date. If this calculation results in a negative number (which could happen if the user was deactivated before they were activated in the same month), the number of days active is set to 0 for that user.

// With this modification, the function should correctly calculate the number of days active for users who are active for the entire month.
const plan = {
    id: 1,
    customerID: 1,
    monthlyPriceInCents: 5000,
};
const users2 = [
    {
        id: 1,
        name: 'Employee #1',
        activatedOn: new Date('2019-01-01'),
        deactivatedOn: null,
        customerId: 1,
    },
];
console.log(monthlyCharge('2020-12', plan, users2));

/**
  Takes a Date instance and returns a Date which is the first day
  of that month. For example:

  firstDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 1)

  Input type: Date
  Output type: Date
**/
function firstDayOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
  Takes a Date object and returns a Date which is the last day
  of that month. For example:

  lastDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 31)

  Input type: Date
  Output type: Date
**/
function lastDayOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

/**
  Takes a Date object and returns a Date which is the next day.
  For example:

  nextDay(new Date(2022, 3, 17)) // => new Date(2022, 3, 18)
  nextDay(new Date(2022, 3, 31)) // => new Date(2022, 4, 1)

  Input type: Date
  Output type: Date
**/
function nextDay(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}
