import React from 'react';
// import  './style.css';

class Popup extends React.Component{

    render(){
        const google =
        "<iframe width='100%' height='100%' scrolling='no' src='http://zonda-ext-eu-dev.publicapps.lfgh.ocpqa.lafargeholcim-go.com/logon/order/auftrag/OrderDetailEntry.do?orderid=13273122'></iframe>";
        console.log(this.props.order)
        return(
            <div  className='popup'>
                <div className='popup_inner'>
                    <h1> {this.props.text} </h1>
                    <div style={{"height" : "800px"}} dangerouslySetInnerHTML={{ __html: google ? google :""}}/>
                    {/* <button onClick={this.props.closePopup}> close me </button> */}
                </div>
            </div>
        );
    }
}

export default Popup;