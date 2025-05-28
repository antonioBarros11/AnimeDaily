import { useEffect, useState } from "react";
import Dropdown from "../../components/form/Dropdown";
import { getAnimeByFilters, getAnimeTitle } from "../../service/animeService";
import Card from "../../components/card/Card";
import CardSkeleton from "../../components/card/CardSkeleton";
import Pagination from "../../components/pagination/Pagination";

export default function SearchAnime() {
  const [searchName, setsearchName] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [selectedEmission, setSelectedEmission] = useState("");
  const [filteredAnimes, setFilteredAnimes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const pageSize = 30;

  const getAnimeFilters = async () => {
    setIsLoading(true);
    const filters = {
      genero: selectedGender,
      anio: selectedYear,
      temporada: selectedSeason,
      formato: selectedFormat,
      estado: selectedEmission,
    };
    const result = await getAnimeByFilters(filters, currentPage, pageSize);
    if (!result.error) {
      setFilteredAnimes(result.content);
      setTotalPages(result.totalPages || 0);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAnimeFilters();
  }, [currentPage]);

  useEffect(() => {
    if (currentPage > 0) {
      setCurrentPage(0);
    } else {
      getAnimeByFilters();
    }
  }, [
    selectedGender,
    selectedYear,
    selectedSeason,
    selectedFormat,
    selectedEmission,
  ]);

  useEffect(() => {
    const getTitle = async () => {
      setIsLoading(true);
      if (searchName.trim() !== "") {
        const result = await getAnimeTitle(searchName);
        if (!result.error) {
          setFilteredAnimes(result.content);
          setTotalPages(result.totalPages || 0);
        }
        setFilteredAnimes(result.content);
        console.log("Título encontrado:", result.content);
      } else {
        setFilteredAnimes([]);
      }
      setIsLoading(false);
    };

    getTitle();
  }, [searchName]);

  const genderList = [
    "Action",
    "Adventure",
    "Boys Love",
    "Comedy",
    "Drama",
    "Fantasy",
    "Gourmet",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Slice of Life",
    "Sports",
    "Supernatural",
    "Suspense",
    "Ecchi",
    "Erotica",
    "Hentai",
    "Adult Cast",
    "Anthropomorphic",
    "CGDCT",
    "Childcare",
    "Combat Sports",
    "Crossdressing",
    "Delinquents",
    "Detective",
    "Educational",
    "Gag Humor",
    "Gore",
    "Harem",
    "High Stakes Game",
    "Historical",
    "Idols (Male)",
    "Isekai",
    "Iyashikei",
    "Love Polygon",
    "Magical Sex Shift",
    "Mahou Shoujo",
    "Martial Arts",
    "Mecha",
    "Medical",
    "Military",
    "Music",
    "Mythology",
    "Organized Crime",
    "Otaku Culture",
    "Parody",
    "Performing Arts",
    "Pets",
    "Psychological",
    "Racing",
    "Reincarnation",
    "Reverse Harem",
    "Romantic Subtext",
    "Samurai",
    "School",
    "Showbiz",
    "Space",
    "Strategy Game",
    "Super Power",
    "Survival",
    "Team Sports",
    "Time Travel",
    "Vampire",
    "Video Game",
    "Visual Arts",
    "Workplace",
  ];

  const formatList = ["TV", "Movie", "OVA", "ONA", "Special", "Music"];
  const seasonList = ["Winter", "Spring", "Summer", "Fall"];
  const emissionStatus = [
    "Currently Airing",
    "Finished Airing",
    "Not yet aired",
  ];

  const getYear = () => {
    const actualYear = new Date().getFullYear();
    const years = [];
    for (let i = 2001; i <= actualYear; i++) {
      years.push(i);
    }
    return years.reverse();
  };
  const yearList = getYear();
  return (
    <div className="flex flex-col items-center gap-6 text-white">
      <div className="flex flex-wrap justify-center gap-4 items-end w-full max-w-6xl">
        <div className="w-44">
          <label className="block mb-1 font-medium text-sm" htmlFor="search">
            Search
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
              </svg>
            </span>
            <input
              id="search"
              type="text"
              placeholder="Search"
              value={searchName}
              onChange={(e) => setsearchName(e.target.value)}
              className="w-full pl-10 pr-3 py-2 text-sm text-white bg-[#1e1f26] border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <Dropdown
          title="Genero"
          options={genderList}
          selectedOption={selectedGender}
          handleSelectedOption={setSelectedGender}
        />
        <Dropdown
          title="Años"
          options={yearList}
          selectedOption={selectedYear}
          handleSelectedOption={setSelectedYear}
        />
        <Dropdown
          title="Temporada"
          options={seasonList}
          selectedOption={selectedSeason}
          handleSelectedOption={setSelectedSeason}
        />
        <Dropdown
          title="Formato"
          options={formatList}
          selectedOption={selectedFormat}
          handleSelectedOption={setSelectedFormat}
        />
        <Dropdown
          title="Emisión"
          options={emissionStatus}
          selectedOption={selectedEmission}
          handleSelectedOption={setSelectedEmission}
        />
      </div>
      <div className="flex flex-col min-h-screen items-center px-4">
        <div className="flex flex-wrap gap-10 justify-start w-full max-w-6xl mt-4 flex-grow">
          {isLoading ? (
            Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-[180px]">
                <CardSkeleton />
              </div>
            ))
          ) : filteredAnimes.length > 0 ? (
            filteredAnimes.map((anime) => (
              <Card
                key={anime.id}
                id={anime.id}
                image={anime.imagenUrl}
                title={anime.titulo}
              />
            ))
          ) : (
            <p className="text-white font-bold text-2xl mt-20 flex justify-center">
              No se encontraron animes
            </p>
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(Math.max(0, page))}
        />
      </div>
    </div>
  );
}
