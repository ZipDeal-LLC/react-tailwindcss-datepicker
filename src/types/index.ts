export interface Period {
    start: string | null;
    end: string | null;
    marker?: string;
}

export interface Configs {
    shortcuts?: {
        today?: string;
        yesterday?: string;
        past?: (period: number) => string;
        currentMonth?: string;
        pastMonth?: string;
    } | null;
    footer?: {
        cancel?: string;
        apply?: string;
    } | null;
    dateFormat?: string;
}

export interface ShortcutsItem {
    text?: string;
    daysNumber?: number;
    period?: {
        start: string;
        end: string;
        marker?: string;
    };
}
