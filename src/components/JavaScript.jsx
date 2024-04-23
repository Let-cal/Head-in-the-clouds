import { useEffect, useRef, useState } from "react";

export function useLogic() {
  const [apologies, setApologies] = useState([]);
  const [isButtonclicked, setIsButtonClicked] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(
    new Audio("./src/components/audio/Head-In-The-Clounds.mp4")
  ); // Đường dẫn đến file âm thanh
  const handleAudioChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = volume;
  };
  const handleButtonClick = () => {
    if (isButtonclicked) {
      setApologies([]);
      setIsButtonClicked(false);
      audioRef.current.pause(); // Dừng phát âm thanh
    } else {
      const newApologies = [];
      for (let i = 0; i < 20; i++) {
        newApologies.push({
          content: "Yêu bé yêu của anh <Dương Thị Hoài>",
          left: Math.random() * window.innerWidth,
          top: Math.random() * window.innerHeight,
          speed: 0.05 + Math.random() * 0.1, // Tốc độ di chuyển
          opacity: Math.random(),
        });
      }
      setApologies(newApologies);
      setIsButtonClicked(true);
      audioRef.current.play(); // Phát âm thanh
      audioRef.current.volume = volume; //
    }
  };
  useEffect(() => {
    return () => {
      // Cleanup function
      audioRef.current.pause(); // Dừng phát âm thanh khi component unmount
    };
  }, []);
  useEffect(() => {
    if (isButtonclicked) {
      const animationDuration = 30000; // Thời gian animation (miliseconds)
      const stepDuration = 50; // Thời gian cập nhật vị trí (miliseconds)
      const numSteps = animationDuration / stepDuration;

      let step = 0;
      const interval = setInterval(() => {
        step++;

        setApologies((prevApologies) => {
          return prevApologies.map((apology) => {
            const newX = (apology.left + apology.speed) % window.innerWidth; // Di chuyển theo chiều ngang với tốc độ
            return {
              ...apology,
              left: newX,
            };
          });
        });

        if (step >= numSteps) clearInterval(interval);
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isButtonclicked]);

  return {
    apologies,
    volume,
    handleAudioChange,
    handleButtonClick,
  };
}
