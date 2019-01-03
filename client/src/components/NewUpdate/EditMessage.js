import React from 'react';
import Input from '../UI/Form/Input';
import Textarea from '../UI/Form/Textarea';
import errorFormHandler from '../../utils/errorFormHandler';
import isFormValid from '../../utils/isFormValid';
import capsFirstLetter from '../../utils/capsFirstLetter';

const initialState = {
  message: '',
  title: false,
  parksTitle: '',
  showError: false,
  formErrors: null
};

class EditMessage extends React.Component {
  state = initialState;

  componentDidMount() {
    this.handleParksTitle();
  }

  componentDidUpdate(prevProps) {
    if (this.props.titles !== prevProps.titles) this.handleParksTitle();
  }

  handleParksTitle = () => {
    const parksTitle = this.props.titles
      .map(el => capsFirstLetter(el))
      .reduce((acc, red) => acc + `, ${red}`)
      .concat(',');

    this.setState({ parksTitle });
  };

  handleChange = e => {
    const { name, type, value } = e.target;

    this.setState({
      [name]: value,
      formErrors: {
        ...this.state.formErrors,
        [name]: errorFormHandler(type, value)
      }
    });
  };

  handleToggle = () => this.setState({ title: !this.state.title });

  handleSubmit = e => {
    e.preventDefault();
    const { formErrors, parksTitle, title } = this.state;
    let { message } = this.state;
    const isValid = isFormValid(formErrors, message);

    if (title) message = `${parksTitle} \n${message}`;

    isValid
      ? this.handleSendForm(message)
      : this.setState({ showErrors: true });
  };

  handleSendForm = dataForm => {
    const payload = { method: 'POST', body: JSON.stringify(dataForm) };

    fetch('/admin/newupdate', payload)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    console.log('SEND DATA', dataForm);

    // Reset Form field
    this.setState(initialState);
  };

  render() {
    const { formErrors, message, parksTitle, showErrors, title } = this.state;
    const hasErrors = showErrors && formErrors;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          label='Title(s)'
          name='title'
          type='checkbox'
          value='title'
          onChange={this.handleToggle}
        />

        <Textarea
          style={{ width: 300 }}
          placeholder='Write your message here'
          name='message'
          onChange={this.handleChange}
          value={message}
          error={hasErrors && formErrors.message}
          required
        />

        <Textarea
          style={{
            width: 300,
            minHeight: 100,
            background: 'green',
            color: 'white'
          }}
          name='textMessage'
          value={title ? `${parksTitle} \n${message}` : message}
          readOnly
        />

        <button>SUBMIT</button>
      </form>
    );
  }
}
export default EditMessage;