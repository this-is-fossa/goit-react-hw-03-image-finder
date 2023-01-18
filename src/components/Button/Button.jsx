export const Button = ({ onClick }) => {
    return (
      <button type="button" onClick={() => onClick()}>
        Load More
      </button>
    );
  };