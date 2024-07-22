type Area = {
    id: string;
};

type ApiMeter = {
    id: string;
    _type: string[];
    area: Area;
    is_automatic: boolean | null;
    communication: string;
    description: string;
    serial_number: string;
    installation_date: string;
    brand_name: string;
    model_name: string;
    initial_values: number[];
};

export type GetMetersResponseBody = {
    count: number;
    next: string | null;
    previous: string | null;
    results: ApiMeter[];
};

export type Meter = {
    id?: string;
    type?: string;
    areaId?: string;
    isAutomatic?: boolean;
    description?: string;
    value?: string;
    installationDate?: string;
};

export type GetMetersReturn = {
    count: number;
    meters: Meter[];
};

export type GetMetersReturnWithPage = GetMetersReturn & {
    page: number;
};