import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
// const URL =
//   "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
// const options = {
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",
//   },
//   headers: {
//     "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//     "x-rapidapi-key": "6b49181c7dmshf6b71c215b625c6p1a9fbdjsn0082358b42fd",
//   },
// };
// const API = axios.create({ baseURL: "https://luanvangoz.herokuapp.com" });
// const url = "http://localhost:5000/posts";
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    } `
  );
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const commentPost = (value, id) =>
  API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

// PLAN

// export const fetchPlan = (id) => API.get(`/plans/${id}`);
export const fetchPlan = (id) => API.get(`/plans/${id}`);
export const fetchPlans = (page) => API.get(`/plans?page=${page}`);
export const createPlan = (newPlan) => API.post("/plans", newPlan);
export const updatePlan = (id, updatedPlan) =>
  API.patch(`/plans/${id}`, updatedPlan);

export const commentPlan = (value, id) =>
  API.post(`/plans/${id}/commentPlan`, { value });
// export const likePlan = (id) => API.patch(`/plans/${id}/likePlan`);
export const deletePlan = (id) => API.delete(`/plans/${id}`);
export const fetchPlansBySearch = (searchQuery) =>
  API.get(
    `/plans/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    } `
  );
export const likePlan = (id) => API.patch(`/plans/${id}/likePlan`);

// USER LOGIN & LOGOUT
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);

// export const getPlacesData = async (sw, ne) => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(URL, options);

//     return data;
//   } catch (error) {
//     console.log(error);
//     console.log("hihi");
//   }
// };
export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "05810ed7ebmshec9839d606d6373p1ee23fjsncdf1887ab139",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get(
        "https://community-open-weather-map.p.rapidapi.com/find",
        {
          params: { lat, lon: lng },
          headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key":
              "05810ed7ebmshec9839d606d6373p1ee23fjsncdf1887ab139",
          },
        }
      );

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
