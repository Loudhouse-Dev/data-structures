type Collision = {
    street1: string;
    street2: string;
    numVehiclesInvolved: number;
};

const findMostCollisions = (collisions: Collision[]) => {
    const intersectionCounts = new Map<string, number>();

    //
    for (const collision of collisions) {
        if (collision.numVehiclesInvolved !== 0) {
            const streetArr = [collision.street1, collision.street2].sort();
            const intersection = `${streetArr[0]} & ${streetArr[1]}}`;
            const count = intersectionCounts.get(intersection) || 0;
            intersectionCounts.set(intersection, count + 1);
        }
    }

    let highestOccurence: string = '';
    let maxCount: number = 0;

    for (const [intersection, count] of intersectionCounts) {
        if (count > maxCount) {
            highestOccurence = intersection;
            maxCount = count;
        }
    }

    return highestOccurence;
};

const accidents = [
    { street1: 'Hudson', street2: 'Canal', numVehiclesInvolved: 3 },
    { street1: '6th', street2: 'Canal', numVehiclesInvolved: 4 },
    { street1: '6th', street2: 'Canal', numVehiclesInvolved: 2 },
    { street1: 'Canal', street2: 'Hudson', numVehiclesInvolved: 2 },
    { street1: 'Canal', street2: 'Hudson', numVehiclesInvolved: 3 },
    { street1: 'Hudson', street2: 'Dominick', numVehiclesInvolved: 2 },
    { street1: 'Greenwich', street2: 'Spring', numVehiclesInvolved: 1 },
    { street1: 'Greenwich', street2: 'Spring', numVehiclesInvolved: 0 },
];

console.log(findMostCollisions(accidents));
