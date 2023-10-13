import axios from "axios";

const apiEndPoint = "https://images-api.nasa.gov/";

export const createImagesSlice = (set) => ({
  images: [],
  getImages: async function (search) {
    console.log(search);
    const response = await axios.get(apiEndPoint+`search?q=${search}`);

    const items=response.data.collection.items;
    const links=items.map((item)=>item.links)

    set(() => ({ images: links
    }));
  },
});
