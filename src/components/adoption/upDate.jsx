import axios from "axios";
import { useState, useEffect } from "react";
const UpdateDogForm = (id = 1) => {
  const [dogData, setDogData] = useState({
    name: "",
    height: "",
    weight: "",
    image: "",
    personality: "",
    life_span: "",
  });

  useEffect(() => {
    axios
      .get(`/dogs/${id}`)
      .then((response) => {
        setDogData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching dog data:", error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDogData({ ...dogData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`/dogs/${id}`, dogData)
      .then((response) => {
        console.log("Dog updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating dog:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={dogData.name}
        onChange={handleInputChange}
      />

      <label>Height:</label>
      <input
        type="text"
        name="height"
        value={dogData.height}
        onChange={handleInputChange}
      />

      <label>Weight:</label>
      <input
        type="text"
        name="weight"
        value={dogData.weight}
        onChange={handleInputChange}
      />

      <label>Image:</label>
      <input
        type="text"
        name="image"
        value={dogData.image}
        onChange={handleInputChange}
      />

      <label>Personality:</label>
      <input
        type="text"
        name="personality"
        value={dogData.personality}
        onChange={handleInputChange}
      />

      <label>Life Span:</label>
      <input
        type="text"
        name="life_span"
        value={dogData.life_span}
        onChange={handleInputChange}
      />

      <button type="submit">Update Dog</button>
    </form>
  );
};

export default UpdateDogForm;
