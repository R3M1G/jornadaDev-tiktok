
import './App.css';
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
    <Video 
      likes={111}
      messages={222}
      shares={333}
      name="paulo"
      description="Brecker o goleiro"
      music="Epic Music - Epic Band"
      url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"

     />
    <Video 
      likes={444}
      messages={555}
      shares={666}
      name="Pedro"
      description="Bird olhando para a camera"
      music="Clap your M* Hands"
      url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
     />
    
      </div>
    </div>
  );
}

export default App;
