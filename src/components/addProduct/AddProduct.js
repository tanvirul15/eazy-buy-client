import React from "react";

const AddProduct = () => {
  const handleAddProduct = () => {
    const nameField = document.getElementById("nameInput");
    const weightField = document.getElementById("weightInput");
    const imageField = document.getElementById("imageInput");
    const priceField = document.getElementById("priceInput");
    const descriptionField = document.getElementById("descriptionInput");
    const name = nameField.value;
    const image = imageField.value;
    const price = priceField.value;
    const weight = weightField.value;
    const description = descriptionField.value;
    if (name == "" || image == "" || price == "" || weight == "") {
      alert("Input All the field");
    } else {
      const productItem = {
        name,
        image,
        price,
        weight,
        description,
      };
      fetch("https://fathomless-beyond-34579.herokuapp.com/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, image, price, weight, description }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedCount > 0) {
            alert("Product Inserted..");
            nameField.value = "";
            weightField.value = "";
            imageField.value = "";
            priceField.value = "";
            descriptionField.value = "";
          } else alert("Insertion Failed..!! Check your Internet Connection.");
        });
    }
  };
  return (
    <div>
      <h4 className='p-3 text-center display-6'>Add Product</h4>

      <div className='bg-light p-5 m-3'>
        <div className='d-flex'>
          <input id='nameInput' className='form-control mb-3 me-3' type='text' placeholder='Product Name' />
          <input id='weightInput' className='form-control mb-3' type='text' placeholder='Weight' />
        </div>
        <div className='d-flex'>
          <input id='imageInput' className='form-control mb-3 me-3' type='text' placeholder='Image URL (Ex: https://i.ibb.co/n7Ky0hV/image-40.png)' />
          <input id='priceInput' className='form-control mb-3' type='text' placeholder='Price' />
        </div>
        <textarea id='descriptionInput' className='form-control mb-3' placeholder='Description (Optional)' />
        <button className='btn btn-success' onClick={handleAddProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
