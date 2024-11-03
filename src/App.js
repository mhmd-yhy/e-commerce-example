import { BrowserRouter } from "react-router-dom";
import Pages from "./Pages/Pages";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Image gallery styles
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory } from "./Reducer/Slices/CategorySlice";
function App() {
  const data = useSelector((state) => state.categoryReducer);

  console.log(data);
  // GetAllCategory();
  return (
    <div className="App bg-stone-50 ">
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
