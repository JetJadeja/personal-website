import React, { useState, useEffect } from "react";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

function Hero() {
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [arrowOpacity, setArrowOpacity] = useState(1);

  const toggleContactMenu = () => {
    setShowContactMenu(!showContactMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calculate opacity based on scroll position
      // Start fading when scroll is at 10% of window height
      // Completely faded at 30% of window height
      const scrollPosition = window.scrollY;
      const fadeStart = window.innerHeight * 0.1;
      const fadeEnd = window.innerHeight * 0.3;

      if (scrollPosition <= fadeStart) {
        setArrowOpacity(1);
      } else if (scrollPosition >= fadeEnd) {
        setArrowOpacity(0);
      } else {
        // Calculate opacity between 1 and 0
        const opacity =
          1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
        setArrowOpacity(opacity);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shimmerStyles = `
    @keyframes shimmerAnimation {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }

    .shimmer-overlay {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        transparent 0%,
        rgba(255, 255, 255, 0.9) 25%,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(255, 255, 255, 0.9) 75%,
        transparent 100%
      );
      background-size: 200% 100%;
      mix-blend-mode: overlay;
      animation: shimmerAnimation 2s infinite linear;
      z-index: 20;
    }

    @keyframes floatAnimation {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    .floating-arrow {
      position: absolute;
      bottom: 45px;
      left: 50%;
      transform: translateX(-50%);
      animation: floatAnimation 2s ease-in-out infinite;
      color: white;
      cursor: pointer;
      z-index: 30;
      transition: opacity 0.3s ease;
    }
  `;

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{shimmerStyles}</style>
      <section className="w-screen h-screen flex items-center justify-center bg-black relative">
        {/* Navigation bar with higher z-index to ensure it's above the shimmer */}
        <section className="text-white flex justify-between items-center absolute top-0 left-0 right-0 py-8 px-10 z-30">
          <p className="font-[Gunma-Regular] text-l">jet jadeja</p>

          <div className="relative">
            <p
              className="font-[Gunma-Regular] text-l cursor-pointer hover:underline"
              onClick={toggleContactMenu}
            >
              get in touch
            </p>

            {showContactMenu && (
              <div className="font-[Gunma-Regular] absolute right-0 mt-2 w-40 bg-black border border-gray-700 shadow-lg py-2 px-3 rounded-md z-40">
                <a
                  href="mailto:jjadeja@usc.edu"
                  className="flex items-center gap-2 py-2 hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope size={16} />
                  <span>Email</span>
                </a>
                <a
                  href="https://twitter.com/jetjadeja"
                  className="flex items-center gap-2 py-2 hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={16} />
                  <span>Twitter</span>
                </a>
                <a
                  href="https://github.com/jetjadeja"
                  className="flex items-center gap-2 py-2 hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jet-jadeja-2a4023247/"
                  className="flex items-center gap-2 py-2 hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://instagram.com/jetjadeja"
                  className="flex items-center gap-2 py-2 hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={16} />
                  <span>Instagram</span>
                </a>
              </div>
            )}
          </div>
        </section>

        {/* ASCII Art container positioned to not interfere with navigation */}
        <div
          className="relative w-screen flex justify-center items-center"
          style={{ marginTop: "2rem" }}
        >
          <div className="relative">
            <pre
              className="font-mono text-white leading-[1] whitespace-pre overflow-hidden z-10"
              style={{
                fontSize: "clamp(0.1rem, 0.6vw, 1rem)",
                letterSpacing: "0.05em",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {asciiArt}
            </pre>
            <div className="shimmer-overlay absolute inset-0 pointer-events-none"></div>
          </div>
        </div>

        {/* Floating arrow at the bottom */}
        <div
          className="floating-arrow"
          onClick={scrollToNext}
          style={{ opacity: arrowOpacity }}
        >
          <FaChevronDown size={24} />
        </div>
      </section>
    </>
  );
}

export default Hero;

const asciiArt = `

                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                               --===-:                                                                                                                                                                                                                                      
                                                          ::::.::---===+=+=++==--.                                                                                                                                                                                                                          
                                                     :::..      .::--==++++===+=+===+++++*+=                                                                                                                                                                                                           -----
                                                 .=-::.         .:.::-=-=====-=-==============+++****==-:.                                                                                                                                                                                        ::--:-:-:-
                                              ---::::::.      .:.:::-:--=-=----:-:--:---=-=-=--=-====++**++++===.                                                                                                                                                                            ::--:--:-:-----
                                          ::-:::::::::::---:::----::::.:---=---::::::::::::-::-:::::----===+=***#*                                                                                                                                                                       .--:-:-:-:-:-:-::-:
                                   .-:::.:.:.:::::::---=++++*+++=--:.. ..:--==----::..    .::::::...:.::::---=+**##*                                                                                                                                                                 .---:-:-:-:-::-:-:--:--
                              :-::::.:.:.:::---====+=+**#####%#*+=-:::   .:--===--:::..     ..:::::::.:::.::-:--==+*##                                                                                                                                                          :---:-:--::-:::::-::-:-:-:-:
                          :--:-::::::::-:----===+++***++*+*######+=-::.   .:--=====-:::.    .::::-----::..   .:::--==**%*                                                                                                                                            .:::::::-:-:-::-:-::-::-:-:-::-:-::::::
                     :::--------------------====++++++++**###%@%%++--::   .::--====----:::::::-==-=-=+=--::   ...::::--=+*%+                                                                                                                             :::::......::::::::::::::::::::::-::::-:--:-:-:--:-
                .=--------::-:--:--:--:-:------===+++**##%%%%%@@@#+=--::.  ..::--======--:-::-====-=*++=+=--:---:..:.:::--=+*##-                                                                                                                   :::::..:..       .:::::::::::::::::::::::::::::::::::::::
          ::=--=-------::-:-:-:--:--::---:----==++**##%%%%%%%%@@@%#+=--::...:.::----=======+++++===+%*+**=+++++=+-:::....::-=++**#-                                                                                                      .:::.::::::.:.....       .::::::::.::::::::::::::::::::::::::::::::
 :-=-----:-----::-:::::-:::::--:-::---:-:--==++**##%@@@%%%%%@@@@@@#*+=-::::....:::----=++*#*##%%#*#%@**@#%#%%#%###++---:::.::-=++**%=                                                                                               :-:-::.:. .....:.....:.....:.:-:-::::::::.::..:.......:.::::::::::-:::::
----------:-::::::::::::::---:-:---------===+***##%%%%%%%%%@@@@@@@@**=---:::.:...::.:--=+*#@@@%%%%@@%#%@@@@@@@@@@@%##*++=---::-=+****                                                                                    :-==-=-=----::::::.:.::::::::::::::-:---=----:::::::::::::.:.:.:..:..:.:.::::::::::
-------:::::::::::.:::::::::::--------===+++**##%%%%%%%%@@@@@@@@@@ -++==----::::.....:::-+*#@@@@@@@@@@@@@@@@@@@@@@@@@%%%#*+======++++*                                                                            .::---==-------=---:-::::-:::::::---=======+++====----::::::::::::::.:::::::::::::-::-:-:-
=------:-:-:::-:::::::----:-------=-===+++**#####%#%%@@@@@@@@@#     +*+=====---:::..   ::-=+*#@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%#*+=----=+*+                                                                     :::::::-:------:-:-------:----=======++++******+++++===-=---=-------:--:--:-------------------=
=-=---:--:-:--:-:------:-------=-====++***#####%%%@@@@@@@@@-         **++++===--::::.  ..:--++#@@%    :@@@@@@@@@@@@@@@@@@@@@@#*+=-----=**                                                                :::.:.:.:--:--::::::-::-----===++****#***#*#####***+++=+====================-===-=====-======+==+==
--------:--------=--==========+=+++****#####%%%@@@@@@@@@@             =*##**+++=---:::.:::-==++#%@      @@@@@@@@@@@@@@@@@@@@@@%#*+=:::-=*%                                                          ::::-::...:::-:--::....::-:-:--==+***###%#%####%%%%%##**++++++=+=+++++++++++++++++++++=++=++++++++++++++
-------------=====++=++++*+******#####%#%%%@@@@@@@@@@@@.                 *%%##**+==----:--======+*%:    @@@@@@@@@+@@@@@@@@@@@@@@%#*+=-:-=+#-                                              .--:-:::::::::::::::::---::... .:::::-:-==***#%%%%###%%##%@@@%%##******+***********************************+*+**+*
-=----=-=====+=++****#*########%%%%%%%@%@%@@@@@@@@@@@-                       #%#*+++=====+====---=+*#=   @@@@@@@% .@@@@@@@@@@@@@@@%**==:-=*#-                        :::....:::.:..:::::::::::. ..:.:::------:-:-::::.:..:.:::::--=+*#%%%%%%%@@%@%%@@@@%%###%####%#%#%%%%#%%%%#%########*#**#*#*********+*++
=-==-=-====+++***#####%%%%%%%@%@%%@@@@@@@@@@@@@@@@@*                             +*#*****+++==--:--==+#% @@@@@@@#   @@@@@@@@@@@@@@=@#*+=-==+#                   -===-:.    .:-::      ...:::......::---=++*==--::::.:..::.::::---=++#%%@@@@@@@@@@@@@@@@%%%%#%%%@@@@@@@%@@@%%%%%%%%%%%%######*#*#*#**********
-=-======+++****##%%%%%%%@%@@@@@@@@@@@@@@@@@@@@@@#                                     *%%#*+=---:::-==+#%@@@@@@=   @@@@@@@@@@@@@@= =%#*=---+#-          :---:-::==+==----=+****++=======++-:::-::-=****#**+=:::...:.:::::::----==+*#%@@@@@@@@@@@@@@@@@%%%%%%%@%@@@@@@@%@%@@@%@%%%%%%#%%################*#**
-==-====+=++**###%%%%%@@@@@@@%@@@@@@@@@@@@@@@@@#                                          -##*+=-------==+*#@@@@     @%@@@@@@@@@@@@. :@#*+---=*=      =-:::..::-=*######%%@@@@@%%%@%%%%####=-------+*%##**=-::.. :::::::::---===+++#%@@@@@@@@@@@@@@@@@@@@@%%%@%%%%%%%%%%%%%%%%%#%%#%#%#%#%##################
=======+=+****###%%%%@%@%%@%@@@@@@@@@@@@@@@@@=                                               +**++++=--====+*#%@      @%%%@@@@@@@@@*   @%#*=--++-     *==-==+*#@@@@@@@@@@@@#+=#%@@@@@@@@@@@#+==+*++#%%@#+-::.:::--=-----:-===++++*#@@@@@@@@@@@@@@@%#%#####%%%%%%%######*############%##%#%#%%%#%%%#%%%%%%#%#
=======++***####%%%%%%%%@%@@@@@@@@@@@@@@@@@                                                    -####**+=======**%      @%#%@@@%@@@@#    *@%*+=-=*=     =@%%@@@@@@@+                      %@@%#**#%%%%%*=--::::--=+*++=====+++**#%%@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@%@%%%%@%%%%%%%@%%%%%%%%%%%%%%%%%%%%%%%%%%
====+=+++***#####%%%%%%%%%%%@%@@@@@@@@@@+                                                         ####*%#*++=--==*#    @%%%%@@@%%@@@      =%%#*++                                          .@@%@@@@%+=--::::-==**#%##**+****##@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%
+++++++****#####%##%%%%%%%@%@%@@@@@@@*                                                              *%%##%#****+==*%   @%##%%@%%%#@%                                                         .@@@+=--------=+**#%%@@@%@%@@@@@@@@@@@@@@@@@@@@@@@@%            :#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
++*++****##*#####%%#%%%%%@%@%@@@@@=                                                                  @@%@%%%%=-::-=*+  @%%*#%@@%%%%@-                                                        %-==+=++=--==+*##@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                     -#@@@@@@@@@@@@@@@@@@@@@@@@@%*=:         
*******#*#*#####%#%%%%%@%@@@@@=                                                                     #@%#%%%@%*=-::=*+  @@%##%%@@%%%%#                                                      :--::--==++++*#%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                                                               
*****##*########%%%%%@@@@@%=                                                                        #@%#%%   -*==-+#   .@@%#@% @@%%@%                                                    -+==::..:-=*###%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                                 
#*##*########%%%%%@%@@@@*                                                                            -%%*       :=:     +@@@%@-  @@@%=                                                 -==+==--:--+#%@@@@@%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@=                                                                   
#######%#%%%%%@%@@@@@#                                                                                                    %@@@.                                                      -----==+==++#%@@@@%#*#*##%%@@@@@@%%%%%@@@@@@@@@%                                                                       
###%#%%%%%%%@@@@@@%                                                                                                                                                                 --------+**#%@@@@@@@@%%#%##%#%%@@@@%###%@@@@%.                                                                          
%%%%@%%%@@@@@@@@=                                                                                                                                                                   --:--=+*#*%@@@@@%@@@@@+@@@@@@@@@@@@@%#*+.                                                                               
%@%@@@@@@@@@@+                                                                                                                                                                      =-==+*#%*@@@#*#%@@@@@  @###@@@@@                                                                                        
@@@@@@@@@@*                                                                                                                                                                          =*#%@@@@@@+++*@@@@:  -%+*#%@@@@                                                                                        
@@@@@@%-                                                                                                                                                                              --=+#@@@#+=*#%@@:   =*+*#@@@@                                                                                         
@@@+                                                                                                                                                                                  -==*%@@@++=*%@@+     +++#%@@                                                                                          
                                                                                                                                                                                     :--=*#@@%+=*#@@@      #*#%@@@                                                                                          
                                                                                                                                                                                      ---+*%@@+=+*%@*      ##%@@@@                                                                                          
                                                                                                                                                                                      --:=#%@@===*%@:      ++*#%@+                                                                                          
                                                                                                                                                                                       :-=*%@@==+*#@       ===*#@#                                                                                          
                                                                                                                                                                                        :=#%@#-=+#@@        -=#@@=                                                                                          
                                                                                                                                                                                        =*#@@ =+*%@@        +#@@:                                                                                           
                                                                                                                                                                                        *%%@*  %@@@                                                                                                         
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                            


  `;
