import './App.css';
import { Pets, NavBar, Footer, AddPet } from './ui-components';

function App() {
  const navbarOverrides = {
    "Add Pet": {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        alert("Hello");
      }
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <NavBar width={'100%'} overrides={navbarOverrides}/>
      </header>
      <AddPet />
      <Pets       
        overrideItems={({ item, index }) => ({
          overrides: {
            Button29766907: {
              onClick: () => alert(`${item.id}`),
            },
          },
        })}
      />
      <Footer width={'100%'} />
    </div>
  );
}

export default App;
