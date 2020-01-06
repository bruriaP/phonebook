import React, {component} from 'react';

class counter1 extends component{
    state = {myDate:"2021-01-30"};

    render(){
        return(
            <div>
    <h2>count down to {this.state.myDate}</h2>
                <h3>days:xx</h3>
            </div>
        )
    }
    
}
export default counter1;