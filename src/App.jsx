import { useState } from 'react'
import Dropdown from './components/functional/Dropdown'
import DropdownList from './components/functional/DropdownList'
import './App.css'

function App() {
  const [status, setStatus] = useState('dropdown-wrapper')

  const onSwitch = () => {
    setStatus(status === 'dropdown-wrapper open' ? 'dropdown-wrapper' : 'dropdown-wrapper open');
  };

  const [activeIndex, setActiveIndex] = useState(undefined); 
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <header className={'home-work'}>
        <h1>2. Состояние компонентов</h1>
        <h2>2.3 Выпадающий список</h2>
      </header>
      <div className={'container'}>
        <div data-id="wrapper" className={status}>

          <Dropdown
            onSwitch={onSwitch}
          />

          <DropdownList
            handleClick={handleClick}
            activeIndex={activeIndex}
          />

        </div>
      </div>
    </>
  )
}

export default App
