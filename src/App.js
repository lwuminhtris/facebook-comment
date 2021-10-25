import { useState } from 'react';
import './App.css';


function App() {
  const [val, setVal] = useState('');

  const handleCsv = () => {
    const post_id = val.slice(val.lastIndexOf('/') + 1,);
    const url = `https://wkrix-comment-collector.herokuapp.com/${post_id}/csv`;
    window.open(url).focus();
  }

  const handleJson = async () => {
    const post_id = val.slice(val.lastIndexOf('/') + 1,);
    const url = `https://wkrix-comment-collector.herokuapp.com/${post_id}/json`;
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        let blob = new Blob([JSON.stringify(data)], { type: 'text/plain' }),
          anchor = document.createElement('a');

        anchor.download = "comments.txt";
        anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
        anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
        anchor.click();
      })
  }

  return (
    <div className="App">
      <div className="App-body">
        <link data-require="bootstrap-css" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css" />
        <div style={{
          fontFamily: 'monospace',
          color: 'white',
          width: 'auto',
          whiteSpace: 'pre',
          backgroundColor: '#282c34',
          fontSize: 14,
          marginTop: -250,
          marginBottom: 50,
        }}>
          <p> ___ ___  __  __ __  __ ___ _  _ _____    ___ ___  _    _    ___ ___ _____ ___  ___</p>
          <p>/ __/ _ \|  \/  |  \/  | __| \| |_   _|  / __/ _ \| |  | |  | __/ __|_   _/ _ \| _ \</p>
          <p>| (_| (_) | |\/| | |\/| | _|| .` | | |   | (_| (_) | |__| |__| _| (__  | || (_) |   /</p>
          <p>\___\___/|_|  |_|_|  |_|___|_|\_| |_|    \___\___/|____|____|___\___| |_| \___/|_|_\</p>

          <p>LƯU Ý: Tool chỉ hoạt động với <b style={{ color: 'red' }}>public post</b> (chẳng hạn như https://www.facebook.com/weibovietnam/posts/4862365597146758)</p>
          developed by @_lmtri with ❤️
        </div>
        <div className="input-bar">
          <div className="input-bar-item width100">
            <input className="form-control width100" onChange={(e) => setVal(e.target.value)} />
            <button
              className="btn btn-info"
              style={{
                marginLeft: '-49.5rem',
                top: -1,
              }}
              onClick={handleCsv}
            >
              Tải file excel
            </button>
            <button
              className="btn btn-info"
              style={{
                // marginLeft: '-10rem',
                top: -1,
              }}
              onClick={handleJson}
            >
              Tải file json
            </button>
          </div>
        </div >

      </div >
    </div >
  );
}

export default App;
