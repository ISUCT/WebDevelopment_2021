import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getCats, Cat as ICat, getCatsApi } from "../../api/catsApi";
import Cat from "./Cat";

export default function CatsList() {
  const [cats, setcats] = useState<ICat[]>([]);

  useEffect(() => {
    console.log("Loading");
    const getData = async () => {
      const cats = await getCatsApi();
      setcats(cats);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Cats List</h1>
      { cats.length > 0 ?
      cats.map((cat: ICat) => {
        console.log(cat);
        return <Cat cat={cat} extra={"something"} key={cat.name} />;
      })
      : <CircularProgress />
    }
    </div>
  );
}
