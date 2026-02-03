import { useState } from "react";

interface Position {
  top: string;
  left: string;
}

const App = () => {
  const [noButtonPosition, setNoButtonPosition] = useState<Position | null>(
    null,
  );
  const [yesClicked, setYesClicked] = useState<boolean>(false);
  const [noClickCount, setNoClickCount] = useState<number>(0);

  const handleNoHover = (): void => {
    // Generate random positions
    const randomTop = Math.random() * 80 + 10; // 10% to 90%
    const randomLeft = Math.random() * 80 + 10; // 10% to 90%

    setNoButtonPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });

    setNoClickCount((prev) => prev + 1);
  };

  const handleYesClick = (): void => {
    setYesClicked(true);
  };

  const getNoButtonText = (): string => {
    if (noClickCount === 0) return "No";
    if (noClickCount === 1) return "Are you sure?";
    if (noClickCount === 2) return "Really?";
    if (noClickCount === 3) return "Think again!";
    if (noClickCount === 4) return "Don't be shy!";
    return "Nope!";
  };

  if (yesClicked) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-pink-200 via-red-200 to-pink-300">
        <div className="text-center space-y-6 animate-bounce">
          <div className="text-8xl">💕</div>
          <h1 className="text-6xl font-bold text-red-600">Yay! 🎉</h1>
          <p className="text-3xl text-pink-700 font-semibold">
            I knew you'd say yes!
          </p>
          <div className="flex gap-4 text-5xl justify-center">
            <span>❤️</span>
            <span>💖</span>
            <span>💝</span>
            <span>💗</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col justify-center items-center h-screen bg-gradient-to-br from-pink-100 via-red-100 to-pink-200 overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl animate-pulse">💕</div>
        <div className="absolute top-20 right-20 text-3xl animate-pulse delay-100">
          💖
        </div>
        <div className="absolute bottom-20 left-20 text-5xl animate-pulse delay-200">
          ❤️
        </div>
        <div className="absolute bottom-10 right-10 text-4xl animate-pulse delay-300">
          💗
        </div>
        <div className="absolute top-1/2 left-10 text-3xl animate-pulse delay-150">
          💝
        </div>
        <div className="absolute top-1/3 right-10 text-4xl animate-pulse delay-250">
          💘
        </div>
      </div>

      {/* Main content */}
      <div className="text-center space-y-8 z-10 px-4">
        <div className="text-8xl mb-4 animate-bounce">💌</div>
        <h1 className="text-5xl md:text-7xl font-bold text-red-600 mb-4">
          Will You Be My Valentine?
        </h1>
        <p className="text-2xl text-pink-700 font-semibold mb-8">
          Please say yes! 🥺
        </p>

        {/* Buttons */}
        <div className="flex gap-6 justify-center items-center flex-wrap">
          <button
            onClick={handleYesClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-2xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
          >
            Yes! 💕
          </button>

          <button
            onMouseEnter={handleNoHover}
            onClick={handleNoHover}
            className={`bg-pink-400 hover:bg-pink-500 text-white font-bold text-2xl px-12 py-6 rounded-full shadow-lg transition-none ${
              noButtonPosition ? "absolute" : ""
            }`}
            style={
              noButtonPosition
                ? {
                    top: noButtonPosition.top,
                    left: noButtonPosition.left,
                    transform: "translate(-50%, -50%)",
                  }
                : {}
            }
          >
            {getNoButtonText()}
          </button>
        </div>

        {noClickCount > 0 && (
          <p className="text-lg text-pink-600 mt-6 animate-pulse">
            {noClickCount > 3
              ? "You can't escape! 😄"
              : "The button is running away! 🏃‍♂️"}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
