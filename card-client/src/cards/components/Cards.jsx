import { Grid } from "@mui/material";
import { arrayOf } from "prop-types";
import React from "react";
import cardType from "../models/types/cardType";
import CardBussinesComponent from "./card/CardBussinesComponent";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesModel";
import { useNavigate } from "react-router-dom";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';


export default function Cards({ cards, handleDelete, handleUpdateFavsPage }) {

  const navigate = useNavigate();
  const { user } = useUser();

  const {
    handleLikeCard,
    handleCallCard,
  } = useCards();

  const handleLike = (id) => {
    handleLikeCard(id);
  };
  const handleCall = (id) => {
    const card = cards.find((card) => card._id === id);
    handleCallCard(card);
  }

  return (
    <React.Fragment>
      {(user?.isBusiness || user?.isAdmin) && (  
      <Tooltip title="Create card" placement="top" TransitionComponent={Zoom}>
        <Fab color="primary" aria-label="add" onClick={() => { navigate(ROUTES.CREATE_CARD) }} sx={{ position: "fixed", bottom: 110, right: { xs: 30, sm: 50, md: 50, lg: 100 } }}>
          <AddIcon />
        </Fab>
      </Tooltip>)}

      <Grid container sx={{ justifyContent: "center" }}>
        {cards.map((card, index) => (
          <Grid item key={index}>
            <CardBussinesComponent
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleCall={handleCall}
              handleLike={handleLike}
              handleUpdateFavsPage={handleUpdateFavsPage}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

Cards.propTypes = {
  cards: arrayOf(cardType),
};
