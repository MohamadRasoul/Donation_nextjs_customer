import User from '@/layouts/User';
import { useState } from 'react';
import Modal from 'rsuite/Modal';
import { ButtonToolbar, Button, Placeholder } from 'rsuite';
const Campaigns = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {/* <!-- ====== Banner Section Start --> */}
            <div className='relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]'>
                <div className='container'>
                    <div className='flex flex-wrap items-center -mx-4'>
                        <div className='w-full px-4'>
                            <div className='text-center'>
                                <h1 className='text-4xl font-semibold text-white'>
                                    Campaigns
                                </h1>
                            </div>
                            <div className='modal-container'>
                                <ButtonToolbar>
                                    <Button onClick={handleOpen}> Open</Button>
                                </ButtonToolbar>

                                <Modal open={open} onClose={handleClose}>
                                    <Modal.Header>
                                        <Modal.Title>Modal Title</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Placeholder />
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            onClick={handleClose}
                                            appearance='primary'
                                        >
                                            Ok
                                        </Button>
                                        <Button
                                            onClick={handleClose}
                                            appearance='subtle'
                                        >
                                            Cancel
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ====== Banner Section End --> */}
        </>
    );
};

export default Campaigns;

Campaigns.layout = User;
