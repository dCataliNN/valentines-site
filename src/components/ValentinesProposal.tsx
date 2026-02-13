import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Fireworks from "@fireworks-js/react";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

// 29 images for background
const images = [
  "/game-photos/1.avif",
  "/game-photos/2.avif",
  "/game-photos/3.avif",
  "/game-photos/6.avif",
  "/game-photos/7.avif",
  "/game-photos/9.avif",
  "/game-photos/10.avif",
  "/game-photos/12.avif",
  "/game-photos/13.avif",
  "/game-photos/16.avif",
  "/game-photos/17.avif",
  "/game-photos/19.avif",
  "/game-photos/20.avif",
  "/game-photos/21.avif",
  "/game-photos/22.avif",
  "/game-photos/23.avif",
  "/game-photos/24.avif",
  "/game-photos/25.avif",
  "/game-photos/26.avif",
  "/game-photos/27.avif",
  "/game-photos/28.avif",
  "/game-photos/29.avif",
  "/game-photos/30.avif",
  "/game-photos/31.avif",
  "/game-photos/32.avif",
  "/game-photos/33.avif",
  "/game-photos/35.avif",
  "/game-photos/36.avif",
  "/game-photos/37.avif",
];

export default function ValentinesProposal() {
  const [step, setStep] = useState(0);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    // Auto-advance for steps 0 and 1 only (skip step 2 - the letter)
    if (step < 2) {
      const timer = setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [step]);

  useEffect(() => {
    // Start fireworks when step 3 (happy hamster) appears
    if (step === 3) {
      setShowFireworks(true);
    }
  }, [step]);

  const handleContinue = () => {
    setStep(3);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.h2
            key="step-0"
            className={`text-4xl font-semibold mb-4 ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Bravooo iubitaa mea! Ai reusit))
          </motion.h2>
        )}
        {step === 1 && (
          <motion.h2
            key="step-1"
            className={`text-4xl font-semibold mb-4 ${playfairDisplay.className}`}
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Sper sa-ți placă ce am scris 💖
          </motion.h2>
        )}
        {step === 2 && (
          <>
            {/* Image Grid Background - Fixed to viewport */}
            <div className="fixed inset-0 grid grid-cols-6 md:grid-cols-12 opacity-35 pointer-events-none overflow-hidden">
              {[...images, ...images, ...images, ...images, ...images, ...images].map(
                (src, index) => (
                  <div key={index} className="relative aspect-square">
                    <Image
                      src={src}
                      alt={`Memory ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ),
              )}
            </div>

            <motion.div
              key="step-2"
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center px-4 max-w-4xl mx-auto"
            >
              {/* Love Letter */}
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-12 rounded-2xl shadow-2xl border-4 border-purple-200 max-w-3xl z-10">
                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 text-purple-300 text-2xl">😋</div>
                <div className="absolute top-4 right-4 text-purple-300 text-2xl">🤗💖</div>
                <div className="absolute bottom-4 left-4 text-purple-300 text-2xl">💖</div>
                <div className="absolute bottom-4 right-4 text-purple-300 text-2xl">✨</div>

                <div className={`text-gray-800 space-y-6 ${playfairDisplay.className}`}>
                  <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-600 mb-8">
                    Dragostea Mea,
                  </h2>

                  <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    În primul rănd aș dori să te felicit cu aceasta zi minunată de 14 februarie, ziua îndragostiților. Astăzi este o zi specială pentru tine, pentru noi doi. Inima mea este plină de frumusețea, fericirea si gingășia ta..
                  </p>

                  <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    Ești cea mai frumoasă parte din viața mea și niu mi pot imagina nicio zi
                    fără tine. Faptul că ne mai certăm uneori niu înseamna că niu te iubesc sau vreau sa dau în tine, dimpotrivă.. ne iubim atât de mult încât micile neînțelegeri/certuri dor mai tare.. ne certăm pentru că ne pasă la amăndoi, pentru că vrem să fim înțeleși și pentru că suntem destul de sinceri unul cu altul.. important este că, după ce ne revenim.. eu tot în brațele tale vreau să fiu și tot tiu esti, vei fi și rămăi mereu patroana))
                  </p>

                  <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    Pozicile pe care le vezi in spatele mesajului sunt amintirile noastre de 5 zile.. iți dai seama cate albume o sa avem noi in viitor cand vom calatori prin toată lumea.. să stii ca te iubesc enorm si nimic pe lumea asta n-o sa schimbe asta 😋💖💖 tiu esti prințesa, tiu esti dulceața, tiu esti frumusețea, tiu esti patroana 🤭💖
                  </p>

                  <div className="text-2xl md:text-3xl text-center font-bold text-rose-500 my-8">
                    Happy Valentine's Day! 💖
                  </div>

                  <p className="text-right text-xl md:text-2xl mt-8 text-rose-700 italic">
                    Al tău pentru totdeauna,<br />
                    <span className="text-2xl text-rose-700 italic">Cătălin</span>
                  </p>
                </div>
              </div>

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                className="mt-8 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl z-10"
              >
                Continuă 💖
              </button>
            </motion.div>
          </>
        )}
        {step === 3 && (
          <motion.div
            key="step-3"
            className={`text-4xl font-bold mb-4 flex flex-col justify-center items-center ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Iți multuuu pentru tot ce ai facut pentru mini..
            <p className="text-3xl mt-6">Te iubeeeesc 😋💖💖</p>
            <Image
              src="/hamster_jumping.gif"
              alt="Hamster Feliz"
              width={250}
              height={100}
              unoptimized
            />
          </motion.div>
        )}
      </AnimatePresence>

      {showFireworks && (
        <div className="absolute w-full h-full">
          <Fireworks
            options={{
              autoresize: true,
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      )}
    </div>
  );
}
