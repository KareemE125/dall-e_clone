import { Dropdown } from 'flowbite-react'
import { NavLink } from 'react-router-dom';


export default function DropDownMenu() {


    return <section id='dropdown-menu' >
        <Dropdown className='dark' label="Menu" style={{ background: '#991133' }}>

            <NavLink className="nav-link" to='/'>
                <Dropdown.Item className='justify-center'>
                    Home
                </Dropdown.Item>
            </NavLink>

            <NavLink className="nav-link" to='/generate'>
                <Dropdown.Item className='justify-center'>
                    Generate
                </Dropdown.Item>
            </NavLink >
            <NavLink className="nav-link" to='/about-us'>
                <Dropdown.Item className='justify-center'>
                    About Us
                </Dropdown.Item>
            </NavLink>
        </Dropdown>
    </section>
}
