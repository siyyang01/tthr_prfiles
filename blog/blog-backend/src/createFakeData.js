import Post from "./models/post";

export default function createFakeDate() {
    const posts = [...Array(40).keys()].map(i => ({
        title: `포스트 #${i}`,
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem-por incididunt ut labore et dolore magna aliqua. UIt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tags: ['짜가', '데이타'],
    }))
    Post.insertMany(posts, (err, docs) => {
        console.log(docs);
    })
}