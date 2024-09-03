import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { getSearchAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.searchResults.results);

  //const baseEndpoint =
  // "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchAction(query));
  };
  //  try {
  //  const response = await fetch(baseEndpoint + query + "&limit=20");
  //  if (response.ok) {
  //    const { data } = await response.json();
  //   setJobs(data);
  //   } else {
  //     alert("Error fetching results");
  //   }
  //   } catch (error) {
  //    console.log(error);
  //  }
  // };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
