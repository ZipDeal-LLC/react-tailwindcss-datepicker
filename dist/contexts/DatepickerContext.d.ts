import dayjs from "dayjs";
import React from "react";
import { Configs, Period } from "../types";
type DateRange = {
    startDate: string | Date | null;
    endDate: string | Date | null;
    marker?: string;
} | null;
interface DatepickerStore {
    asSingle?: boolean;
    primaryColor: string;
    configs?: Configs | null;
    calendarContainer: React.RefObject<HTMLDivElement> | null;
    hideDatepicker: () => void;
    period: Period;
    changePeriod: (period: Period) => void;
    dayHover: string | null;
    changeDayHover: (day: string | null) => void;
    inputText: string;
    changeInputText: (text: string) => void;
    updateFirstDate: (date: dayjs.Dayjs) => void;
    changeDatepickerValue: (value: DateRange) => void;
    showFooter?: boolean;
    placeholder?: string | null;
    separator?: string;
    i18n: string;
    value: DateRange;
    dateValueFormat?: string;
    dateStringFormat?: string;
}
declare const DatepickerContext: React.Context<DatepickerStore>;
export default DatepickerContext;
