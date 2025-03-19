import React, { useState } from "react";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  const [showContactMenu, setShowContactMenu] = useState(false);

  const toggleContactMenu = () => {
    setShowContactMenu(!showContactMenu);
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center bg-black relative">
      <section className="text-white flex justify-between items-center absolute top-0 left-0 right-0 py-8 px-10">
        <p className="font-[Gunma-Regular] text-l">jet jadeja</p>

        <div className="relative">
          <p
            className="font-[Gunma-Regular] text-l cursor-pointer hover:underline"
            onClick={toggleContactMenu}
          >
            get in touch
          </p>

          {showContactMenu && (
            <div className="font-[Gunma-Regular] absolute right-0 mt-2 w-40 bg-black border border-gray-700 shadow-lg py-2 px-3 rounded-md z-10">
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
      <pre
        // Tailwind classes for monospace, color, spacing, etc.
        // style inlined for the dynamic font-size & letter-spacing
        className="font-mono text-white leading-[1] whitespace-pre w-screen overflow-hidden"
        style={{
          // Dynamically scale the font size based on viewport width
          // clamp(min, preferred, max) ensures it doesn't get too tiny or too huge
          fontSize: "clamp(0.1rem, 0.6vw, 1rem)",
          // Adjust letterSpacing if it's "smushed" or "stretched" horizontally
          letterSpacing: "0.05em",
          // Fill the width of the screen
          width: "100vw",
          // Ensure the art is properly centered
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {asciiArt}
      </pre>
    </section>
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
