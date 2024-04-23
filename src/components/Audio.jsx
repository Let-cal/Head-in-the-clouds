// eslint-disable-next-line react/prop-types
function Input({ volume, handleAudioChange }) {
  return (
    <input
      type="range"
      className="changeVolume"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={handleAudioChange}
    />
  );
}

export default Input;
