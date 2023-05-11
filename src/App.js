import GoogleInput from './components/GoogleInput/GoogleInput';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <GoogleInput
        icon="category" //icon from material symbols (optional)
        label="Label text" //label / placeholder
        supportingText="Supporting text" //supporting text (optional)
        cancel={true} //cancel button (optional)
      />
    </div>
  );
}
