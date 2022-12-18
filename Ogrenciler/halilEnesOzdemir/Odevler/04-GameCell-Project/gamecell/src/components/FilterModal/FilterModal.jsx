import FilterList from '../FilterList/FilterList';
import './FilterModal.scss';

const FilterModal = () => {
  return (
    <div className='d-lg-none w-100'>
      <button type='button' className='btn btn-filter w-100' data-bs-toggle='modal' data-bs-target='#exampleModalLong'>
        Filter
      </button>
      <img src='' alt='' />

      <div
        className='modal fade'
        id='exampleModalLong'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLongTitle'
        aria-hidden='true'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content' style={{ backgroundColor: '#1e1e1e' }}>
            <div className='modal-header'>
              <h5 className='modal-title text-secondary text-opacity-100' id='exampleModalLongTitle'>
                Filter Menu
              </h5>
              <button
                type='button'
                className='close text-danger rounded-1 border-0'
                data-bs-dismiss='modal'
                aria-label='Close'>
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
