import AppCard from "./AppCard";
import PostsArray from "../data/data";

const printPosts = () => {
    return PostsArray.map((curPost) => (
        <div className="col" key={curPost.id}>
            <AppCard
                image={curPost.image}
                title={curPost.title}
                tags={curPost.tags}
                content={curPost.content}
            />
        </div>
    ))
}

const AppMain = () => {
    return(
        <main>
            <section>
                <div className="row">
                    {printPosts()}
                </div>
            </section>
        </main>
    )
}
export default AppMain;