function telephoneCheck(str) {
    // let regex = /^(1\s)?[\(]?\d{3}[\)]?[-\s]?\d{3}[-\s]?\d{4}$/;
    let regex = /^(1\s)?(\(\d{3}\)|\d{3})+[-\s]?\d{3}[-\s]?\d{4}$/;
    let regex2 = /^1\(\d{3}\)\d{3}-\d{4}$/;
    // console.log(regex.test(str), regex2.test(str));
    return regex.test(str) || regex2.test(str);
}
