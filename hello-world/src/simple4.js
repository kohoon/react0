class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
    render() {
      const text = this.state.liked ? '좋아요 취소' : '좋아요';
      return React.createElement(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        text,
      );
    }
  }

function Container() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <LikeButton />
            <div style={{ marginTop: 20 }}>
                <span>현재 카운트: </span>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>증가</button>
                <button onClick={() => setCount(count - 1)}>감소</button>
            </div>
        </div>
    );
}

