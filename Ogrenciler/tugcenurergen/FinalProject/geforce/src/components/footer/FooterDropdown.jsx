import Dropdown from "react-bootstrap/Dropdown";

function FooterDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="border-0 rounded-0" variant="light" id="dropdown-basic">
        English
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Turkish</Dropdown.Item>
        <Dropdown.Item href="#/action-3">French</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FooterDropdown;
