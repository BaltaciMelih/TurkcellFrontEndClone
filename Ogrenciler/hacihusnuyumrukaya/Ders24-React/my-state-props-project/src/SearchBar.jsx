import React from 'react';


class SearchBar extends React.Component {


 handleFormSubmit=(e)=>{
  e.preventDefault();
 }

  render(){
    return (
     
      <form onSubmit={this.handleFormSubmit}>
        <div className='form-row mb-5 mt-2'>
          <div className="col-12">
            <input 
            onChange={this.props.searchFoodProps}  
            type="text" className='form-control' 
            placeholder='Search Foods' 
            />
          </div>
        </div>
      </form>

    )
  }
}
export default SearchBar;