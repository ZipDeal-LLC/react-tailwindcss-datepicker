import dayjs from "dayjs";

export function getTextColorByPrimaryColor(color: string) {
    switch (color) {
        case "blue":
            return "text-blue-500";
        case "orange":
            return "text-orange-500";
        case "yellow":
            return "text-yellow-500";
        case "red":
            return "text-red-500";
        case "purple":
            return "text-purple-500";
        case "amber":
            return "text-amber-500";
        case "lime":
            return "text-lime-500";
        case "green":
            return "text-green-500";
        case "emerald":
            return "text-emerald-500";
        case "teal":
            return "text-teal-500";
        case "cyan":
            return "text-cyan-500";
        case "sky":
            return "text-sky-500";
        case "indigo":
            return "text-indigo-500";
        case "violet":
            return "text-violet-500";
        case "fuchsia":
            return "text-fuchsia-500";
        case "pink":
            return "text-pink-500";
        case "rose":
            return "text-rose-500";
        default:
            return "";
    }
}

export function generateArrayNumber(start = 0, end = 0) {
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }

    return array;
}

export function shortString(value: string, limit = 3) {
    return value.slice(0, limit);
}

export function ucFirst(value: string) {
    return `${value[0].toUpperCase()}${value.slice(1, value.length)}`;
}

export function formatDate(date: dayjs.Dayjs, format = "YYYY-MM-DD") {
    return date.format(format);
}

export function getFirstDayInMonth(date: string | dayjs.Dayjs) {
    return {
        ddd: formatDate(dayjs(date).startOf("month"), "ddd"),
        basic: formatDate(dayjs(date).startOf("month")),
        object: dayjs(date).startOf("month")
    };
}

export function getLastDayInMonth(date: string) {
    return {
        ddd: formatDate(dayjs(date).endOf("month"), "ddd"),
        basic: formatDate(dayjs(date).endOf("month")),
        object: dayjs(date).endOf("month")
    };
}

export function getDaysInMonth(date: string | dayjs.Dayjs) {
    if (!isNaN(dayjs(date).daysInMonth())) {
        return [...generateArrayNumber(1, dayjs(date).daysInMonth())];
    }
    return [];
}

export function nextMonth(date: dayjs.Dayjs) {
    return date
        .date(1)
        .hour(0)
        .minute(0)
        .second(0)
        .month(date.month() + 1);
}

export function previousMonth(date: dayjs.Dayjs) {
    return date
        .date(1)
        .hour(0)
        .minute(0)
        .second(0)
        .month(date.month() - 1);
}

export function getFirstElementsInArray(array: number[] = [], size = 0) {
    return array.slice(0, size);
}

export function getLastElementsInArray(array: number[] = [], size = 0) {
    const result: number[] = [];
    if (Array.isArray(array) && size > 0) {
        if (size >= array.length) {
            return array;
        }

        let y = array.length - 1;
        for (let i = 0; i < size; i++) {
            result.push(array[y]);
            y--;
        }
    }
    return result.reverse();
}

export function getNumberOfDay(dayString: string): number {
    let number = 0;
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].forEach(
        (item, index) => {
            if (item.includes(dayString)) {
                number = index + 1;
            }
        }
    );
    return number;
}

export function getLastDaysInMonth(date: dayjs.Dayjs | string, size = 0) {
    return getLastElementsInArray(getDaysInMonth(date), size);
}

export function getFirstDaysInMonth(date: string | dayjs.Dayjs, size = 0) {
    return getFirstElementsInArray(getDaysInMonth(date), size);
}

export async function loadLanguageModule(language = "en"): Promise<void> {
    let locale;
    switch (language) {
        case "af":
            locale = await import("dayjs/locale/af");
            break;
        case "am":
            locale = await import("dayjs/locale/am");
            break;
        case "ar-dz":
            locale = await import("dayjs/locale/ar-dz");
            break;
        case "ar-iq":
            locale = await import("dayjs/locale/ar-iq");
            break;
        case "ar-kw":
            locale = await import("dayjs/locale/ar-kw");
            break;
        case "ar-ly":
            locale = await import("dayjs/locale/ar-ly");
            break;
        case "ar-ma":
            locale = await import("dayjs/locale/ar-ma");
            break;
        case "ar-sa":
            locale = await import("dayjs/locale/ar-sa");
            break;
        case "ar-tn":
            locale = await import("dayjs/locale/ar-tn");
            break;
        case "ar":
            locale = await import("dayjs/locale/ar");
            break;
        case "az":
            locale = await import("dayjs/locale/az");
            break;
        case "bg":
            locale = await import("dayjs/locale/bg");
            break;
        case "bi":
            locale = await import("dayjs/locale/bi");
            break;
        case "bm":
            locale = await import("dayjs/locale/bm");
            break;
        case "bn-bd":
            locale = await import("dayjs/locale/bn-bd");
            break;
        case "bn":
            locale = await import("dayjs/locale/bn");
            break;
        case "bo":
            locale = await import("dayjs/locale/bo");
            break;
        case "br":
            locale = await import("dayjs/locale/br");
            break;
        case "ca":
            locale = await import("dayjs/locale/ca");
            break;
        case "cs":
            locale = await import("dayjs/locale/cs");
            break;
        case "cv":
            locale = await import("dayjs/locale/cv");
            break;
        case "cy":
            locale = await import("dayjs/locale/cy");
            break;

        case "da":
            locale = await import("dayjs/locale/da");
            break;
        case "de-at":
            locale = await import("dayjs/locale/de-at");
            break;
        case "de-ch":
            locale = await import("dayjs/locale/de-ch");
            break;
        case "de":
            locale = await import("dayjs/locale/de");
            break;
        case "dv":
            locale = await import("dayjs/locale/dv");
            break;

        case "el":
            locale = await import("dayjs/locale/el");
            break;
        case "en-au":
            locale = await import("dayjs/locale/en-au");
            break;
        case "en-gb":
            locale = await import("dayjs/locale/en-gb");
            break;
        case "en-ie":
            locale = await import("dayjs/locale/en-ie");
            break;
        case "en-il":
            locale = await import("dayjs/locale/en-il");
            break;
        case "en-in":
            locale = await import("dayjs/locale/en-in");
            break;
        case "en-nz":
            locale = await import("dayjs/locale/en-nz");
            break;
        case "en-sg":
            locale = await import("dayjs/locale/en-sg");
            break;
        case "en-tt":
            locale = await import("dayjs/locale/en-tt");
            break;
        case "en":
            locale = await import("dayjs/locale/en");
            break;
        case "eo":
            locale = await import("dayjs/locale/eo");
            break;
        case "es-do":
            locale = await import("dayjs/locale/es-do");
            break;
        case "es-mx":
            locale = await import("dayjs/locale/es-mx");
            break;
        case "es-pr":
            locale = await import("dayjs/locale/es-pr");
            break;
        case "es-us":
            locale = await import("dayjs/locale/es-us");
            break;
        case "es":
            locale = await import("dayjs/locale/es");
            break;
        case "et":
            locale = await import("dayjs/locale/et");
            break;
        case "eu":
            locale = await import("dayjs/locale/eu");
            break;

        case "fa":
            locale = await import("dayjs/locale/fa");
            break;
        case "fi":
            locale = await import("dayjs/locale/fi");
            break;
        case "fo":
            locale = await import("dayjs/locale/fo");
            break;
        case "fr-ch":
            locale = await import("dayjs/locale/fr-ch");
            break;
        case "fr":
            locale = await import("dayjs/locale/fr");
            break;
        case "fy":
            locale = await import("dayjs/locale/fy");
            break;
        case "ga":
            locale = await import("dayjs/locale/ga");
            break;
        case "gd":
            locale = await import("dayjs/locale/gd");
            break;
        case "gl":
            locale = await import("dayjs/locale/gl");
            break;
        case "gom-latn":
            locale = await import("dayjs/locale/gom-latn");
            break;
        case "gu":
            locale = await import("dayjs/locale/gu");
            break;
        case "he":
            locale = await import("dayjs/locale/he");
            break;
        case "hi":
            locale = await import("dayjs/locale/hi");
            break;
        case "hr":
            locale = await import("dayjs/locale/hr");
            break;
        case "ht":
            locale = await import("dayjs/locale/ht");
            break;
        case "hu":
            locale = await import("dayjs/locale/hu");
            break;
        case "hy-am":
            locale = await import("dayjs/locale/hy-am");
            break;

        case "id":
            locale = await import("dayjs/locale/id");
            break;
        case "is":
            locale = await import("dayjs/locale/is");
            break;
        case "it-ch":
            locale = await import("dayjs/locale/it-ch");
            break;
        case "it":
            locale = await import("dayjs/locale/it");
            break;

        case "ja":
            locale = await import("dayjs/locale/ja");
            break;
        case "jv":
            locale = await import("dayjs/locale/jv");
            break;

        case "ka":
            locale = await import("dayjs/locale/ka");
            break;
        case "kk":
            locale = await import("dayjs/locale/kk");
            break;
        case "ko":
            locale = await import("dayjs/locale/ko");
            break;
        case "ku":
            locale = await import("dayjs/locale/ku");
            break;
        case "ky":
            locale = await import("dayjs/locale/ky");
            break;

        case "lb":
            locale = await import("dayjs/locale/lb");
            break;
        case "lo":
            locale = await import("dayjs/locale/lo");
            break;
        case "lt":
            locale = await import("dayjs/locale/lt");
            break;
        case "lv":
            locale = await import("dayjs/locale/lv");
            break;

        case "me":
            locale = await import("dayjs/locale/me");
            break;
        case "mi":
            locale = await import("dayjs/locale/mi");
            break;
        case "mk":
            locale = await import("dayjs/locale/mk");
            break;
        case "ml":
            locale = await import("dayjs/locale/ml");
            break;
        case "mn":
            locale = await import("dayjs/locale/mn");
            break;
        case "ms-my":
            locale = await import("dayjs/locale/ms-my");
            break;
        case "ms":
            locale = await import("dayjs/locale/ms");
            break;
        case "mt":
            locale = await import("dayjs/locale/mt");
            break;
        case "my":
            locale = await import("dayjs/locale/my");
            break;

        case "nb":
            locale = await import("dayjs/locale/nb");
            break;
        case "ne":
            locale = await import("dayjs/locale/ne");
            break;
        case "nl-be":
            locale = await import("dayjs/locale/nl-be");
            break;
        case "nl":
            locale = await import("dayjs/locale/nl");
            break;
        case "nn":
            locale = await import("dayjs/locale/nn");
            break;

        case "oc-lnc":
            locale = await import("dayjs/locale/oc-lnc");
            break;

        case "pa-in":
            locale = await import("dayjs/locale/pa-in");
            break;
        case "pl":
            locale = await import("dayjs/locale/pl");
            break;
        case "pt-br":
            locale = await import("dayjs/locale/pt-br");
            break;
        case "pt":
            locale = await import("dayjs/locale/pt");
            break;

        case "rn":
            locale = await import("dayjs/locale/rn");
            break;
        case "ro":
            locale = await import("dayjs/locale/ro");
            break;
        case "ru":
            locale = await import("dayjs/locale/ru");
            break;
        case "rw":
            locale = await import("dayjs/locale/rw");
            break;

        case "sd":
            locale = await import("dayjs/locale/sd");
            break;
        case "se":
            locale = await import("dayjs/locale/se");
            break;
        case "si":
            locale = await import("dayjs/locale/si");
            break;
        case "sk":
            locale = await import("dayjs/locale/sk");
            break;
        case "sl":
            locale = await import("dayjs/locale/sl");
            break;
        case "sq":
            locale = await import("dayjs/locale/sq");
            break;
        case "sr":
            locale = await import("dayjs/locale/sr");
            break;
        case "sr-cyrl":
            locale = await import("dayjs/locale/sr-cyrl");
            break;
        case "ss":
            locale = await import("dayjs/locale/ss");
            break;
        case "sv-fi":
            locale = await import("dayjs/locale/sv-fi");
            break;
        case "sv":
            locale = await import("dayjs/locale/sv");
            break;
        case "sw":
            locale = await import("dayjs/locale/sw");
            break;

        case "ta":
            locale = await import("dayjs/locale/ta");
            break;
        case "te":
            locale = await import("dayjs/locale/te");
            break;
        case "tg":
            locale = await import("dayjs/locale/tg");
            break;
        case "th":
            locale = await import("dayjs/locale/th");
            break;
        case "tk":
            locale = await import("dayjs/locale/tk");
            break;
        case "tl-ph":
            locale = await import("dayjs/locale/tl-ph");
            break;
        case "tlh":
            locale = await import("dayjs/locale/tlh");
            break;
        case "tr":
            locale = await import("dayjs/locale/tr");
            break;
        case "tzl":
            locale = await import("dayjs/locale/tzl");
            break;
        case "tzm-latn":
            locale = await import("dayjs/locale/tzm-latn");
            break;
        case "tzm":
            locale = await import("dayjs/locale/tzm");
            break;

        case "ug-cn":
            locale = await import("dayjs/locale/ug-cn");
            break;
        case "uk":
            locale = await import("dayjs/locale/uk");
            break;
        case "ur":
            locale = await import("dayjs/locale/ur");
            break;
        case "uz-latn":
            locale = await import("dayjs/locale/uz-latn");
            break;
        case "uz":
            locale = await import("dayjs/locale/uz");
            break;

        case "vi":
            locale = await import("dayjs/locale/vi");
            break;

        case "x-pseudo":
            locale = await import("dayjs/locale/x-pseudo");
            break;

        case "yo":
            locale = await import("dayjs/locale/yo");
            break;

        case "zh-cn":
            locale = await import("dayjs/locale/zh-cn");
            break;
        case "zh-hk":
            locale = await import("dayjs/locale/zh-hk");
            break;
        case "zh-tw":
            locale = await import("dayjs/locale/zh-tw");
            break;
        case "zh":
            locale = await import("dayjs/locale/zh");
            break;

        default:
            locale = await import("dayjs/locale/en");
            break;
    }
    dayjs.locale(locale);
}

export function dateIsValid(date: Date | number) {
    return date instanceof Date && !isNaN(date.getTime());
}
