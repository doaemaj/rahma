import React, { useState, useEffect } from "react";
import data from "../data/99_Names_Of_Allah.json";
import Navbar from "./Navbar";


const Asmaa = () => {
  const [names, setNames] = useState([]);
  const [flippedCards, setFlippedCards] = useState({}); // État pour suivre les cartes retournées
  const [searchQuery, setSearchQuery] = useState(""); // État pour la recherche

  useEffect(() => {
    setNames(data.data); // Charger les données
  }, []);

  // Fonction pour basculer l'état d'une carte (retournée ou non)
  const toggleFlip = (index) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Inverse l'état de la carte
    }));
  };

  // Fonction pour filtrer les noms selon la recherche
  const filteredNames = names.filter((name) => {
    const searchLower = searchQuery.toLowerCase(); // Convertir la recherche en minuscule
    return (
      name.name.includes(searchQuery) || // Recherche par "name" en arabe
      name.transliteration.toLowerCase().includes(searchLower) || // Recherche par "transliteration"
      name.number.toString().includes(searchQuery) // Recherche par "number"
    );
  });

  return (
    <>
    <Navbar></Navbar>
    <div className=" min-h-screen bg-[#F6F4ED]">
      {/* Barre de recherche */}
      <div className="pt-40 px-4 md:px-8 lg:px-12 flex flex-col justify-center items-center ">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Mettre à jour la recherche
          placeholder="Search by Name, Transliteration, or Number..."
          className="w-full md:w-1/2 lg:w-1/3 p-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Texte sous la barre de recherche visible uniquement en desktop */}
        <p className="hidden md:block mt-2 text-gray-600">
          Hover to reveal the name and the meaning
        </p>
      </div>

      {/* Conteneur des cartes avec un padding-top pour compenser la barre */}
      <div className="pt-6 px-4 md:px-8 lg:px-12">
        {/* Message si aucun résultat n'est trouvé */}
        {filteredNames.length === 0 ? (
          <p className="text-center text-gray-500">No results found for "{searchQuery}"</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-7">
            {filteredNames.map((name, index) => (
              <div
                key={index}
                className="group perspective-1000 flex flex-col md:block border rounded-lg overflow-hidden shadow-lg"
                onClick={() => toggleFlip(index)} // Gestion du clic pour les petits écrans
              >
                {/* Mobile: Disposition en rectangle */}
                <div className="flex md:hidden flex-row">
                  {/* Image 1/3 */}
                  <div className="w-1/3 h-auto">
                    <img
                      src={name.image}
                      alt={name.transliteration}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Contenu 2/3 */}
                  <div className="w-2/3 p-4 flex flex-col justify-center bg-[#c7d4dc]">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{name.transliteration}</h3>
                    <p className="text-sm text-gray-600">{name.en.desc}</p>
                  </div>
                </div>

                {/* Desktop: Conteneur avec rotation */}
                <div
                  className={`hidden md:block relative w-full h-64 transform-style-preserve-3d transition-transform duration-500 ${
                    flippedCards[index] ? "rotate-y-180" : ""
                  } lg:group-hover:rotate-y-180`} // Hover sur grands écrans, clic sur petits
                >
                  {/* Face avant (image) */}
                  <div className="absolute w-full h-full backface-hidden">
                    <img
                      src={name.image}
                      alt={name.transliteration}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  {/* Face arrière (transliteration et meaning) */}
                  <div className="absolute w-full h-full bg-[#c7d4dc] bg-opacity-72 text-center flex flex-col items-center justify-center rounded-lg backface-hidden rotate-y-180">
                    <h3 className="text-xl font-bold mb-2">{name.transliteration}</h3>
                    <p className="text-gray-700">{name.en.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
  
};

export default Asmaa;
