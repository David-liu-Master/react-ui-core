import React, { useState } from 'react';
import { Trans } from '@lingui/macro';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { changeLanguage } from './redux/i18n/actions';
import { getLanguage } from './redux/i18n/selectors';
import de from './images/de.svg';
import gb from './images/gb.svg';

const languages = {
  de: {
    label: <Trans>German</Trans>,
    icon: de
  },
  en: {
    label: <Trans>English</Trans>,
    icon: gb
  }
};

const useStyles = makeStyles(theme => ({
  flagButton: {
    display: 'flex'
  },
  flag: {
    borderRadius: '50%',
    width: 20,
    height: 20
  },
  selectFlag: {
    borderRadius: '50%',
    width: 20,
    height: 20,
    marginRight: theme.spacing.unit
  },
  select: {
    display: 'flex',
    alignItems: 'center'
  }
}));

function LanguageSelect() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const language = useSelector(getLanguage);

  function handleLanguageSelect(code) {
    dispatch(changeLanguage(code));
    handleClose();
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleOpen(e) {
    setAnchorEl(e.currentTarget);
  }

  return (
    <>
      <IconButton
        aria-label={language}
        onClick={handleOpen}
        aria-controls="language-menu"
        aria-haspopup="true"
      >
        <div className={classes.flagButton}>
          <img className={classes.flag} src={languages[language].icon} />
        </div>
      </IconButton>
      <Menu open={Boolean(anchorEl)} onClose={handleClose} anchorEl={anchorEl}>
        {Object.keys(languages).map(code => (
          <MenuItem
            key={code}
            value={code}
            onClick={() => handleLanguageSelect(code)}
          >
            <div className={classes.select}>
              <img className={classes.selectFlag} src={languages[code].icon} />
              {languages[code].label}
            </div>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

LanguageSelect.propTypes = {};

export default LanguageSelect;
