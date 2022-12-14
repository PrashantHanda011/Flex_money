import React, { useState } from 'react';

const ApplicationForm = () => {
    const [ModalState, setModalState] = useState(1)
    const [formData, setformData] = useState({
            name:"",
            age:"",
            phone:"",
            date:"",
            batch:""
    }); 


    const handleChange = (e) => {
        const {name,value}=e.target
        setformData({...formData,[name]:value});
    }

    const handleSubmit =async(e)=>{
        e.preventDefault()
       
        try {
            //const data = api   
            window.confirm("Payement Successfull")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex justify-content-around w-50 align-items-center'>
                    <button className='btn btn-secondary btn-sm' onClick={()=>setModalState(1)} type="button" data-toggle="modal" data-target="#exampleModal">Pricing</button>
                    <h1 className=''>Yoga Class</h1>
                    <button className='btn btn-secondary btn-sm' onClick={()=>setModalState(2)} type="button" data-toggle="modal" data-target="#exampleModal">Batches</button>
                </div>
                <hr className='border border-dark w-100' />
                <form className={` mt-3 col-6`} onSubmit={handleSubmit} >
                    <div className="form-group  mb-1 mb-3  " >
                        <label >Full Name</label>
                        <input type="text" onChange={handleChange} name="firstname" className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="form-group mb-3 ">
                        <label >Age</label>
                        <input type="number" onChange={handleChange} min={18} max={65} name="email" className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="form-group mb-3 ">
                        <label >Phone Number </label>
                        <input type="tel" name="phone" onChange={handleChange} className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="form-group mb-3 ">
                        <label >Date </label>
                        <input type="date" name="phone" onChange={handleChange} className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="form-group mb-3 ">
                        <label >Batch </label>
                        <select className="form-control" onChange={handleChange} name="country" >
                            <option>Select Batch</option>
                            <option value="6-7AM">6-7AM</option>
                            <option value="7-8AM">7-8AM</option>
                            <option value="8-9AM">8-9AM</option>
                            <option value="5-6PM">5-6PM</option>
                        </select>
                    </div>
                    <div className={`d-flex  align-items-center  `}>
                    </div>
                    <div className={`w-100 d-flex justify-content-center mt-3 `}>
                        <button className='btn btn-secondary' onClick={handleSubmit} type="submit" >Pay - 500 Rs</button>
                    </div>
                </form>

            </div>

            {/* modal-1 */}
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                            {
                                ModalState==1 ?("Pricing"):("Batches")
                            }
                            </h5>

                        </div>
                        <div className="modal-body">
                            {
                                ModalState == 1 ? (
                                    <>

                                        <p className='mb-0'>Rs 500 per month</p>
                                        (You can enroll any day but you have to pay for the entire month)
                                    </>
                                ) : (
                                    <>
                                        <h6>Timings</h6>
                                        <p className='mb-0'>Batch 1 - 6-7 AM</p>
                                        <p className='mb-0'>Batch 2 - 7-8 AM</p>
                                        <p className='mb-0'>Batch 3 - 8-9 AM</p>
                                        <p className='mb-0'>Batch 4 - 5-6 PM</p>
                                    </>
                                )
                            }

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default ApplicationForm;