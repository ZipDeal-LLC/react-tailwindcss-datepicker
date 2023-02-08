import clsx from "clsx";
import dayjs from "dayjs";
import React, { useCallback, useContext, useEffect, useRef } from "react";

import { BORDER_COLOR, RING_COLOR } from "../constants";
import DatepickerContext from "../contexts/DatepickerContext";
import { dateIsValid } from "../helpers";

import { CloseIcon, DateIcon } from "./utils";

const Input: React.FC<{ inputClassName: string }> = ({ inputClassName }) => {
    // Context
    const {
        primaryColor,
        period,
        dayHover,
        changeDayHover,
        calendarContainer,
        inputText,
        changeInputText,
        hideDatepicker,
        changeDatepickerValue,
        asSingle,
        placeholder,
        separator,
        dateValueFormat
    } = useContext(DatepickerContext);

    // UseRefs
    const buttonRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Functions
    const getClassName = useCallback(() => {
        const border = BORDER_COLOR.focus[primaryColor as keyof typeof BORDER_COLOR.focus];
        const ring =
            RING_COLOR["second-focus"][primaryColor as keyof typeof RING_COLOR["second-focus"]];

        return clsx({
            ["relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border border-gray-300 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring"]:
                true,
            [border]: true,
            [ring]: true,
            [inputClassName]: !!inputClassName
        });
    }, [inputClassName, primaryColor]);

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = e.target.value;
            const start = `${inputValue.slice(0, 4)}-${inputValue.slice(5, 7)}-${inputValue.slice(
                8,
                10
            )}`;
            const end = `${inputValue.slice(13, 17)}-${inputValue.slice(18, 20)}-${inputValue.slice(
                21,
                inputValue.length
            )}`;
            const input = inputRef?.current;

            if (
                start.length === 10 &&
                end.length === 10 &&
                dateIsValid(new Date(start)) &&
                dateIsValid(new Date(end)) &&
                dayjs(start).isBefore(end)
            ) {
                changeDatepickerValue({
                    startDate: dayjs(start).format(dateValueFormat),
                    endDate: dayjs(end).format(dateValueFormat)
                });
                changeDayHover(dayjs(end).add(-1, "day").format(dateValueFormat));
                hideDatepicker();
                if (input) {
                    input.blur();
                }
            }
            changeInputText(e.target.value);
        },
        [changeDatepickerValue, changeDayHover, changeInputText, dateValueFormat, hideDatepicker]
    );

    // UseEffects && UseLayoutEffect
    useEffect(() => {
        const button = buttonRef?.current;

        function focusInput(e: Event) {
            e.stopPropagation();
            if (inputRef?.current) {
                inputRef.current.focus();
                if (inputText) {
                    changeInputText("");
                    if (dayHover) {
                        changeDayHover(null);
                    }
                    if (period.start && period.end) {
                        changeDatepickerValue({
                            startDate: null,
                            endDate: null
                        });
                    }
                }
            }
        }

        if (button) {
            button.addEventListener("click", focusInput);
        }

        return () => {
            if (button) {
                button.removeEventListener("click", focusInput);
            }
        };
    }, [
        changeDatepickerValue,
        changeDayHover,
        changeInputText,
        dayHover,
        inputText,
        period.end,
        period.start
    ]);

    useEffect(() => {
        const div = calendarContainer?.current;
        const input = inputRef.current;

        function showCalendarContainer() {
            if (div && div.classList.contains("hidden")) {
                div.classList.remove("hidden");
                div.classList.add("block");
                setTimeout(() => {
                    div.classList.remove("translate-y-4");
                    div.classList.remove("opacity-0");
                    div.classList.add("translate-y-0");
                    div.classList.add("opacity-1");
                }, 1);
            }
        }

        if (div && input) {
            input.addEventListener("focus", showCalendarContainer);
        }

        return () => {
            if (input) {
                input.removeEventListener("focus", showCalendarContainer);
            }
        };
    }, [calendarContainer]);

    return (
        <>
            <input
                ref={inputRef}
                type="text"
                className={getClassName()}
                placeholder={
                    placeholder
                        ? placeholder
                        : `YYYY-MM-DD${asSingle ? "" : ` ${separator} YYYY-MM-DD`}`
                }
                value={inputText}
                onChange={handleInputChange}
            />

            <button
                ref={buttonRef}
                className="absolute right-0 h-full px-3 text-gray-400 focus:outline-none"
            >
                {inputText ? <CloseIcon className="h-5 w-5" /> : <DateIcon className="h-5 w-5" />}
            </button>
        </>
    );
};

export default Input;
