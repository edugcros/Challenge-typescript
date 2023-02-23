import { useState } from "react";
import "./style/styleCard.css";
import {Text} from "../types"

interface Props {
  texts: Array<Text>;
}

export default function Card({ texts }: Props) {
  const [query, setQuery] = useState("");
  return (
    <div>
      <section>
        <div className="container">
          <div>
            <input
              style={{ textAlign: "center", marginLeft: "2%" }}
              type="search"
              name="author"
              placeholder="Search by phrase"
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
          </div>
          <div className="cards">
            {texts
              .filter((ads) => (ads.phrase || "").toLowerCase().includes(query))
              .map((text) => {
                return (
                  <div key={text.author} className="card">
                    <img src={text.img} alt="Edu" />
                    <h4>{text.author}</h4>
                    <p>{text.phrase}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
