import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    userSelect: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    width: 120,
    height: 46
  },
  text: {
    marginLeft: theme.spacing(1),
    fontWeight: 1000,
    fontSize: 16
  }
});

class Logo extends React.Component {
  render() {
    const { classes, theme, hideText, inverted, style } = this.props;
    let secondary = theme.palette.primary.main;
    let primary = theme.palette.secondary.main;
    if (inverted) {
      primary = theme.palette.primary.main;
      secondary = theme.palette.secondary.main;
    }
    return (
      <div className={classes.container} style={style}>
        <svg
          id={`svg11469`}
          version={`1.1`}
          viewBox={`0 0 90 90`}
          height="100%"
        >
          <g transform={`translate(109,95)`} id={`layer1`}>
            <g
              id={`g1104`}
              transform={`matrix(0.35277777,0,0,-0.35277777,202.67627,189.95261)`}
            >
              <g id={`g912-8-6`} transform={`rotate(-45,139.38505,1276.3847)`}>
                <path
                  transform="matrix(0.70710678,0.70710678,0.70710678,-0.70710678,0,0)"
                  style={{
                    fill: primary,
                    strokeWidth: 10,
                    fileRule: 'nonzero',
                    strokeJoin: 'miter',
                    strokeMiterlimit: 4,
                    stroke: 'none'
                  }}
                  d="M -8.8498101,-321.13593 H 206.65051 c 2.2597,0 4.07887,1.81918 4.07887,4.07888 v 215.50032 c 0,2.259694 -1.81917,4.078871 -4.07887,4.078871 H -8.8498101 c -2.2596949,0 -4.0788709,-1.819177 -4.0788709,-4.078871 v -215.50032 c 0,-2.2597 1.819176,-4.07888 4.0788709,-4.07888 z"
                  id="rect64-3-3-7"
                />
                <g
                  transform={`translate(-353.0192,18.416835)`}
                  id={`g14-0-5-3`}
                >
                  <g transform={`translate(273,148.1)`} id={`g20-2-9-2`}>
                    <path
                      id="path22-7-6-2-9"
                      style={{
                        fill: secondary,
                        stroke: 'none'
                      }}
                      d="m 0,0 c 0.933,0.067 1.867,-0.367 2.8,-1.3 l 8.45,-8.45 c 0.133,-0.133 0.267,-0.267 0.4,-0.4 l 10.5,-10.5 c 1.733,-1.733 1.733,-3.483 0,-5.25 L 5.65,-42.35 c -1.733,-1.733 -3.467,-1.733 -5.2,0 l -10.5,10.5 c -0.133,0.133 -0.233,0.3 -0.3,0.5 l -0.1,0.05 -0.1,-0.05 -8.35,8.35 c -1.767,1.733 -1.767,3.467 0,5.2 L -2.45,-1.3 C -1.617,-0.5 -0.8,-0.067 0,0 m 15.65,134.05 c 1.8,-1.733 1.833,-3.5 0.1,-5.3 l -16.5,-16.4 c -1.8,-1.8 -3.6,-1.833 -5.4,-0.1 l -10.55,10.5 c -1.733,1.8 -1.7,3.6 0.1,5.4 L 0,144.65 c 1.733,1.667 3.433,1.633 5.1,-0.1 l 10.55,-10.5 m -46.5,-46.5 -10.5,10.55 c -1.733,1.8 -1.7,3.6 0.1,5.4 l 16.35,16.4 c 1.8,1.8 3.583,1.8 5.35,0 l 10.5,-10.55 c 1.8,-1.733 1.8,-3.5 0,-5.3 l -16.4,-16.4 c -1.8,-1.8 -3.6,-1.833 -5.4,-0.1 M -33.8,84.6 c 1.8,-1.767 1.817,-3.517 0.05,-5.25 L -50.2,62.9 c -1.733,-1.767 -3.5,-1.767 -5.3,0 l -10.55,10.5 c -1.733,1.8 -1.733,3.567 0,5.3 l 16.5,16.5 c 1.733,1.733 3.467,1.7 5.2,-0.1 L -33.8,84.6 m -56.95,-30.55 16.5,16.45 c 1.733,1.767 3.467,1.733 5.2,-0.1 L -58.5,59.9 c 1.8,-1.733 1.833,-3.467 0.1,-5.2 L -74.9,38.2 c -1.733,-1.733 -3.5,-1.733 -5.3,0 l -10.55,10.5 c -1.733,1.8 -1.733,3.583 0,5.35 M 58.85,90.9 69.4,80.4 c 1.733,-1.733 1.733,-3.5 0,-5.3 l -90.65,-90.55 c -1.733,-1.733 -3.467,-1.733 -5.2,0 L -37,-4.9 c -0.167,0.167 -0.283,0.35 -0.35,0.55 -0.433,0.3 -0.833,0.6 -1.2,0.9 l -22,22.1 c -0.3,0.3 -0.583,0.633 -0.85,1 -0.233,0.133 -0.45,0.3 -0.65,0.5 l -10.5,10.5 c -1.8,1.733 -1.833,3.467 -0.1,5.2 l 16.5,16.5 c 1.733,1.733 3.5,1.733 5.3,0 l 10.5,-10.5 c 0.2,-0.2 0.383,-0.4 0.55,-0.6 0.333,-0.3 0.65,-0.6 0.95,-0.9 L -18,19.4 34.35,71.75 14.6,91.55 -32.15,44.8 c -1.733,-1.733 -3.467,-1.733 -5.2,0 L -47.9,55.35 c -1.8,1.733 -1.833,3.467 -0.1,5.2 l 65.95,65.85 c 1.733,1.8 3.5,1.833 5.3,0.1 L 33.8,115.95 c 0.133,-0.1 0.25,-0.217 0.35,-0.35 l 0.75,-0.75 22.85,-22.8 c 0.233,-0.267 0.483,-0.517 0.75,-0.75 0.033,-0.133 0.15,-0.267 0.35,-0.4 M 119.5,49 c 1.6,1.6 1.6,3.217 0,4.85 L 4.35,168.95 c -1.433,1.433 -2.883,1.567 -4.35,0.4 -0.133,-0.133 -0.3,-0.267 -0.5,-0.4 l -115.1,-115 c -1.6,-1.7 -1.6,-3.35 0,-4.95 L -0.5,-66.1 0,-66.6 c 1.467,-1.1 2.917,-0.9 4.35,0.6 L 119.5,49"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        {!hideText && (
          <Typography className={classes.text} style={{ color: primary }}>
            OpenPatch
          </Typography>
        )}
      </div>
    );
  }
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  hideText: PropTypes.bool,
  inverted: PropTypes.bool,
  style: PropTypes.object
};

Logo.defaultProps = {
  hideText: false,
  inverted: false
};

export default withStyles(styles)(withTheme(Logo));
