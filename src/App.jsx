import "./styles/style.scss"
import { ContainerFrame } from "./components/ContainerFrame"
import { BrowserRouter, Routes, Route } from "react-router"
import { DoorPortal } from "./pages/DoorPortal"
import { Cursor } from "./components/Cursor"
import { Starting } from "./components/Starting"
import {Test} from "./pages/Test"
import { Sky } from "./pages/Sky"
import { Dream } from "./pages/Dream"
import { Yellow } from "./pages/Yellow"
import { Blue } from "./pages/Blue"
import { End } from "./pages/End"
import { Github } from "./components/Github"

export function App() {

    return (
        <>
            <Cursor />
            <ContainerFrame>
                <Routes>
                    <Route path="/" element={<DoorPortal />} />
                    <Route path="/sky" element={<Sky />} />
                    <Route path="/dream" element={<Dream />} />
                    <Route path="/yellow" element={<Yellow />} />
                    <Route path="/blue" element={<Blue />} />
                    <Route path="/end" element={<End />} />
                    <Route path="/Test" element={<Test />} />
                </Routes>
            </ContainerFrame>
            <Starting />
            <Github />
        </>
    )
}