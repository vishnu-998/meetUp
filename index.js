const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;

  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="social-media-buttons-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button buttonText="Like" className="like-button" />
        <Button buttonText="share" className="share-button" />
        <Button buttonText="comment" className="comment-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
