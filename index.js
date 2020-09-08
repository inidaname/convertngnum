//add +234 to number
export const convertNumber = (number) => {
    const rawNumber = number.substring(number.length - 10, number.length);
    const convNum = `+234${rawNumber}`;
    return convNum;
};
  