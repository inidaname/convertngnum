//add +234 to number
exports.module = convertNumber = (number) => {
    if (!number) {
        return
    }
    const rawNumber = number.substring(number.length - 10, number.length);
    const convNum = `+234${rawNumber}`;
    return convNum;
};
  