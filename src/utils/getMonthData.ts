import moment from "moment";

export const getToday = moment().date();

export const getAllMonthsInShortForm:string[] = moment.monthsShort();

// get current month in short form using moment
export const getCurrentMonth = moment().format("MMM");