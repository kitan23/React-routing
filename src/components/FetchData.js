import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const DisplayOne = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <h3>capital: {data.capital}</h3>
      <h3>population: {data.population}</h3>
      <h3>Language</h3>
      <ul>
        {data.languages.map((language) => (
          <li>{language.name}</li>
        ))}
      </ul>
      <img style={{ width: "200px" }} src={data.flag} />
    </div>
  );
};

const DisplayMultiple = ({ data }) => {
  return data.map((item) => (
    <ul>
      <li>{item.name}</li>
    </ul>
  ));
};

function Display({ data }) {
  return data.length === 1 ? (
    <DisplayOne data={data[0]} />
  ) : (
    <DisplayMultiple data={data} />
  );
}

export default function FetchData() {
  const [data, setData] = useState([]);
  const [key, setKey] = useState("");

  const fetchData = () => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${key}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => err);
  };
  useEffect(() => {
    fetchData();
  }, [key]);

  const Search = (e) => {
    e.preventDefault();
    setKey("");
  };

  return (
    <div>
      <form onSubmit={(e) => Search(e)}>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="search country..."
        />
        <button>Search</button>
      </form>
      {/* <DisplayOne data={data[0]} /> */}
      <Display data={data} />
    </div>
  );
}
