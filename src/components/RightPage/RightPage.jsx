import React, { useEffect, useState } from "react";
import "./RightPage.scss";
import { useGetData } from "../../hooks/useGetData";

export const RightPage = ({ url }) => {
  const [details, setDetails] = useState(null);
  const { getData, data } = useGetData(url);
  useEffect(() => {
    getData();
  }, [url]);
  useEffect(() => {
    if (data) {
      const image = data.sprites.back_default;
      const name = data.name;
      const abilities = data.abilities;
      const types = data.types;
      setDetails({ image, name, abilities, types });
    }
  }, [data]);
  console.log(details);
  return (
    <div className="RightPage">
      <div className="RightPage__Container">
        {details && (
          <>
            <img
              src={details.image}
              alt="Pokemon"
              className="RightPage__Image"
            />
            <div className="RightPage__Details">
              <h3> Pokemon name: {details.name}</h3>
              <ul className="RightPage__List">
                Pokemon abilities:
                {details.abilities.map((value) => (
                  <li key={value.slot} className="RightPage__Item">
                    {value.ability.name}
                  </li>
                ))}
              </ul>
              <ul className="RightPage__List">
                Pokemon type:
                {details.types.map((value) => (
                  <li key={value.slot} className="RightPage__Item">
                    {value.type.name}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
