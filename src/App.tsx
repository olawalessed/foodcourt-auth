import { useReducer, useState } from "react";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import MainForm from "./components/main/MainForm";
import SettingsMenu from "./components/settings/SettingsMenu";
import ModalContainer from "./components/re-usable/ModalContainer";
import SettingsContent from "./components/settings/SettingsContent";
import useCheckSettings from "./hooks/useCheckSettings";

function App() {
  const [openModal, setOpenModal] = useState(false);

  // hook
  useCheckSettings()

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
        <SettingsMenu/>
        <MainForm />
        <ModalContainer>
          <SettingsContent />
        </ModalContainer>
      </MainLayout>
    </>
  );
}

export default App;
