import React from "react";

import "./styles/Badges.css";
// import Navbar from '../components/Navbar';
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import { Link } from "react-router-dom";
import api from "../api";

class Badges extends React.Component {
  state = {
    loading: true,
    data: undefined,
    error: null,
  };

  // The best place to make an API petition is the componentDidMount()
  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading && !this.state.data) {
      let elements = 5;
      return [...Array(elements)].map((_e, i) => <PageLoading key={i} />);
    }

    if (this.state.error) {
      return <PageError error={this.state.error}></PageError>;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__logo-container">
              <img
                src={confLogo}
                alt="Conf Logo"
                className="Badges_conf-logo"
              />
            </div>
          </div>
          <div className="Badge__container">
            <Link to="/badges/new" className="btn btn-primary btn_newBadge">
              New Badge
            </Link>

            <div className="Badges__list">
              <BadgesList badges={this.state.data}></BadgesList>
              {this.state.loading && "Loading.."}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
