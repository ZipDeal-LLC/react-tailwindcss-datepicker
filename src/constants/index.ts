import dayjs from "dayjs";

import { formatDate, previousMonth } from "../helpers";

export const COLORS = [
    "blue",
    "orange",
    "yellow",
    "red",
    "purple",
    "amber",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose"
];

export const DEFAULT_COLOR = "blue";

export const BG_COLOR = {
    100: {
        blue: "bg-blue-100",
        orange: "bg-orange-100",
        yellow: "bg-yellow-100",
        red: "bg-red-100",
        purple: "bg-purple-100",
        amber: "bg-amber-100",
        lime: "bg-lime-100",
        green: "bg-green-100",
        emerald: "bg-emerald-100",
        teal: "bg-teal-100",
        cyan: "bg-cyan-100",
        sky: "bg-sky-100",
        indigo: "bg-indigo-100",
        violet: "bg-violet-100",
        fuchsia: "bg-fuchsia-100",
        pink: "bg-pink-100",
        rose: "bg-rose-100"
    },
    200: {
        blue: "bg-blue-200",
        orange: "bg-orange-200",
        yellow: "bg-yellow-200",
        red: "bg-red-200",
        purple: "bg-purple-200",
        amber: "bg-amber-200",
        lime: "bg-lime-200",
        green: "bg-green-200",
        emerald: "bg-emerald-200",
        teal: "bg-teal-200",
        cyan: "bg-cyan-200",
        sky: "bg-sky-200",
        indigo: "bg-indigo-200",
        violet: "bg-violet-200",
        fuchsia: "bg-fuchsia-200",
        pink: "bg-pink-200",
        rose: "bg-rose-200"
    },
    500: {
        blue: "bg-blue-500",
        orange: "bg-orange-500",
        yellow: "bg-yellow-500",
        red: "bg-red-500",
        purple: "bg-purple-500",
        amber: "bg-amber-500",
        lime: "bg-lime-500",
        green: "bg-green-500",
        emerald: "bg-emerald-500",
        teal: "bg-teal-500",
        cyan: "bg-cyan-500",
        sky: "bg-sky-500",
        indigo: "bg-indigo-500",
        violet: "bg-violet-500",
        fuchsia: "bg-fuchsia-500",
        pink: "bg-pink-500",
        rose: "bg-rose-500"
    },
    hover: {
        blue: "hover:bg-blue-600",
        orange: "hover:bg-orange-600",
        yellow: "hover:bg-yellow-600",
        red: "hover:bg-red-600",
        purple: "hover:bg-purple-600",
        amber: "hover:bg-amber-600",
        lime: "hover:bg-lime-600",
        green: "hover:bg-green-600",
        emerald: "hover:bg-emerald-600",
        teal: "hover:bg-teal-600",
        cyan: "hover:bg-cyan-600",
        sky: "hover:bg-sky-600",
        indigo: "hover:bg-indigo-600",
        violet: "hover:bg-violet-600",
        fuchsia: "hover:bg-fuchsia-600",
        pink: "hover:bg-pink-600",
        rose: "hover:bg-rose-600"
    }
};

export const TEXT_COLOR = {
    600: {
        blue: "text-blue-600",
        orange: "text-orange-600",
        yellow: "text-yellow-600",
        red: "text-red-600",
        purple: "text-purple-600",
        amber: "text-amber-600",
        lime: "text-lime-600",
        green: "text-green-600",
        emerald: "text-emerald-600",
        teal: "text-teal-600",
        cyan: "text-cyan-600",
        sky: "text-sky-600",
        indigo: "text-indigo-600",
        violet: "text-violet-600",
        fuchsia: "text-fuchsia-600",
        pink: "text-pink-600",
        rose: "text-rose-600"
    },
    hover: {
        blue: "hover:text-blue-700",
        orange: "hover:text-orange-700",
        yellow: "hover:text-yellow-700",
        red: "hover:text-red-700",
        purple: "hover:text-purple-700",
        amber: "hover:text-amber-700",
        lime: "hover:text-lime-700",
        green: "hover:text-green-700",
        emerald: "hover:text-emerald-700",
        teal: "hover:text-teal-700",
        cyan: "hover:text-cyan-700",
        sky: "hover:text-sky-700",
        indigo: "hover:text-indigo-700",
        violet: "hover:text-violet-700",
        fuchsia: "hover:text-fuchsia-700",
        pink: "hover:text-pink-700",
        rose: "hover:text-rose-700"
    }
};

export const BORDER_COLOR = {
    500: {
        blue: "border-blue-500",
        orange: "border-orange-500",
        yellow: "border-yellow-500",
        red: "border-red-500",
        purple: "border-purple-500",
        amber: "border-amber-500",
        lime: "border-lime-500",
        green: "border-green-500",
        emerald: "border-emerald-500",
        teal: "border-teal-500",
        cyan: "border-cyan-500",
        sky: "border-sky-500",
        indigo: "border-indigo-500",
        violet: "border-violet-500",
        fuchsia: "border-fuchsia-500",
        pink: "border-pink-500",
        rose: "border-rose-500"
    },
    focus: {
        blue: "focus:border-blue-500",
        orange: "focus:border-orange-500",
        yellow: "focus:border-yellow-500",
        red: "focus:border-red-500",
        purple: "focus:border-purple-500",
        amber: "focus:border-amber-500",
        lime: "focus:border-lime-500",
        green: "focus:border-green-500",
        emerald: "focus:border-emerald-500",
        teal: "focus:border-teal-500",
        cyan: "focus:border-cyan-500",
        sky: "focus:border-sky-500",
        indigo: "focus:border-indigo-500",
        violet: "focus:border-violet-500",
        fuchsia: "focus:border-fuchsia-500",
        pink: "focus:border-pink-500",
        rose: "focus:border-rose-500"
    }
};

export const RING_COLOR = {
    focus: {
        blue: "focus:ring-blue-500",
        orange: "focus:ring-orange-500",
        yellow: "focus:ring-yellow-500",
        red: "focus:ring-red-500",
        purple: "focus:ring-purple-500",
        amber: "focus:ring-amber-500",
        lime: "focus:ring-lime-500",
        green: "focus:ring-green-500",
        emerald: "focus:ring-emerald-500",
        teal: "focus:ring-teal-500",
        cyan: "focus:ring-cyan-500",
        sky: "focus:ring-sky-500",
        indigo: "focus:ring-indigo-500",
        violet: "focus:ring-violet-500",
        fuchsia: "focus:ring-fuchsia-500",
        pink: "focus:ring-pink-500",
        rose: "focus:ring-rose-500"
    },
    "second-focus": {
        blue: "focus:ring-blue-500/20",
        orange: "focus:ring-orange-500/20",
        yellow: "focus:ring-yellow-500/20",
        red: "focus:ring-red-500/20",
        purple: "focus:ring-purple-500/20",
        amber: "focus:ring-amber-500/20",
        lime: "focus:ring-lime-500/20",
        green: "focus:ring-green-500/20",
        emerald: "focus:ring-emerald-500/20",
        teal: "focus:ring-teal-500/20",
        cyan: "focus:ring-cyan-500/20",
        sky: "focus:ring-sky-500/20",
        indigo: "focus:ring-indigo-500/20",
        violet: "focus:ring-violet-500/20",
        fuchsia: "focus:ring-fuchsia-500/20",
        pink: "focus:ring-pink-500/20",
        rose: "focus:ring-rose-500/20"
    }
};

export const DEFAULT_SHORTCUTS = {
    today: {
        text: "Today",
        period: {
            start: formatDate(dayjs()),
            end: formatDate(dayjs())
        }
    },
    yesterday: {
        text: "Yesterday",
        period: {
            start: formatDate(dayjs().subtract(1, "d")),
            end: formatDate(dayjs().subtract(1, "d"))
        }
    },
    past: [
        {
            daysNumber: 7,
            text: "Last 7 days",
            period: {
                start: formatDate(dayjs().subtract(7, "d")),
                end: formatDate(dayjs())
            }
        },
        {
            daysNumber: 30,
            text: "Last 30 days",
            period: {
                start: formatDate(dayjs().subtract(30, "d")),
                end: formatDate(dayjs())
            }
        }
    ],
    currentMonth: {
        text: "This month",
        period: {
            start: formatDate(dayjs().startOf("month")),
            end: formatDate(dayjs().endOf("month"))
        }
    },
    pastMonth: {
        text: "Last month",
        period: {
            start: formatDate(previousMonth(dayjs()).startOf("month")),
            end: formatDate(previousMonth(dayjs()).endOf("month"))
        }
    }
};
