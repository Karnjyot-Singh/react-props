import AppCard from "./AppCard";
import PostsArray from "../data/data";

const printPosts = (posts) => {
    return posts.map((curPost) => (
        <div className="col" key={curPost.id}>
            <AppCard
                image={curPost.image}
                title={curPost.title}
                tags={curPost.tags}
                content={curPost.content}
                published={curPost.published}
            />
        </div>
    ))
}

const AppMain = () => {
    const publishedPosts = PostsArray.filter(post => post.published);

    return(
        <main>
            <section>
                <div className="row">
                {publishedPosts.length > 0 ? printPosts(publishedPosts) : <p>Nessun Post disponibile</p>}
                </div>
            </section>
        </main>
    )
}
export default AppMain;