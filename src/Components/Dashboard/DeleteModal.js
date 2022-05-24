import React from 'react';

const DeleteModal = ({deletingOrder,handleOrderCancel,setDeletingOrder}) => {
    return (
        <div className='text-black'>
            <input type="checkbox" id="deleteModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="deleteModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold py-5">Do you want to delete your Order : <span className='text-primary'>{deletingOrder.product}</span></h3>
                    <a onClick={() => {
                        handleOrderCancel(deletingOrder._id);
                        setDeletingOrder(null)
                    }} href="#" class="btn btn-primary">Yes</a>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;