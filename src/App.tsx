import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VMemo from "./v-memo.tsx";
import VSlots from "./v-slots.tsx";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>

      <VSlots>
        <div>default Slot</div>
        <template v-slot:title={{ name }}>{name} Slot</template>
      </VSlots>

      <VMemo />
    </>
  );
}

export default App;
