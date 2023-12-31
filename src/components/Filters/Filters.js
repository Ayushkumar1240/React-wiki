import React from 'react'
import Gender from '../Filters/Category/Gender'
import Species from '../Filters/Category/Species'
import Status from '../Filters/Category/Status'

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  let clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("")
    window.location.reload("false")
  };
  return (
  <div className='col-lg-3 col-12 mb-5'>
    <div className="text-center fw-bold fs-4 mb-2">Filters</div>

    <div
      onClick={clear}
      style={{ cursor: "pointer" }} className="text-center text-decoration-underline text-primary mb-4">Clear Filters</div>
    <div className="accordion" id="accordionExample">
      <Status setStatus={setStatus} setPageNumber={setPageNumber} />
      <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
      <Gender setGender={setGender} setPageNumber={setPageNumber} />
    </div>
  </div>
  )
}

export default Filters