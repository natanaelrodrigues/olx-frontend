import React from 'react';
import { connect }   from 'react-redux';


const App = (props) => {
  return (
    <div>
      Funcionando.
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) =>{
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
