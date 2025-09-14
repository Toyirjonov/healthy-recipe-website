import { useState } from "react";
import Search from "./Search";
import SelectButton from "./SelectButton";
import { List } from "./List";

function RecipesHeader() {
  const [searchText, setSearchText] = useState("");
  const [selectedPrep, setSelectedPrep] = useState([]);
  const [selectedCook, setSelectedCook] = useState([]);

  const prepOptions = [
    { value: "0", label: "0 minutes" },
    { value: "5", label: "5 minutes" },
    { value: "10", label: "10 minutes" },
  ];

  const cookOptions = [
    { value: "0", label: "0 minutes" },
    { value: "5", label: "5 minutes" },
    { value: "10", label: "10 minutes" },
    { value: "15", label: "15 minutes" },
    { value: "20", label: "20 minutes" },
  ];
  return (
    <section className="recipes">
      <div className="recipes__text">
        <h1 className="recipes__title">Simple, tasty recipes</h1>
        <p className="recipes__subtitle">
          Find the perfect recipe for any occasion with our collection of
          delicious, easy-to-make dishes that will satisfy your taste buds.
        </p>
      </div>

      <div className="recipes__btns">
        <div className="recipes__btns-time">
          <SelectButton
            options={prepOptions}
            title="Prep Time"
            selected={selectedPrep}
            setSelected={setSelectedPrep}
          />
          <SelectButton
            options={cookOptions}
            title="Cook Time"
            selected={selectedCook}
            setSelected={setSelectedCook}
          />
        </div>{" "}
        <Search searchText={searchText} setSearchText={setSearchText} />
      </div>

      <List
        selected={selectedPrep}
        selectedClock={selectedCook}
        searchText={searchText}
      />
    </section>
  );
}

export default RecipesHeader;
