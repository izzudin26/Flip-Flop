const resultFlip2 = (value1, value2, value3, value4) => {
    //OR gate
    return and2Flip2(value1, value2, value3, value4) == 1 || or2Flip2(value1, value2, value3, value4) == 1 ? LightOn() : lightOff()
}

const or1Flip2 = (val1, val2) => {
    //OR gate
    return val1 == 1 || val2 == 1 ? 1 : 0
}

const and1Flip2 = (val3, val4) => {
    //AND gate
    return val3 == 1 && val4 == 1 ? 1 : 0
}

const and2Flip2 = (value1, value2, value3, value4) => {
    return or1Flip2(value1, value2) == 1 && and1Flip2(value3, value4) == 1 ? 1 : 0
}

const or2Flip2 = (value1, value2, value3, value4) => {
    return or1Flip2(value1, value2) == 1 || and1Flip2(value3, value4) == 1 ? 1 : 0
}