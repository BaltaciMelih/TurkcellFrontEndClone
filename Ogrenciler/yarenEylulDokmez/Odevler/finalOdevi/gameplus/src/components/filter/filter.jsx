import React, {useState, useEffect} from 'react'
import './filter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from '../../components/button';

export default function Filter(props) {
   const states =[ "Available","Patching", "Maintenance"]
   const genres=["Shooters", "Action","RPG", "Racing","MOBA/MMO","Simulation","Strategy","Sports","Kids/Family","Casual","Demo","Horror", "Platformer","Battle Royale","Adventure","Open World"]
   const [checked, setChecked] = useState([]);
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
 
   const handleCheck = (event) => {
      var updatedList = [...checked];
      if (event.target.checked) {
        updatedList = [...checked, event.target.value];
      } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
      }
      setChecked(updatedList);
    };
     console.log(checked);
    useEffect(() => {
      props.setOption(checked);
    });
  return (
   <div>
    <div className="filterCompBig">
        <div className="stateCb">
        <h4 className="state">State</h4>
        {states.map((item, index) => (
        <div className="form-check cbDiv">
        <input className="form-check-input" key={index} type="checkbox" value={item} id={item} onChange={handleCheck}/>
        <label className="form-check-label cbText" htmlFor={item}>{item}</label>
        </div>
        ))}
        </div>
        <div className="genreCb">
        <h4 className="genre">Genre Filters</h4>
        {genres.map((item, index) => (
        <div className="form-check cbDiv">
        <input className="form-check-input" key={item} type="checkbox" value={item} id={item} onChange={handleCheck}/>
        <label className="form-check-label cbText" htmlFor={item}>{item}</label>
        </div>
        ))}
        </div>
    </div>
    <div className="filterCompSmall">
    <button className="filterButton" onClick={handleShow}>
        Filter
      </button>

      <Modal className="modalBack" show={show} onHide={handleClose}>
        <Modal.Header className="modalBack" closeButton>
          <Modal.Title className="modalHead">Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBack">
        <div className="stateCb">
        <h4 className="state">State</h4>
        {states.map((item, index) => (
        <div className="form-check cbDiv">
        <input className="form-check-input" key={index} type="checkbox" value={item} id={item}/>
        <label className="form-check-label cbText" htmlFor={item}>{item}</label>
        </div>
        ))}
        </div>
        <div className="genreCb">
        <h4 className="genre">Genre Filters</h4>
        {genres.map((item, index) => (
        <div className="form-check cbDiv">
        <input className="form-check-input" key={index} type="checkbox" value={item} id={item}/>
        <label className="form-check-label cbText" htmlFor={item}>{item}</label>
        </div>
        ))}
        </div>
        <Button margin={"9px 50px 30px"} text={"uygula"}/>
        </Modal.Body>
      </Modal>
    </div>
    </div>
  )
}
