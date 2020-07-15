import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect} from 'react-redux';
import {removeFeature,addFeature} from './actions/actions'


const App = (props) => {
 
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalPrice={props.additionalPrice} />
        <AddedFeatures car={props.car} removeFeature={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={props.addFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return{
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  }
}

export default connect(
mapStateToProps,
{ removeFeature,addFeature }
) (App);
