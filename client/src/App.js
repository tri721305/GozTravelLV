// import React, {
//   Fragment,
//   lazy,
//   Suspense,
//   createContext,
//   useReducer,
//   useEffect,
//   useState,
// } from "react";
// // import { Container } from "@material-ui/core";
// // import Media from "./Media";
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   HashRouter,
//   Redirect,
// } from "react-router-dom";
// // import LocationForm from "./components/PlanLocation/planLocation";
// import TestMap from "./components/MapPlan/Map/testMap";
// import HomeCreate from "./components/Home/Home";
// import Home from "./components/home-v1";
// import Auth from "./components/Auth/Auth";
import About from "./components/about";
import TourDetails from "./components/tour-details";
// import DestinationList from "./components/destination-list";
// import DestinationListV2 from "./components/destination-list-v2";
// import NavbarVS2 from "./components/Navbar/navbarvs2";
// import UserProfilePage from "./components/user-profile";
// import PlanDetails from "./components/PlanDetail/Plandetails";
// import DateForm from "./components/DateForm/dataform";
// import TourListPage from "./components/tour-list";
import Planners from "./components/Planners/Planners";
// import Search from "./components/PlanLocation/Search";

// import PlannersTri from "./components/PlannerDetails/plannerdetails";
// import ReviewPost from "./components/section-components/tour-details";
// import BlogDetails from "./components/blog-details";

// import PostDetails from "./components/postDetails";
// import AdminDetails from "./components/admindetails";
// import MapPlan from "./components/MapPlan/MapPlan";

// import { initialUIState, UIReducer } from "./context/UIContext";
// import { UserReducer, initialUserState } from "./context/UserContext";
// import { PostReducer, initialPostState } from "./context/PostContext";
// import { ChatReducer, initialChatState } from "./context/ChatContext";

// import { fetchCurrentUser } from "./services/AuthService";
// import jwtDecode from "jwt-decode";

// import ProtectedRoute from "./utils/ProtectedRoute";
// import { Alert } from "@material-ui/lab";

// import io from "socket.io-client";
// import SimpleMap from "./components/map";
// // // export const UIContext = createContext();
// // // export const UserContext = createContext();
// // // export const PostContext = createContext();
// // // export const ChatContext = createContext();

// const token = localStorage.token && JSON.parse(localStorage.token);
// const App = () => {
//   const user = JSON.parse(localStorage.getItem("profile"));

//   return (
//     <div>
//       {/* <MapPlan /> */}
//       {/* <HashRouter basename="/"> */}
//       {/* <SimpleMap /> */}
//       {/* <Media /> */}
//       <BrowserRouter>
//         {/* <Container maxWidth="lg"> */}

//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route
//             path="/auth"
//             exact
//             component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
//           />
//           {/* <Route path="/test" exact component={MapPlan} />
//           <Route path="/posts" exact component={HomeCreate} />
//            <Route path="/posts/search" exact component={HomeCreate} />
//            <Route path="/posts/:id" component={PostDetails} />
//            <Route path="/tourlist" component={TourDetails} />
//            <Route path="/planlocation" component={Search} />
//           <Route path="/plandate" component={DateForm} /> */}
//           <Route path="/plans" exact component={Planners} />
//           <Route path="/plans/search" exact component={Planners} />
//           <Route path="/plans/:id" component={TourDetails} />
//           {/* /* <Route path="/blogdetails" component={BlogDetails} />
//           <Route path="/about" component={About} />
//           <Route path="/admindetail" component={AdminDetails} />
//           <Route path="/destinationlist" component={DestinationListV2} />
//           <Route path="/user-profile" component={UserProfilePage} /> */}
//         </Switch>

//         {/* </Container>  */}
//       </BrowserRouter>

//       {/* </HashRouter>  */}
//     </div>
//   );
// };

// export default App;
import Home1 from "./components/home-v1";
// import Auth from "./components/Auth/Auth";
import React, {
  Fragment,
  lazy,
  Suspense,
  createContext,
  useReducer,
  useEffect,
  useState,
} from "react";

import dotenv from "dotenv";

import { ThemeProvider } from "@material-ui/core/styles";

import {
  Snackbar,
  useMediaQuery,
  useTheme,
  createMuiTheme,
} from "@material-ui/core";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Navbar from "./componentsMedia/Navbar/Navbar";
import NavbarVS2 from "./componentsMedia/Navbar/Navbar2";
import Loader from "./componentsMedia/Loader";
import BottomNav from "./componentsMedia/Navbar/BottomNav.js";
import { initialUIState, UIReducer } from "./context/UIContext";
import { UserReducer, initialUserState } from "./context/UserContext";
import { PostReducer, initialPostState } from "./context/PostContext";
import { ChatReducer, initialChatState } from "./context/ChatContext";

import { fetchCurrentUser } from "./services/AuthService";

import jwtDecode from "jwt-decode";

import ProtectedRoute from "./utils/ProtectedRoute";
import { Alert } from "@material-ui/lab";

import io from "socket.io-client";

export const UIContext = createContext();
export const UserContext = createContext();
export const PostContext = createContext();
export const ChatContext = createContext();

const Home = lazy(() => import("./screens/Home"));
const Friends = lazy(() => import("./screens/Friends"));
const Auth = lazy(() => import("./screens/Auth"));
const Profile = lazy(() => import("./screens/Profile"));
const Post = lazy(() => import("./screens/Post"));
const Messenger = lazy(() => import("./screens/Messenger"));
const Settings = lazy(() => import("./screens/Settings"));

const token = localStorage.token && JSON.parse(localStorage.token);

const App = () => {
  const [uiState, uiDispatch] = useReducer(UIReducer, initialUIState);
  const [userState, userDispatch] = useReducer(UserReducer, initialUserState);
  const [postState, postDispatch] = useReducer(PostReducer, initialPostState);
  const [chatState, chatDispatch] = useReducer(ChatReducer, initialChatState);

  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const Theme = React.useMemo(
    () =>
      createMuiTheme({
        active: {
          success: "rgb(63,162,76)",
        },

        palette: {
          type: uiState.darkMode ? "dark" : "light",
          primary: {
            main: "rgb(1,133,243)",
          },

          secondary: {
            main: "rgb(63,162,76)",
          },
        },
      }),
    [uiState.darkMode]
  );

  useEffect(() => {
    uiDispatch({ type: "SET_USER_SCREEN", payload: mdScreen });
  }, [mdScreen]);

  useEffect(() => {
    async function loadCurrentUser() {
      if (token) {
        const decodeToken = jwtDecode(token);

        if (decodeToken.exp * 1000 < Date.now()) {
          userDispatch({ type: "LOGOUT_USER" });
        } else {
          const currentUser = await fetchCurrentUser();
          if (currentUser && currentUser.data) {
            userDispatch({
              type: "SET_CURRENT_USER",
              payload: currentUser.data.user,
            });

            uiDispatch({
              type: "SET_NOTIFICATIONS",
              payload: currentUser.data.notifications,
            });
          }
        }
      }
    }

    function loadRecentAccounts() {
      const accounts = localStorage.accounts
        ? JSON.parse(localStorage.accounts)
        : [];
      userDispatch({ type: "RECENT_ACCOUNTS", payload: accounts });
    }

    loadCurrentUser();
    loadRecentAccounts();
  }, []);

  useEffect(() => {
    if (userState.isLoggedIn) {
      let socketio = io("http://localhost:5000", { transports: ["websocket"] });
      userDispatch({ type: "SET_SOCKETIO", payload: socketio });
      socketio.on("connect", () => {
        console.log("connected");
      });

      socketio.on("friend-logout-status", ({ user_id }) => {
        userDispatch({ type: "FRIEND_LOGOUT", payload: user_id });
      });

      socketio.on("friend-login-status", ({ user_id }) => {
        userDispatch({ type: "FRIEND_LOGIN", payload: user_id });
      });

      socketio.on("friend-request-status", ({ sender }) => {
        userDispatch({
          type: "ADD_FRIENDS_REQUEST_RECEIVED",
          payload: sender,
        });
      });

      socketio.on("sended-friend-request-cancel", ({ requestId }) => {
        userDispatch({
          type: "REMOVE_FRIENDS_REQUEST_RECEIVED",
          payload: requestId,
        });
      });

      socketio.on("friend-request-accept-status", ({ user, request_id }) => {
        userDispatch({
          type: "ADD_FRIEND",
          payload: user,
        });
        userDispatch({
          type: "REMOVE_FRIENDS_REQUEST_RECEIVED",
          payload: request_id,
        });
        userDispatch({
          type: "REMOVE_FRIENDS_REQUEST_SENDED",
          payload: request_id,
        });
      });

      socketio.on("received-friend-request-decline", ({ requestId }) => {
        console.log(requestId);
        userDispatch({
          type: "REMOVE_FRIENDS_REQUEST_SENDED",
          payload: requestId,
        });
      });

      socketio.on("new-post", ({ data }) => {
        postDispatch({ type: "ADD_POST", payload: data });
      });

      socketio.on("post-like-change", ({ data }) => {
        postDispatch({
          type: "LIKE_UNLIKE_POST",
          payload: data,
        });
      });

      socketio.on("post-comment", ({ data }) => {
        postDispatch({ type: "ADD_POST_COMMENT", payload: data });
      });

      socketio.on("comment-like-change", ({ data }) => {
        postDispatch({
          type: "LIKE_UNLIKE_COMMENT",
          payload: data,
        });
      });

      socketio.on("new-message", ({ data }) => {
        chatDispatch({ type: "ADD_MESSAGE", payload: data });
      });

      // Realtime  Notification releted stuff

      socketio.on("Notification", ({ data }) => {
        uiDispatch({ type: "ADD_NOTIFICATION", payload: data });
      });

      return () => {
        socketio.disconnect();
        userDispatch({ type: "SET_SOCKETIO", payload: null });
        console.log("disconnect");
      };
    }
  }, [userState.isLoggedIn]);

  // console.log(process.env.REACT_APP_ENDPOINT);
  // console.log(process.env.REACT_APP_APP_ID);

  return (
    <UIContext.Provider value={{ uiState, uiDispatch }}>
      <UserContext.Provider value={{ userState, userDispatch }}>
        <PostContext.Provider value={{ postState, postDispatch }}>
          <ChatContext.Provider value={{ chatState, chatDispatch }}>
            <ThemeProvider theme={Theme}>
              <Fragment>
                <Router>
                  {userState.isLoggedIn ? <Navbar /> : <NavbarVS2 />}
                  {/* {true && <NavbarVS2 />} */}
                  <div
                    style={{
                      backgroundColor: !uiState.darkMode
                        ? "rgb(240,242,245)"
                        : "rgb(24,25,26)",
                    }}
                  >
                    <Suspense fallback={<Loader />}>
                      {loading ? (
                        <Loader />
                      ) : (
                        <Switch>
                          <Route path="/" exact component={Home1} />
                          <Route path="/plans" exact component={Planners} />
                          <Route path="/plans/:id" component={TourDetails} />
                          <Route
                            path="/plans/search"
                            exact
                            component={Planners}
                          />
                          <Route path="/about" exact component={About} />
                          <Route
                            exact
                            path="/auth"
                            render={(props) =>
                              !userState.isLoggedIn ? (
                                // <Auth />
                                <Auth />
                              ) : (
                                // <Home1 />
                                <Redirect to="/home" />
                              )
                            }
                          />
                          {/* <Route
                            path="/auth"
                            exact
                            component={() =>
                              !user ? <Auth /> : <Redirect to="/posts" />
                            }
                          /> */}
                          {/* <Route exact path="/home" component={Home} /> */}
                          <ProtectedRoute
                            exact
                            path="/friends"
                            component={Friends}
                            isLoggedIn={userState.isLoggedIn}
                          />
                          <ProtectedRoute
                            exact
                            path="/messenger"
                            component={Messenger}
                            isLoggedIn={userState.isLoggedIn}
                          />
                          <ProtectedRoute
                            exact
                            path="/profile/:userId"
                            component={Profile}
                            isLoggedIn={userState.isLoggedIn}
                          />
                          <ProtectedRoute
                            exact
                            path="/home"
                            component={Home}
                            isLoggedIn={userState.isLoggedIn}
                          />
                          <ProtectedRoute
                            exact
                            path="/post/:postId"
                            component={Post}
                            isLoggedIn={userState.isLoggedIn}
                          />

                          <ProtectedRoute
                            exact
                            path="/settings"
                            component={Settings}
                            isLoggedIn={userState.isLoggedIn}
                          />
                        </Switch>
                      )}
                    </Suspense>
                  </div>

                  {uiState.message && (
                    <Snackbar
                      anchorOrigin={{ vertical: "top", horizontal: "center" }}
                      open={uiState.message.display}
                      autoHideDuration={6000}
                      onClose={() =>
                        uiDispatch({ type: "SET_MESSAGE", payload: null })
                      }
                      style={{ color: "#fff", marginTop: 60 }}
                    >
                      <Alert
                        onClose={() =>
                          uiDispatch({ type: "SET_MESSAGE", payload: null })
                        }
                        severity={uiState.message.color}
                      >
                        {uiState.message.text}
                      </Alert>
                    </Snackbar>
                  )}

                  {!uiState.mdScreen && userState.isLoggedIn ? (
                    <BottomNav />
                  ) : null}
                </Router>
              </Fragment>
            </ThemeProvider>
          </ChatContext.Provider>
        </PostContext.Provider>
      </UserContext.Provider>
    </UIContext.Provider>
  );
};

export default App;
