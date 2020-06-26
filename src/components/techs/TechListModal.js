import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TechItem from "./TechItem";
import { getTechs } from "../../actions/techActions";
import "../../App.css";

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      style={{ backgroundColor: "coral", color: "BLUE" }}
      id="tech-list-modal"
      className="modal"
    >
      <div className="modal-content">
        <h4>Technicians List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
