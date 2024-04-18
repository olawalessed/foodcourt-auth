import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import MainForm from "./components/main/MainForm";
import ModalContainer from "./components/re-usable/ModalContainer";
import SettingsContent from "./components/settings/SettingsContent";
import useCheckSettings from "./hooks/useCheckSettings";

function App() {
  useCheckSettings();

  // Disable console log in browser
  if (process.env.NODE_ENV === "production") {
    console.log({});
  }

  return (
    <>
      <MainLayout>
        <MainForm />
        <ModalContainer>
          <SettingsContent />
        </ModalContainer>
      </MainLayout>
    </>
  );
}

export default App;
