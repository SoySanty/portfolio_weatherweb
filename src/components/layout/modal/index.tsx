type Props = {
  onClick: () => void;
};

const WelcomeModal = (props: Props): JSX.Element => {
  const { onClick } = props;

  return (
    <section className="modal">
      <div className="modal_container">
        <h2 className="modal_title">Weather App</h2>
        <p>
          Welcome to this weather tool, in this website you can get the weather
          from any region. The only thing you have to do is put your region name
          in the search engine.
        </p>
        <p>This website was made witdh the follow tools:</p>
        <p className="modal_subtitle">
          <b>Technologíes:</b>
        </p>
        <ul className="modal_indent">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
        </ul>
        <p className="modal_subtitle">
          <b>Template:</b>
        </p>
        <p></p>
        <a
          href="https://github.com/JonUK/responsive-web-weather-app"
          rel="noreferrer"
          target="_blank"
          className="modal_link modal_indent"
        >
          JonUk
        </a>
        <div className="modal_button_container">
          <button className="modal_button" onClick={onClick}>
            Aceptar
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeModal;
