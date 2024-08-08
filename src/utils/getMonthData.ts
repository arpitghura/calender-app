import moment from "moment";

export const getToday = moment().date();

export const getAllMonthsInShortForm: string[] = moment.monthsShort();

// get current month in short form using moment
export const getCurrentMonth:string = moment().format("MMM");
export const is31stMonth:boolean = moment().daysInMonth() === 31;

export const firstDayNumber:string = moment().startOf("month").day()?.toString();