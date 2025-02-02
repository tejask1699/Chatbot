import React, { useEffect, useState } from 'react'
import '../CSS/organization.css'
import Navbar from "../Navigation/Navbar"
function Organization() {
    const [companyName, setCompanyName] = useState("");
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [description, setDescription] = useState("");
    const [webpages, setWebpages] = useState([]);
    const [selectedPage, setSelectedPage] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setWebpages([

            { "url": "http://www.example.com/about", "status": "Scraped", "dataChunks": ["BeyondChats AI is an AI-powered chatbot platform..."] },
            { "url": "/services", "status": "pending", "dataChunks": [] },
            { "url": "http://www.example.com/about", "status": "Scraped", "dataChunks": ["BeyondChats AI is an AI-powered chatbot platform..."] },
            { "url": "/contact", "status": "detected", "dataChunks": [] },
            { "url": "/services", "status": "pending", "dataChunks": [] }

        ]);
    }, []);


    const fetchMetaDescription = async () => {
        setLoading(true);
        try {
            setTimeout(() => {
                setDescription("This is an auto-fetched sample meta-description from the website.");
                setLoading(false);
            }, 1500);
        } catch (error) {
            console.error("Error fetching meta description", error);
            setLoading(false);
        }
    };
    return (
        <>
        <Navbar/>
        <div className='container'>
            <h2>Setup Your Organization</h2>
            <div>
                <label>Company Name</label>
                <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />
            </div>
            <div>
                <label>Website URL</label>
                <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    onBlur={fetchMetaDescription}
                />
                {loading && <p>Fetching meta description...</p>}
            </div>
            <div>
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <h3>Webpage Scraping Status</h3>
            <div>
            <table>
                <thead>
                    <tr>
                        <th>Page URL</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {webpages.map((page, index) => (
                        <tr key={index}>
                            <td>{page.url}</td>
                            <td>{page.status}</td>
                            <td>
                                {page.status === "Scraped" && (
                                    <button 
                                    onClick={() => setSelectedPage(page)}
                                    >
                                        View Data
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            {selectedPage && (
                <div>
                    <div>
                        <h3>Scraped Data</h3>
                        <p>{selectedPage.url}</p>
                        <ul>
                            {selectedPage.dataChunks.map((chunk, idx) => (
                                <li key={idx}>{chunk}</li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setSelectedPage(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
        </>
    )

};
export default Organization
