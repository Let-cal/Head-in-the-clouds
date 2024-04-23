import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "./components/Audio.jsx";
import { useLogic } from "./components/JavaScript.jsx";
function App() {
  const { apologies, volume, handleAudioChange, handleButtonClick } =
    useLogic();

  return (
    <div className="root w-full h-screen bg-gradient-to-br from-yellow-600 via-red-500 to-blue-300">
      <div className="navigation">
        <div className="buttonAudio flex flex-col w-48 h-14">
          <button
            className="button w-48 h-14 flex justify-center items-center py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 text-white font-bold"
            onClick={handleButtonClick}
          >
            :3 1 chút ngẫu hứng yêu em
          </button>
          <Input volume={volume} handleAudioChange={handleAudioChange} />
        </div>
      </div>
      <div className="py-2 px-4 rounded flex flex-col gap-11">
        {apologies.map((apology, index) => (
          <p
            className="relative  bg-white rounded-full py-2 px-4 shadow-md"
            key={index}
            style={{
              position: "absolute",
              left: apology.left,
              top: apology.top,
              opacity: apology.opacity,
              transform: `scale(${apology.scale})`,
              transition: "opacity 2s, transform 5s",
            }}
          >
            <FontAwesomeIcon icon={faCloud} className="text-blue-400" />
            <div className="relative z-10">{apology.content}</div>
            <span className="absolute h-3 w-6 bg-white rounded-full left-1/4 -bottom-1"></span>
            <span className="absolute h-5 w-8 bg-white rounded-full left-1/2 -bottom-1/2"></span>
            <span className="absolute h-4 w-7 bg-white rounded-full left-3/4 -bottom-1"></span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
