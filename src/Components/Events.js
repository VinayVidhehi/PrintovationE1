import React from 'react';
import SDG from './Images/SDG.jpg';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div>
        <header className='text-3xl m-2 p-4'>
            <h1>EVENTS</h1>
        </header>

        <main className='w-11/12 m-auto'> 
            <section>
                <h1 className='text-2xl text-red-600 p-2 '>
                    PrintoQuest W1
                </h1>
                <p className='py-2 md:text-xl'>
                    A weekly event comprising of submitting a CAD design following any of the sustainable goals within the rules. One selected winner will get their model printed and a chance to be a member of Printinnovators and access to 3d printers*.
                </p>
                <p className='py-2 px-1 md:text-left mt-4 md:mt-12 md:text-xl'>
                    Among all the submissions, the most innovative model will be selected and the same will be printed. Following are the rules regarding the event
                    </p>
                    <ul className='list-disc'>
                        <li className='py-2 font-medium text-left'>
                            The files should be submitted in .stl format only. Any other format is rejected straight away.
                        </li>
                        <li className='py-2 font-medium text-left'>
                            The maximum filament that your model can use is around 3 meters or should not take a print time of more than 2 hours.
                        </li>
                        <li className='py-2 font-medium text-left'>
                            The model should be submitted with title as its name preceeded by sustainable development goal number (for eg: 9_modified-machine-screw, 9 for industry innovation and infrastruture under which the title/ model is derived)
                        </li>
                    </ul>
                
               
                <p className='py-2 text-xl font-medium text-red-600 border-2 border-gray-400 m-4 md:mx-72'>
                    Deadline: 12/02/2024, Monday 12noon.
                </p>
                <p className='my-2 text-xl'>Submit your models here</p>
                <Link to='https://forms.gle/nYCNpWLU8S1EN7ug6'><p className='px-4 py-2 m-auto bg-red-600 text-white w-1/3'>Submit</p></Link>
                <p className='py-2 '>
                   for more information regarding the event and rules please contact student coordinators.
                </p>
            </section>
            <section className='my-2 flex justify-center items-center flex-col md:my-16 md:text-xl'>
            <p className='py-2  text-red-600 font-semibold'>Sustainable Development Goals</p>
                <img src={SDG} alt='SDG' />
            </section>
        </main>
    </div>
  )
}

export default Events;
