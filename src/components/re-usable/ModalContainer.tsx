// import { initialState, reducer } from "../../store/modalReducer";
import React from "react";
// import { CLOSE_MODAL } from "../../store/modalConstants";
import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";

interface ModalContainerProps {
  openModal: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
};
export default function ModalContainer({
  openModal,
  handleCloseModal,
  children,
}: ModalContainerProps) {
  return (
    <>
      <Modal
        isOpen={openModal}
        onClose={handleCloseModal}
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
            <div className=" p-10 rounded-3xl bg-white">{children}</div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
