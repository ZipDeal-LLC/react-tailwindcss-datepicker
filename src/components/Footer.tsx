import dayjs from "dayjs";
import React, { useContext, useMemo } from "react";

import DatepickerContext from "../contexts/DatepickerContext";

import { PrimaryButton, SecondaryButton } from "./utils";

const Footer: React.FC = () => {
    // Contexts
    const {
        hideDatepicker,
        period,
        changeDatepickerValue,
        configs,
        dateValueFormat,
        separator,
        dateStringFormat
    } = useContext(DatepickerContext);

    const valueString = useMemo(() => {
        if (!period?.start || !period?.end) return "";
        return `${
            dateStringFormat ? dayjs(period?.start).format(dateStringFormat) : period?.start
        } ${separator} ${
            dateStringFormat ? dayjs(period?.end).format(dateStringFormat) : period?.end
        }`;
    }, [dateStringFormat, separator, period?.end, period?.start]);

    return (
        <div className="flex items-center justify-end pb-2.5 pt-3 border-t border-gray-300 gap-x-10">
            {valueString && (
                <span className={"bg-gray-100 p-2.5 items-center rounded"}>
                    Selected: {valueString}
                </span>
            )}
            <div className="w-full md:w-auto flex items-center justify-center space-x-3">
                <SecondaryButton
                    onClick={() => {
                        hideDatepicker();
                    }}
                >
                    <>
                        {configs && configs.footer && configs.footer.cancel
                            ? configs.footer.cancel
                            : "Cancel"}
                    </>
                </SecondaryButton>
                <PrimaryButton
                    onClick={() => {
                        if (period.start && period.end) {
                            changeDatepickerValue({
                                startDate: dayjs(period.start).format(dateValueFormat),
                                endDate: dayjs(period.end).format(dateValueFormat)
                            });
                            hideDatepicker();
                        }
                    }}
                    disabled={!(period.start && period.end)}
                >
                    <>
                        {configs && configs.footer && configs.footer.cancel
                            ? configs.footer.apply
                            : "Apply"}
                    </>
                </PrimaryButton>
            </div>
        </div>
    );
};

export default Footer;
