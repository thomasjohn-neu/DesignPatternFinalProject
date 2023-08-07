import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../styles/home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faFileInvoiceDollar,
  faFileAlt,
  faShoppingBasket,
  faUserTie,
  faDollarSign,
  faBalanceScale,
  faWeightHanging,
  faBox,
  faPeopleCarry,
} from "@fortawesome/free-solid-svg-icons";
import bg from "../assets/back.jpg";

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${bg})`,
};
const DATA = [
  {
    id: 1,
    title: "Purchase Orders",
    count: 10,
    icon: faFileInvoiceDollar,
  },
  {
    id: 2,
    title: "Invoices",
    count: 8,
    icon: faFileAlt,
  },
  {
    id: 3,
    title: "Products",
    count: 5,
    icon: faBox,
  },
  {
    id: 4,
    title: "Buyers",
    count: 3,
    icon: faPeopleCarry,
  },
  {
    id: 5,
    title: "Employees",
    count: 3,
    icon: faUserTie,
  },
  {
    id: 6,
    title: "Total Amount",
    count: 190000,
    icon: faDollarSign,
  },
  {
    id: 7,
    title: "Total Quantity",
    count: 504,
    icon: faBalanceScale,
  },
  {
    id: 8,
    title: "Total Orders",
    count: 40,
    icon: faWeightHanging,
  },
];

function Home() {
  return (
    <div>
      <Container>
        <Row className="container-main">
          {DATA.map((item, i) => {
            let color = "primary";

            if (i === 1 || i === 5) {
              color = "danger";
            } else if (i === 2 || i === 6) {
              color = "info";
            } else if (i === 3 || i === 7) {
              color = "success";
            }

            return (
              <Col md={4} className="dashboard-cards">
                <div className={`card-counter ${color}`}>
                  <FontAwesomeIcon icon={item.icon} className="card--icon" />
                  <span className="count-numbers">{item.count}</span>
                  <span className="count-name">{item.title}</span>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
