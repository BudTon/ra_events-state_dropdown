function DropdownList({ activeIndex, handleClick }) {
  const DropdownItem = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out'];
  return (
    <ul className="dropdown">
      {DropdownItem.map((item, index) => (
        <li
          key={index}
          className={index === activeIndex ? 'active' : ''}
          onClick={() => handleClick(index)}
        >
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default DropdownList;