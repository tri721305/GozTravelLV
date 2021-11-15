import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

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
