import { useSearchParams, NavLink } from "react-router-dom";

// Add all your site pages/content here for search matching
const SITE_CONTENT = [
  { title: "Home", path: "/", keywords: ["home", "namdev", "manpower", "welcome", "india"] },
  { title: "About Us", path: "/about", keywords: ["about", "who we are", "iso", "certified", "history", "namdev associates", "vision", "mission"] },
  { title: "Services", path: "/services", keywords: ["services", "manpower", "facility", "housekeeping", "security", "staffing", "outsourcing", "workforce"] },
  { title: "Compliance", path: "/compliance", keywords: ["compliance", "pf", "esic", "statutory", "labour law", "provident fund", "legal"] },
  { title: "Clients", path: "/clients", keywords: ["clients", "government", "corporate", "partners", "contracts"] },
  { title: "Team", path: "/team", keywords: ["team", "leadership", "rohit namdev", "tarun parihar", "garvesh", "sonali", "sweta", "hr", "staff"] },
  { title: "Tenders", path: "/tenders", keywords: ["tenders", "bid", "government tender", "contract", "procurement"] },
  { title: "Contact", path: "/contact", keywords: ["contact", "helpline", "phone", "email", "address", "reach us", "lucknow"] },
];

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = query.trim()
    ? SITE_CONTENT.filter(({ title, keywords }) => {
      const q = query.toLowerCase();
      return (
        title.toLowerCase().includes(q) ||
        keywords.some((k) => k.includes(q))
      );
    })
    : [];

  return (
    <div className="pt-36 md:pt-44 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

        <h1 className="text-3xl font-bold text-blue-900 mb-2">Search Results</h1>
        <p className="text-gray-500 mb-8 text-sm">
          {query ? (
            <>
              Showing results for <span className="font-semibold text-gray-800">"{query}"</span>
              {" — "}
              {results.length} {results.length === 1 ? "result" : "results"} found
            </>
          ) : (
            "Enter a search term to find pages."
          )}
        </p>

        {results.length > 0 ? (
          <div className="flex flex-col gap-4">
            {results.map((result, i) => (
              <NavLink
                key={i}
                to={result.path}
                className="bg-white border border-gray-200 rounded-xl px-6 py-5 hover:border-blue-300 hover:shadow-md transition block group"
              >
                <h2 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition mb-1">
                  {result.title}
                </h2>
                <p className="text-sm text-gray-400">{window.location.origin}{result.path}</p>
              </NavLink>
            ))}
          </div>
        ) : query ? (
          <div className="bg-white border border-gray-200 rounded-xl px-6 py-10 text-center text-gray-500">
            <p className="text-lg font-medium mb-2">No results found</p>
            <p className="text-sm">Try searching for "services", "compliance", "tenders", or "contact".</p>
          </div>
        ) : null}

      </div>
    </div>
  );
}