import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ListIndicator from "./ListIndicator";
import { Link } from "react-router-dom";
import { addToFavourites } from "../redux/actions";
import { removeFromFavourites } from "../redux/actions";
import { getCompanyJobs } from "../redux/actions";

const CompanySearchResults = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.companyJobs.jobs);
  const myList = useSelector((state) => state.myList.content);

  useEffect(() => {
    dispatch(getCompanyJobs(params.company));
  }, [dispatch, params.company]);

  const handleList = () => {
    if (myList.includes(params.company)) {
      dispatch(removeFromFavourites(params.company));
    } else {
      dispatch(addToFavourites(params.company));
    }
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <Link to="/" className="text-decoration-none text-dark">
            <h1 className="display-4">Job posting for: {params.company}</h1>
          </Link>
          <ListIndicator />
          <Button onClick={handleList}>
            {myList.includes(params.company) ? "Remove" : "Add"}
          </Button>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
