import React, { useState, useEffect } from "react";
// import PlannerCard from "./PlannerCards/PlannerCard/PlannerCard";
import FormPlan from "./Form/Form";
import { getPlans } from "../../actions/plans";
import { useDispatch } from "react-redux";
import PlannerCards from "./PlannerCards/PlannerCards";
import NavbarVs2 from "../Navbar/navbarvs2";
import PageHeader from "../global-components/page-header";
import Subscribe from "../section-components/subscribe";
import Footer from "../global-components/footer";
import { useHistory, useLocation } from "react-router-dom";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { getPlansBySearch } from "../../actions/plans";
import PaginationPlan from "../PaginationPlan";
import useStyles from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Planners = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   dispatch(getPlans());
  // }, [currentId, dispatch]);

  const searchPlans = () => {
    if (search.trim()) {
      dispatch(getPlansBySearch({ search }));
      history.push(`/plans/search?searchQuery=${search || "none"}`);
    } else {
      history.push("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode == 13) {
      searchPlans();
    }
  };

  return (
    <>
      <NavbarVs2 />
      <PageHeader headertitle="Planners List" />
      <Grow in>
        <Container maxWidth="xl">
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
            className={classes.gridContainer}
          >
            <Grid item xs={12} sm={4} md={9}>
              <PlannerCards setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={8} md={3}>
              <AppBar
                className={classes.appBarSearch}
                position="static"
                color="inherit"
              >
                <TextField
                  name="search"
                  variant="outlined"
                  label="Search Plans"
                  onKeyPress={handleKeyPress}
                  fullWidth
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button
                  onClick={searchPlans}
                  className={classes.searchButton}
                  color="primary"
                  variant="contained"
                  style={{ backgroundColor: "#F39142" }}
                >
                  Search
                </Button>
              </AppBar>

              <FormPlan setCurrentId={setCurrentId} currentId={currentId} />
              {!searchQuery && (
                <Paper elevation={6} className={classes.pagination}>
                  <PaginationPlan page={page} />
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Planners;
