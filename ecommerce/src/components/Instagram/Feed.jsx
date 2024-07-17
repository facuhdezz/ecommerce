import { useEffect, useState } from "react";

const Feed = () => {

    const [instaFeed, setInstaFeed] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/instagram')
            .then(res => res.json())
            .then(data => {
                setInstaFeed(data.data);
            })
            .catch(error => console.error('Error fetching Instagram feed:', error));
    }, []);

    const renderFeed = (item) => {
        if (item.media_type == "VIDEO") {
            return (
                <video width="320" height="240" controls>
                    <source src={item.media_url} type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            )
        } else {
            return (
                <img src={item.media_url} />
            )
        }
    }

    return (
        <section>
            <h1>Mi feed de Instagram.</h1>
            <article>
                {instaFeed && instaFeed.map(item => (
                    <div key={item.id}>
                        {renderFeed(item)}
                    </div>
                ))}
            </article>
        </section>
    )
}

export default Feed;