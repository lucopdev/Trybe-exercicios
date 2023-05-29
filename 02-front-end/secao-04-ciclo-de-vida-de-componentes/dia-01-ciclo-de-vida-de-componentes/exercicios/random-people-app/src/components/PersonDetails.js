import React, { Component } from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

class PersonDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      person: [],
    };
  }

  componentDidMount = async () => {
    const url = 'https://api.randomuser.me/';

    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      person: data.results,
      loading: false,
    });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    // console.log(nextState.person[0].dob.age);
    const AGE = 50;
    if (nextState.person[0].dob.age < AGE) return true;
  }

  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  render() {
    const { loading, person } = this.state;
    console.log(person);
    if (loading) return <Loading />;
    return (
      <div>
        <PersonCard
          person={this.getUserElements(person[0])}
        />
      </div>
    );
  }
}

export default PersonDetails;
