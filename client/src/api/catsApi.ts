export interface Cat {
    id? : number;
    name: string;
    age: number;
}

export const  getCatsApi = async (): Promise<Cat[]> => {
    const res = await fetch("/api/cats");
    const cats = await res.json() as Cat[];
    return cats;
}

export const  getCats = (): Promise<Cat[]> => {
    const cats:Cat[] = [
        {
            name: "Murzik",
            age: 1,
        },
        {
            name: "Murka",
            age: 5,
        },
        {
            name: "Dymok",
            age: 1
        }
    ];

    const promise = new Promise<Cat[]>(
        (res, rej) => {
        setTimeout(()=> {
            res(cats);
        },5000
        );
    });


    return promise;
}