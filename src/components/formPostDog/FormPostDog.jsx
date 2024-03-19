import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import   { newDog } from "../../redux/actions/actionCreator";



const FormPostDog = () => {
  const userId =useSelector(state=>state.userLogged.id)

  const dispatch= useDispatch();
  const [dogData, setDogData] = useState({
    name: "",
    hostage_id:"",
    height: "",
    weight: "",
    image: "",
    personality: "",
    life_span: "",
  });

  useEffect(() => {
    setDogData({ ...dogData, hostage_id: userId });

    // axios
    //   .get(`/dogs/${id}`)
    //   .then((response) => {
    //     setDogData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching dog data:", error);
    //   });
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDogData({ ...dogData, [name]: value });
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    dispatch(newDog( dogData))
      
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

      <button type="submit">create</button>
      <button type="submit">Update Dog</button>
      <button type="submit">Delete</button>
    </form>
  );
};

export default FormPostDog;
