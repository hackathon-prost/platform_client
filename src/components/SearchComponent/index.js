import React from 'react';
import search from '../../assets/search.svg'
import {connect} from 'react-redux'
import './style.css'
const SearchComponent = ({placeholder}) => {
    const handleChangeSearch = (input) => {
        console.log(input.target.value)
    }
    return(
       <form className='SearchComponent'>
           <input
            type='text' 
            placeholder={placeholder}
            onChange={handleChangeSearch}
            />
           <button type='submit'>
               <img style={{width: '1.4em'}} src={search} alt="Searc Icon"/>
           </button>
       </form>
    )
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)
