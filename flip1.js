const resultFlip1 = (in1,in2,in3,in4) => {
    //OR gate
    and1(in1, in2) == 1 || and2(in3, in4) == 1 ? LightOn() : lightOff()
}

const and1 = (val1, val2) => {
    // AND gate
    return val1 == 1 && val2 == 1 ? 1 : 0
}

const and2 = (val3, val4) => {
    // AND gate
    return val3 == 1 && val4 == 1 ? 1 : 0
}