import dayjs from "dayjs";
import React, { useCallback, useContext } from "react";

import { BG_COLOR } from "../../constants";
import DatepickerContext from "../../contexts/DatepickerContext";
import { formatDate, getTextColorByPrimaryColor, nextMonth, previousMonth } from "../../helpers";

const isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);

interface Props {
    calendarData: {
        date: dayjs.Dayjs;
        days: {
            previous: number[];
            current: number[];
            next: number[];
        };
    };
    onClickPreviousDays: (day: number) => void;
    onClickDay: (day: number) => void;
    onClickNextDays: (day: number) => void;
}

const Days: React.FC<Props> = ({
    calendarData,
    onClickPreviousDays,
    onClickDay,
    onClickNextDays
}) => {
    // Contexts
    const { primaryColor, period, changePeriod, dayHover, changeDayHover, configs } =
        useContext(DatepickerContext);

    // Functions
    const currentDateClass = useCallback(
        (item: number) => {
            const itemDate = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${
                item >= 10 ? item : "0" + item
            }`;
            if (formatDate(dayjs()) === formatDate(dayjs(itemDate)))
                return `${getTextColorByPrimaryColor(
                    primaryColor
                )} bg-gray-100 border rounded-full font-semibold text-lg`;
            return "";
        },
        [calendarData.date, primaryColor]
    );

    const isDisabled = useCallback(
        (item: number, type = "") => {
            let addMonths = 0;
            switch (type) {
                case "previous": {
                    break;
                }
                case "next": {
                    addMonths = 2;
                    break;
                }
                default: {
                    addMonths = 1;
                }
            }
            const itemDate = `${calendarData.date.year()}-${
                calendarData.date.month() + addMonths
            }-${item >= 10 ? item : "0" + item}`;
            return configs?.past && formatDate(dayjs(itemDate)) > formatDate(dayjs());
        },
        [calendarData.date, configs?.past]
    );

    const activeDateData = useCallback(
        (day: number) => {
            const fullDay = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${day}`;
            let className = "";

            if (dayjs(fullDay).isSame(period.start) && dayjs(fullDay).isSame(period.end)) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                className = ` ${BG_COLOR["500"][primaryColor]} text-white font-medium rounded-full`;
            } else if (dayjs(fullDay).isSame(period.start)) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                className = ` ${BG_COLOR["500"][primaryColor]} text-white font-medium ${
                    dayjs(fullDay).isSame(dayHover) && !period.end
                        ? "rounded-full"
                        : "rounded-l-full"
                }`;
            } else if (dayjs(fullDay).isSame(period.end)) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                className = ` ${BG_COLOR["500"][primaryColor]} text-white font-medium ${
                    dayjs(fullDay).isSame(dayHover) && !period.start
                        ? "rounded-full"
                        : "rounded-r-full"
                }`;
            }

            return {
                active: dayjs(fullDay).isSame(period.start) || dayjs(fullDay).isSame(period.end),
                className: className
            };
        },
        [calendarData.date, dayHover, period.end, period.start, primaryColor]
    );

    const hoverClassByDay = useCallback(
        (day: number) => {
            let className = currentDateClass(day);
            const fullDay = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${
                day >= 10 ? day : "0" + day
            }`;

            if (period.start && period.end) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                if (dayjs(fullDay).isBetween(period.start, period.end, "day", "[)")) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    return ` ${BG_COLOR["100"][primaryColor]} ${currentDateClass(day)}`;
                }
            }

            if (!dayHover) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                return className;
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (period.start && dayjs(fullDay).isBetween(period.start, dayHover, "day", "[)")) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                className = ` ${BG_COLOR["100"][primaryColor]} ${currentDateClass(day)}`;
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (period.end && dayjs(fullDay).isBetween(dayHover, period.end, "day", "[)")) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                className = ` ${BG_COLOR["100"][primaryColor]} ${currentDateClass(day)}`;
            }

            if (dayHover === fullDay) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const bgColor = BG_COLOR["500"][primaryColor];
                className = ` transition-all duration-500 text-white font-medium ${bgColor} ${
                    period.start ? "rounded-r-full" : "rounded-l-full"
                }`;
            }

            return className;
        },
        [calendarData.date, currentDateClass, dayHover, period.end, period.start, primaryColor]
    );

    const buttonCass = useCallback(
        (day: number, isDisabled = false) => {
            const baseClass = `flex items-center justify-center w-full h-12 lg:w-10 lg:h-10 ${
                isDisabled ? "text-gray-300" : ""
            }`;
            return `${baseClass}${
                !activeDateData(day).active
                    ? ` ${hoverClassByDay(day)}`
                    : activeDateData(day).className
            }`;
        },
        [activeDateData, hoverClassByDay]
    );

    const hoverDay = useCallback(
        (day: number, type: string) => {
            const object = {
                previous: previousMonth(calendarData.date),
                current: calendarData.date,
                next: nextMonth(calendarData.date)
            };
            const newDate = object[type as keyof typeof object];
            const newHover = `${newDate.year()}-${newDate.month() + 1}-${
                day >= 10 ? day : "0" + day
            }`;

            if (period.start && !period.end) {
                if (dayjs(newHover).isBefore(dayjs(period.start))) {
                    changePeriod({
                        start: null,
                        end: period.start
                    });
                }
                changeDayHover(newHover);
            }

            if (!period.start && period.end) {
                if (dayjs(newHover).isAfter(dayjs(period.end))) {
                    changePeriod({
                        start: period.end,
                        end: null
                    });
                }
                changeDayHover(newHover);
            }
        },
        [calendarData.date, changeDayHover, changePeriod, period.end, period.start]
    );

    return (
        <div className="grid grid-cols-7 gap-y-0.5 my-1">
            {calendarData.days.previous.map((item, index) => (
                <button
                    key={index}
                    className={`flex items-center justify-center w-full h-12 lg:w-10 lg:h-10 ${
                        isDisabled(item, "previous") ? "text-gray-50" : "text-gray-400"
                    }`}
                    onClick={() => {
                        if (!isDisabled(item, "previous")) onClickPreviousDays(item);
                    }}
                    onMouseOver={() => {
                        if (!isDisabled(item, "previous")) hoverDay(item, "previous");
                    }}
                >
                    {item}
                </button>
            ))}

            {calendarData.days.current.map((item, index) => (
                <button
                    key={index}
                    className={buttonCass(item, isDisabled(item))}
                    onClick={() => {
                        if (!isDisabled(item)) onClickDay(item);
                    }}
                    onMouseOver={() => {
                        if (!isDisabled(item)) hoverDay(item, "current");
                    }}
                >
                    {item}
                </button>
            ))}

            {calendarData.days.next.map((item, index) => (
                <button
                    key={index}
                    className={`flex items-center justify-center w-full h-12 lg:w-10 lg:h-10 ${
                        isDisabled(item, "next") ? "text-gray-50" : "text-gray-400"
                    }`}
                    onClick={() => {
                        if (!isDisabled(item, "next")) onClickNextDays(item);
                    }}
                    onMouseOver={() => {
                        if (!isDisabled(item, "next")) hoverDay(item, "next");
                    }}
                >
                    {item}
                </button>
            ))}
        </div>
    );
};

export default Days;
