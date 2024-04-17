// import { initialState, reducer } from "../../store/modalReducer";
import React from "react";
// import { CLOSE_MODAL } from "../../store/modalConstants";
import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useModalStore } from "../../store/modalStore";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface ModalContainerProps {
  children: React.ReactNode;
};
export default function ModalContainer({
  children,
}: ModalContainerProps) {

  const isModalOpen = useModalStore(m => m.isModalOpen)
  const closeModal = useModalStore(c => c.closeModal)

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        blockScrollOnMount={true}
        isCentered
        size={"xl"}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(2px) hue-rotate(90deg)"
          opacity="20%"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent bg={'transparent'} shadow={'none'}>
          <ModalBody padding={0}>
            <div className=" p-10 rounded-3xl bg-white">
            <div className="flex justify-end">
            <button className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer" onClick={closeModal}>
            <XMarkIcon className="w-7 h-7" />
            </button>
        </div>
              {children}</div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
