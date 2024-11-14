import { useLoaderData } from "react-router-dom";

const CatagoryNews = () => {
    const { data } = useLoaderData();

    return (
        <div style={{ padding: "20px" }}>
            
            <div style={{ display: "grid", gap: "20px" }}>
                {data.map((news) => (
                    <div key={news._id} style={{
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        padding: "20px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#fff",
                        maxWidth: "600px",
                        margin: "0 auto"
                    }}>
                        {/* Header Section */}
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                           
                            <div>
                                <h3 style={{ fontSize: "1em", margin: "0", fontWeight: "bold" }}>Awlad Hossain</h3>
                                <p style={{ margin: "0", color: "#aaa", fontSize: "0.8em" }}>2022-08-21</p>
                            </div>
                            <div style={{ marginLeft: "auto", color: "#aaa", fontSize: "1.2em" }}>
                                <i className="fa fa-share-alt"></i>
                            </div>
                        </div>

                        {/* Title */}
                        <h2 style={{
                            fontSize: "1.2em",
                            fontWeight: "bold",
                            color: "#333",
                            marginBottom: "10px"
                        }}>{news.title}</h2>

                        {/* Image */}
                        <img src={news.thumbnail_url} alt={news.title} style={{
                            width: "100%",
                            borderRadius: "10px",
                            marginBottom: "15px",
                            height: "620px"
                        }} />

                        {/* Description */}
                        <p style={{ fontSize: "0.9em", color: "#666", marginBottom: "10px" }}>
                            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Ukraine, etc.<br />
                            {news.description ? news.description.slice(0, 100) : "No description available"}... <span style={{ color: "red" }}>Read More</span>
                        </p>

                        {/* Footer Section */}
                        <div style={{ display: "flex", alignItems: "center", color: "#ff9800" }}>
                            <span style={{ fontSize: "1.2em" }}>★★★★★</span>
                            <span style={{ fontSize: "1em", marginLeft: "5px", color: "#666" }}>{news.rating?.number || "N/A"}</span>
                            <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", color: "#666" }}>
                                <i className="fa fa-eye" style={{ marginRight: "5px" }}></i>{news.total_view || "N/A"}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatagoryNews;
