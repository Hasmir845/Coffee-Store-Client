import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../Navbar';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, test, category, details, photo } = coffee;

    const handleUpdateCoffee = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {name, quantity, supplier, test, category, details,photo}
        console.log(updatedCoffee)

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: "Success!",
                    text: "Coffee Updated Successfully",
                    icon: "success",
                    confirmButtonText: 'cool'
                  });
            }
        })
        form.reset();
        
    }

    return (
      
        <div className=" bg-[#F4F3F0] p-24">
          <Navbar></Navbar>
      <h2 className=" text-3xl font-extrabold text-center mb-5">Update Coffee</h2>
      <form onSubmit={handleUpdateCoffee}>
        <div className=" md:flex gap-4 mb-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="name" defaultValue={name}
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="quantity" defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className=" md:flex gap-4 mb-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="supplier" defaultValue={supplier}
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Test</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="test" defaultValue={test}
                placeholder="Test"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className=" md:flex gap-4 mb-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="category" defaultValue={category}
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="details" defaultValue={details}
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className=" mb-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="photo" defaultValue={photo}
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" name="" id="" value="Update Coffee" className=" btn btn-block bg-gray-600 text-white" />
      </form>
    </div>
    );
};

export default UpdateCoffee;