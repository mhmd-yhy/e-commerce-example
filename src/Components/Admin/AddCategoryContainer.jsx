import React, { useState } from "react";
import SubTitle from "../Utility/SubTitle";
import { BiImageAdd } from "react-icons/bi";
import { CreateCategory } from "../../Reducer/Slices/CategorySlice";
import { useDispatch } from "react-redux";

const imageStyle = "text-9xl font-bold cursor-pointer w-full h-full";
function AddCategoryContainer() {

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      console.log(URL.createObjectURL(e.target.files[0]));
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    if (name && image) {
      const added = dispatch(CreateCategory(formData));
      if (added) {
        console.log("Data is added");
      }
    } else {
      console.log("handle is not work");
    }
    // name && image ? (CreateCategory(formData)) : console.log("handle is not work");
  };

  return (
    <div className="max-w-3xl min-h-96">
      <SubTitle title={"إضافة تصنيف جديد"} />

      <div className="my-2 text-neutral-400">
        <h2 className="my-1">صوره التصنيف :</h2>
        <div>
          <label htmlFor="upload-photo" className="block w-32 h-32">
            {
              image ? (<img src={image} alt="" className={imageStyle} />) : (<BiImageAdd className={imageStyle} />)
            }
          </label>
          <input type="file" name="photo" className="hidden" id="upload-photo" onChange={onImageChange} />
        </div>
      </div>

      <div className="my-2">
        <input
          type="text"
          placeholder="اسم التصنيف"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-transparent py-1 pr-2 text-neutral-400 border border-neutral-400 rounded-lg outline-none w-full"
        />
        <br />
        <button className="text-base float-end text-white bg-neutral-800 py-1 px-10 border border-neutral-400 rounded-lg ml-4 duration-500 hover:text-neutral-400 my-1" onClick={handleSubmit}>
          حفظ
        </button>
      </div>

    </div>
  );
}

export default AddCategoryContainer;
