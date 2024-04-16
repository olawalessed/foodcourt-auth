import { useReducer, useState } from "react";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import MainForm from "./components/main/MainForm";
import SettingsMenu from "./components/settings/SettingsMenu";
import ModalContainer from "./components/re-usable/ModalContainer";
import SettingsContent from "./components/settings/SettingsContent";

function App() {
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    console.log("Open modal");
    setOpenModal(true);
  }

  function handleCloseModal() {
    console.log("Close modal");
    setOpenModal(false);
  }

  console.log(openModal);

  return (
    <>
      <MainLayout>
        <SettingsMenu openModal={openModal} handleOpenModal={handleOpenModal} />
        <MainForm />
        <ModalContainer
          openModal={openModal}
          handleCloseModal={handleCloseModal}
        >
          <SettingsContent />
        </ModalContainer>
      </MainLayout>
    </>
  );
}

export default App;
