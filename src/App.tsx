import { Header } from './layout/header/Header';
import { SidebarLeft } from './layout/sidebars/left/SidebarLeft';
import { SidebarRight } from './layout/sidebars/right/SidebarRight';

function App() {
  return (
    <div className="App">
      <Header />
      <SidebarLeft />
      <SidebarRight />
    </div>
  );
}

export default App;
