import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import AbcContainer from '../Container/Search-Abc';

class LangForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Eng'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    //   console.log(this.state.value);
    }
  
    handleSubmit(event) {
      alert('Your Lang is: ' + this.state.value);
    //   console.log('this.state.value');
      event.preventDefault();
      
    }
  
    render() {
      return (
        <Container maxWidth="lg" >
        <Grid item lg style={{marginLeft:'60rem' ,paddingTop:'1.5rem'}}>
        <form onSubmit={this.handleSubmit}>
          <label>
            {/* בחר שפה: */}
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Eng">אנגלית</option>
              <option value="Heb">עברית</option>
             
            </select>
          </label>
          <input type="submit" value="בחר" onClick={this.handleSubmit} />
        </form>
        </Grid>
        <AbcContainer lang={this.state.value}/>
      </Container>
      
      );
    }
  }
  export default LangForm