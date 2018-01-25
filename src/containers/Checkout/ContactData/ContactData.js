import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import styles from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients)

    this.setState({loading:true});

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Some Name',
        address: {
          street: 'Test stret',
          zipCode: '23423',
          country: 'USA'
        },
        email: 'test@example.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      })
  }

  render() {
    let form = (
      <form>
        <input className={styles.Input} type="text" name="name" placeholder="Your name" />
        <input className={styles.Input} type="email" name="email" placeholder="Your email" />
        <input className={styles.Input} type="text" name="street" placeholder="Street" />
        <input className={styles.Input} type="text" name="postalCode" placeholder="Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return(
      <div className={styles.ContactData}>
        <h4>Enter your Contact Information</h4>
        {form}        
      </div>
    );
  }
}

export default ContactData;