import FilterList from '../FilterList/FilterList';

const FilterModal = () => {
  return (
    <div className='d-lg-none w-100'>
      <button type='button' className='btn btn-primary w-100' data-bs-toggle='modal' data-bs-target='#exampleModalLong'>
        Filters
      </button>

      <div
        className='modal fade'
        id='exampleModalLong'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalLongTitle'
        aria-hidden='true'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content' style={{ backgroundColor: '#1e1e1e' }}>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLongTitle'>
                Modal title
              </h5>
              <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <FilterList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
