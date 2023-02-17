import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import{Link} from "react-router-dom";

import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';



function Header() {
  const {t, i18n} = useTranslation()
  const changeLanguage = (lang)=>{
    i18n.changeLanguage(lang)
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Button variant="contaned" color="white">{t("Home")}</Button>
          </Link>
          <Link to="/about">
            <Button variant="contaned" color="white">{t("About")}</Button>
          </Link>
          <Button variant="contained" id="fi" onClick={()=> changeLanguage("fi")}>FI</Button>
          <Button variant="contained" id="en" onClick={()=> changeLanguage("en")}>EN</Button>
        </Toolbar>
      </AppBar>
      <p>{t("This is front page")}</p>
      
    </Box>

  );
}

export default function App() {
  return (
    <Suspense fallback="loading">
      <Header />
    </Suspense>
  );
}




