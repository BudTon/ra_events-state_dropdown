function Dropdown({ onSwitch }) {
  return (
    <button data-id="toggle" className={"btn"} onClick={onSwitch}>
      <span>Account Settings</span>
      <i className={"material-icons"}>public</i>
    </button>
  )
}

export default Dropdown;