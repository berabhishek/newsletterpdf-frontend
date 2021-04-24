import logo from './logo.svg';
import './App.css';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import NewsLetter from './components/NewsLetter';
function App() {
  return (
    <div className="App">
        <PDFDownloadLink document={<NewsLetter />} fileName="newsletter.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
      <PDFViewer>
          <NewsLetter />
      </PDFViewer>
    </div>
  );
}

export default App;
