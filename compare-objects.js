// compare objects compare

const myFunc = function() {
    return {
        name: 'Simple',
        lastname: 'Object'
    }
};

const obj1 = new myFunc();
const obj2 = new myFunc();

// variant1 : simple compare objs keys
// todo : adding check of values keys
const compareObjects = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    let keyIndex = 0;
    let compared = true;
    const obj2Values = Object.values(obj2);
    for (let obj1key in obj1) {
        if (obj2Values[keyIndex]) {
            obj1[obj1key] === obj2Values[keyIndex] ? null : compared = false;
        } else {
            compared = false;
            break;
        }
        keyIndex++;
    }
    return compared;
}
console.log('test keys compare:', compareObjects(obj1, obj2));


// variant2 : stringify
const compareWithStringify = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};
// dirty check
function dirtyObj2({ key, value }) {
    obj2[key] = value;
    console.info('dirty:DD', obj2);
}
const dirtyBugger = {
    key: 'dirtyKey',
    value: 'dirtyValue'
};
// if want dirty obj2
// dirtyObj2(dirtyBugger);
console.log('test stringify compare:', compareWithStringify(obj1, obj2));
