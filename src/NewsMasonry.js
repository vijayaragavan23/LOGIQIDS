import Masonry from "@mui/lab/Masonry";
import React from 'react'
import Dummy from "./image.png"

function NewsMasonry({ articles }) {

    return (
        <div style={{ margin: "50px auto", width: "70%", marginTop: "120px" }}>
            <Masonry columns={3} spacing={2.5}>
                {articles.map((item, index) => (
                    <a href={item.url} target="blank" rel="noreferrer" key={index} className="newsCard" >
                        <img 
                            src={item.urlToImage === null ? Dummy : item.urlToImage}
                            alt="news"
                            className="newsCard__image"
                        />
                        <div className="newsCard__content">
                            <div className="newsCard__title">
                                {item.title}
                            </div>
                            <div className="newsCard__description">
                                {item.description}
                            </div>
                            <div className="newsCard__time">
                                - {("0" + new Date(item.publishedAt).getDate()).slice(-2)}/{("0" + new Date(item.publishedAt).getMonth()+1).slice(-2)}/{new Date(item.publishedAt).getFullYear()}
                                {" "}
                                {("0" + new Date(item.publishedAt).getHours()).slice(-2)}:{("0" + new Date(item.publishedAt).getMinutes()).slice(-2)}
                            </div>
                        </div>
                    </a>
                ))}
            </Masonry>
        </div>
    )
}

export default NewsMasonry
