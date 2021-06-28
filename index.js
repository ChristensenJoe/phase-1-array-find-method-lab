const superbowlWin = (arr) => {
    let obj = arr.find((element) => {
        return element.result === "W";
    });
    if(obj != undefined) {
        return obj.year;
    }
    return obj;
}