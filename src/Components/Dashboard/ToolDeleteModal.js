import React from 'react';

const ToolDeleteModal = ({ deleteingTool, setDeletingTool, handleToolDelete }) => {
    return (
        <div className='text-black'>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Do you want to delete this item:</h3>
                    <p class="py-4">{deleteingTool.name}</p>
                    <div class="modal-action">
                        <label for="my-modal" class="btn bg-green-600 text-white border border-transparent rounded-lg">No</label>
                        <label onClick={()=>handleToolDelete(deleteingTool)} class="btn bg-red-600 text-white border border-transparent rounded-lg">Yes</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolDeleteModal;