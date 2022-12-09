import dayjs from "dayjs";
import React, { useContext } from "react";

import DatepickerContext from "../contexts/DatepickerContext";

import { PrimaryButton, SecondaryButton } from "./utils";

const Footer: React.FC = () => {
    // Contexts
    const { hideDatepicker, period, changeDatepickerValue, configs, dateValueFormat } =
        useContext(DatepickerContext);

    return (
        <div className="flex items-center justify-end pb-2.5 pt-3 border-t border-gray-300">
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
