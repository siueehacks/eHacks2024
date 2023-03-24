import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from "@chakra-ui/react";

export default function ConfirmDeleteModal(props){
    const { isOpen, onClose, deleteEntry, doc } = props;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Delete Registration</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Are you sure you want to delete this registration?
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="ghost" onClick={() => deleteEntry(doc)}>
                        Delete
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}