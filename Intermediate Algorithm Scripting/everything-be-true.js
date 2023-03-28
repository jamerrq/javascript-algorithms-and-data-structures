function truthCheck(collection, pre) {
    let ans = true;
    for(let i = 0; i < collection.length; ++i){
        ans &&= Boolean(collection[i][pre]);
    }
    console.log(ans);
    return ans;
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");
