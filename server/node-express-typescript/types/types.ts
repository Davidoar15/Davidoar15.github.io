export interface Item {
    type: string;
    label: string;
    name: string;
    required?: boolean;
    options?: [
        label: string,
        value: string,
    ]
}