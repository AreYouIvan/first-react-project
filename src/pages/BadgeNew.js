import React from 'react';

// Components brougth them.
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from "../components/BadgeForm";

// Utilities.
import logo from '../images/badge-header.svg'
import "./styles/BadgeNew.css";

// Render
class BadgeNew extends React.Component {

  state = { form : {}}

  handleChange = event => {

    // Disable overwritten on the form.
    const nextForm = this.state.form;
    nextForm[event.target.name] = event.target.value;

    // Setting the State.
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Ivan"
                lastName="Garcia"
                twitter="areyouivan"
                jobTitle="Fronted Engineer"
                avatarUrl="https://pbs.twimg.com/profile_images/1323471263596163073/uVmPhabt_400x400.jpg"
              ></Badge>
            </div>

            <div className="col">                
              <BadgeForm onChange={this.handleChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;