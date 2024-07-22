type House = {
    address: string;
    id: string;
    fias_addrobjs: string[];
};

type ApiArea = {
    id: string;
    number: number;
    str_number: string;
    str_number_full: string;
    house: House;
};

export type GetAreasResponseBody = {
    count: number;
    next: string | null;
    previous: string | null;
    results: ApiArea[];
};

export type Area = {
    id: string;
    address?: string;
};