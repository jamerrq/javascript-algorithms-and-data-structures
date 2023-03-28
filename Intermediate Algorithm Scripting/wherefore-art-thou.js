function whatIsInAName(collection, source) {
    let objs = [];
    let source_props = Object.keys(source);
    for (let i = 0; i < collection.length; ++i) {
        let obji = collection[i];
        let passed = true;
        let keys = Object.keys(obji);
        for (let j = 0; j < source_props.length; ++j) {
            let found = false;
            for (let k = 0; k < keys.length; ++k) {
                if (keys[k] == source_props[j] && source[source_props[j]] === obji[keys[k]]) {
                    found = true;
                }
            }
            passed = passed && found;
        }
        if (passed) {
            objs.push(obji);
        }
    }
    return objs;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
