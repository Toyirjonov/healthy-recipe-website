import React, { useEffect } from "react";
import useDatabase from "../hooks/useDatabase";

function Create() {
  const { postData, getPost } = useDatabase("/recipes");

  useEffect(() => {
    getPost();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get("title");
    const img = formData.get("image");
    const overview = formData.get("overview");
    const servings = formData.get("servings");
    const prepMinutes = formData.get("prepMinutes");
    const cookMinutes = formData.get("cookMinutes");
    const ingredients = formData.get("ingredients").split(",");
    const instructions = formData
      .get("instructions")
      .split(",")
      .map((i) => i.trim());
    if (
      title &&
      img &&
      overview &&
      servings &&
      prepMinutes &&
      cookMinutes &&
      ingredients &&
      instructions
    ) {
      postData({
        title,
        image: {
          small: img,
          large: img,
        },
        overview,
        servings,
        prepMinutes: Number(prepMinutes),
        cookMinutes: Number(cookMinutes),
        ingredients: ingredients.map((i) => i.trim()),
        instructions: instructions.map((i) => i.trim()),
      });
      alert("Recipe addded successfully");
    } else {
      alert("Please fil in all fields");
    }

    e.target.reset();
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-input"
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          className="form-input"
        />
        <input
          type="text"
          name="overview"
          placeholder="Overview"
          className="form-input"
        />
        <input
          type="number"
          name="servings"
          placeholder="Servings"
          className="form-input"
        />
        <input
          type="number"
          name="prepMinutes"
          placeholder="Prep Minutes"
          className="form-input"
        />
        <input
          type="number"
          name="cookMinutes"
          placeholder="Cook Minutes"
          className="form-input"
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients"
          className="form-input"
        />
        <input
          type="text"
          name="instructions"
          placeholder="Instructions"
          className="form-input"
        />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </>
  );
}

export default Create;
