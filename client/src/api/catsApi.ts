export interface Cat {
    id? : number;
    name: string;
    age: number;
}

export const getCats = (): Cat[] => {
    const cats:Cat[] = [
        {
            name: "Vasya",
            age: 3
        },
        {
            name: "Murzik",
            age: 4
        },
        {
            name: "Dymok",
            age: 1
        }
    ]
    return cats;
} 