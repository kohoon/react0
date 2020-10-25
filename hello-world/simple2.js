function LikeButton() {
    const [liked, setLiked] = React.useState(false);
    const text = liked ? '좋아요 취소' : '좋아요';
    return React.createElement(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        text,
    );
}
const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(LikeButton), domContainer);

ReactDom.render(
    React.createElement(LikeButton),
    document.querySelector('#react-root1'),
);sdwq
ReactDom.render(
    React.createElement(LikeButton),
    document.querySelector('#react-root2'),
);
ReactDom.render(
    React.createElement(LikeButton),
    document.querySelector('#react-root3'),
);
