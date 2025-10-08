import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { urlConfig } from "../../config";
import { Search, Filter, Tag, Layers } from "lucide-react"; // clean icons

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [ageRange, setAgeRange] = useState(6);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = ["Living", "Bedroom", "Bathroom", "Kitchen", "Office"];
  const conditions = ["New", "Like New", "Older"];
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${urlConfig.backendUrl}/api/gifts`);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.log("Fetch error:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = async () => {
    const baseUrl = `${urlConfig.backendUrl}/api/search?`;
    const queryParams = new URLSearchParams({
      name: searchQuery,
      age_years: ageRange,
      category: document.getElementById("categorySelect").value,
      condition: document.getElementById("conditionSelect").value,
    }).toString();

    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}${queryParams}`);
      if (!response.ok) throw new Error("Search failed");
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Failed to fetch search results:", error);
    } finally {
      setLoading(false);
    }
  };

  const goToDetailsPage = (productId) => navigate(`/app/product/${productId}`);

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="row">
        {/* Sidebar Filters */}
        <div className="col-lg-3 col-md-4 mb-4">
          <div className="card shadow-sm border-0 p-3 sticky-top">
            <h5 className="mb-3 d-flex align-items-center">
              <Filter className="me-2 text-primary" size={20} /> Filters
            </h5>

            <label className="fw-semibold mt-2">
              <Layers className="me-1" size={16} /> Category
            </label>
            <select id="categorySelect" className="form-select mb-3">
              <option value="">All</option>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <label className="fw-semibold">
              <Tag className="me-1" size={16} /> Condition
            </label>
            <select id="conditionSelect" className="form-select mb-3">
              <option value="">All</option>
              {conditions.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <label className="fw-semibold">Less than {ageRange} years</label>
            <input
              type="range"
              className="form-range"
              min="1"
              max="10"
              value={ageRange}
              onChange={(e) => setAgeRange(e.target.value)}
            />

            <div className="d-grid mt-3">
              <button className="btn btn-primary" onClick={handleSearch}>
                <Search size={16} className="me-1" />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="col-lg-9 col-md-8">
          <div className="d-flex mb-3 align-items-center">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search for items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-primary" onClick={handleSearch}>
              <Search size={18} />
            </button>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status" />
              <p className="mt-2 text-muted">Searching...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="row">
              {searchResults.map((product) => (
                <div key={product.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-img-top"
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        borderTopLeftRadius: "0.5rem",
                        borderTopRightRadius: "0.5rem",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{product.name}</h5>
                      <p
                        className="card-text text-muted"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {product.description?.slice(0, 80)}...
                      </p>
                    </div>
                    <div className="card-footer bg-white border-0 text-center">
                      <button
                        onClick={() => goToDetailsPage(product.id)}
                        className="btn btn-primary"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-info text-center mt-5">
              No products found. Try adjusting your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
