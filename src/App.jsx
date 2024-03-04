import { CriptoContextProvider } from "./components/context/cripto-context";
import AppLayout from "./components/layout/AppLayout";

export default function App() {
  return (
    <CriptoContextProvider>
      <AppLayout />
    </CriptoContextProvider>
  );
}
