
import PropTypes from 'prop-types';

function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

Pre.propTypes = {
  load: PropTypes.bool.isRequired, // Validar que 'load' sea un booleano y obligatorio
};

export default Pre;
