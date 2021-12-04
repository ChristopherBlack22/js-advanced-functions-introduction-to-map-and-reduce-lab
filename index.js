function mapToNegativize(sourceArray) {
    let result = [];
    for (const element of sourceArray) {
        result.push(-1 * element)
    }
    return result
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    let result = [];
    for (const element of sourceArray) {
        result.push(element*2)
    }
    return result
}

function mapToSquare(sourceArray) {
    let result = [];
    for (const element of sourceArray) {
        result.push(element**2)
    }
    return result
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let sum = startingPoint;
    for (const element of sourceArray) {
        sum += element
    }
    return sum
}

function reduceToAllTrue(sourceArray) {
    let result = false;
    for (const element of sourceArray) {
        if (!!element === true) {
            result = true
        }
        else {
            result = false
        }
    }
    return result
}

function reduceToAnyTrue(sourceArray) {
    let result = false;
    for (const element of sourceArray) {
        if (!!element === true) {
            result = true
        }
    }
    return result
}