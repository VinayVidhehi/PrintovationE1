import React from 'react';

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
                <p className='py-2'>
                    A weekly event comprising of submitting a CAD design following any of the sustainable goals within the rules. One selected winner will get their model printed and a chance to be a member of Printinnovators and access to 3d printers*.
                </p>
                <p className='py-2 px-1 border-2 border-gray-400 m-1 md:mx-72'>
                    more details coming-up on 
                </p>
                <p className='py-2 text-xl text-red-600'>
                    29/01/2024, Monday at 11am.
                </p>
            </section>
            <section className='my-96'>

            </section>
        </main>
    </div>
  )
}

export default Events;
